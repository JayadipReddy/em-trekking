import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Trekking App",
  description: "Explore trekking destinations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* 🔷 Header with Logo */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-12 cursor-pointer"
              />
            </Link>
          </div>
        </header>

        {/* 🔷 Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
