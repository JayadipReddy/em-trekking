"use client";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<string | null>(null);
  const pathname = usePathname(); // 👈 detects route change
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, [pathname]); // 👈 re-check when page changes

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
        <div className="relative">
      
          {/* Avatar Button */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-gray-100 transition"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
              {user.charAt(0).toUpperCase()}
            </div>
      
            <span className="text-gray-800 font-medium text-sm">
              {user}
            </span>
          </div>
      
          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
