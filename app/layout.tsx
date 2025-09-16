import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/open-sauce-one/400.css"; // regular
import "@fontsource/open-sauce-one/500.css"; // regular
import "@fontsource/open-sauce-one/700.css"; // bold (optional)
import "@fontsource/open-sauce-one/800.css"; // bold (optional)
import "@fontsource/open-sauce-one/900.css"; // bold (optional)
import "@fontsource/open-sauce-one"; // bold (optional)

// or just import the base:
import "@fontsource/open-sauce-one";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Jan Sahas | Social Empowerment Society",
  description: "Jan Sahas | Social Empowerment Society",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="font-sauce antialiased min-h-screen bg-custom-gradient bg-white text-[#F6F6F6] tracking-[-0.7px] lg:pt-3"
      >
        <NavBar />
        <main className="pb-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
