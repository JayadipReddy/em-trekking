"use client";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            
            <Link href="/">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-12 cursor-pointer"
              />
            </Link>

            {user && (
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">
                  👋 {user}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}

          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
