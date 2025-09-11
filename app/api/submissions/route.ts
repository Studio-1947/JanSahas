// ✅ Keep these as plain literals (no `as const`, no expressions)
import { NextResponse } from "next/server";
import mongoose, { Schema, Model, InferSchemaType } from "mongoose";
import { google, sheets_v4 } from "googleapis";

export const runtime = "nodejs" as const;           // googleapis requires Node runtime
export const preferredRegion = ["bom1"] as const;   // Vercel Mumbai; change if needed
export const dynamic = "force-dynamic";             // disable caching

/** ---------------- Env ---------------- */
const {
  MONGODB_URI,
  SPREADSHEET_ID,
  SHEET_NAME = "Submissions",
  GOOGLE_SHEETS_CLIENT_EMAIL,
  GOOGLE_SHEETS_PRIVATE_KEY: RAW_PK,
} = process.env;

function hasAllEnv(): boolean {
  return Boolean(
    MONGODB_URI &&
      SPREADSHEET_ID &&
      GOOGLE_SHEETS_CLIENT_EMAIL &&
      RAW_PK
  );
}

/** ---------------- Mongo (module-level singletons) ---------------- */
let mongoPromise: Promise<typeof mongoose> | null = null;

function connectDB(): Promise<typeof mongoose> {
  if (!mongoPromise) {
    mongoose.set("strictQuery", true);
    mongoPromise = mongoose.connect(String(MONGODB_URI));
  }
  return mongoPromise as Promise<typeof mongoose>;
}

const SubmissionSchema = new Schema(
  {
    data: { type: Schema.Types.Mixed, required: true }, // entire JSON payload
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

type SubmissionDoc = InferSchemaType<typeof SubmissionSchema>;
const Submission: Model<SubmissionDoc> =
  (mongoose.models.Submission as Model<SubmissionDoc>) ||
  mongoose.model<SubmissionDoc>("Submission", SubmissionSchema);

/** ---------------- Google Sheets (module-level singleton) ---------------- */
let sheetsClient: sheets_v4.Sheets | null = null;

function getSheets(): sheets_v4.Sheets {
  if (sheetsClient) return sheetsClient;
  const auth = new google.auth.JWT({
    email: String(GOOGLE_SHEETS_CLIENT_EMAIL),
    key: String(RAW_PK).replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

/** ---------------- Handler ---------------- */
export async function POST(req: Request) {
  try {
    if (!hasAllEnv()) {
      return NextResponse.json(
        { error: "Server is missing environment variables" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Record<string, unknown>;

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // 1) Save to MongoDB
    await connectDB();
    const doc = await Submission.create({ data: body });

    // 2) Append to Google Sheets
    const ts = new Date().toISOString();
    await getSheets().spreadsheets.values.append({
      spreadsheetId: String(SPREADSHEET_ID),
      range: `${SHEET_NAME}!A:Z`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[ts, name, email, message, JSON.stringify(body)]],
      },
    });

    // Use _id to avoid relying on virtual id typing
    return NextResponse.json(
      { ok: true, id: String((doc as { _id: mongoose.Types.ObjectId })._id) },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "ServerError" }, { status: 500 });
  }
}
