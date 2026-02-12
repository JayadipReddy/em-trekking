"use client";
import "./globals.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔁 Re-check user on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser);
    }
  }, [pathname]);

  // 🔽 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
    router.push("/login");
  };

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-11 cursor-pointer"
              />
            </Link>

            {/* User Profile Section */}
            {user && (
              <div className="relative" ref={dropdownRef}>
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

                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="pb-12">{children}</main>
      </body>
    </html>
  );
}
