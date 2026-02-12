"use client";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* 🔷 Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-12 cursor-pointer"
              />
            </Link>

            {/* User Section */}
            {user && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    {user.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

