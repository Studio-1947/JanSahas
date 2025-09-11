import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not set. Add it to .env.local");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const options: Parameters<typeof MongoClient.prototype.connect>[0] = {};

let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  const client = new MongoClient(uri);
  global._mongoClientPromise = client.connect(options);
}

clientPromise = global._mongoClientPromise;

export async function getDb() {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB; // optional fallback to DB in URI
  return dbName ? client.db(dbName) : client.db();
}

export async function getClient() {
  return clientPromise;
}

