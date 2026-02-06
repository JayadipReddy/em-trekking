import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white max-w-3xl p-10 rounded-2xl shadow-lg text-center">
        
        {/* 🔷 Big Logo */}
        <img
          src="/logo.png"
          alt="Enterprise Minds Logo"
          className="h-24 mx-auto mb-6"
        />

        {/* 🔷 Heading */}
        <h1 className="text-3xl font-bold mb-4">
          Trekking Guide – Tirupati Region
        </h1>

        {/* 🔷 Description */}
        <p className="text-gray-700 text-lg mb-4">
          This website is developed by <span className="font-semibold">Enterprise Minds</span>,
          Tirupati branch, with the goal of helping people explore the best trekking
          and nature destinations in and around Tirupati.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          From serene waterfalls to scenic hill treks and spiritual forest paths,
          this platform gives you a glimpse of places worth visiting for trekking
          enthusiasts and nature lovers.
        </p>

        {/* 🔷 Actions */}
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Register
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
