"use client";

import { useRouter } from "next/navigation";

export default function TrekkingPage() {
  const router = useRouter();

  const trekkingPlaces = [
    {
      name: "Talakona Waterfalls",
      image: "https://i.pinimg.com/736x/72/a9/cc/72a9cca1ae8d3bd0dceb35a6d71b1fda.jpg",
    },
    {
      name: "Nagalapuram Hills",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/92/f3/05/nagalapuram-falls-is.jpg?w=800&h=500&s=1",
    },
    {
      name: "Tumburu Theertham",
      image:
        "https://www.trawell.in/admin/images/upload/741666410Tirumala_Thumburu_Theertham_Main.jpg",
    },
    {
      name: "Nagari Hills",
      image:
        "https://duraimurugan.com/wp-content/uploads/2012/06/mountain.jpg",
    },
    {
      name: "Srivari Mettu (Tirumala)",
      image:
        "https://tirumalatirupatiyatra.in/wp-content/uploads/2017/11/Steps-Sri-Vari-Mettu.jpg",
    },
    {
      name: "Japali Theertham (Tirumala)",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2a/48/c8/japali-teertham.jpg?w=1200&h=-1&s=1",
    },
    {
      name: "Chakra Theertham (Tirumala)",
      image:
        "https://tirupatitirumalainfo.com/wp-content/uploads/2016/09/Chakra-Theertham.jpg",
    },
    {
      name: "Horsley Hills",
      image:
        "https://www.savaari.com/blog/wp-content/uploads/2022/04/48558708151_ac21de557f_c.jpg",
    },
  ];

  const handleLogout = () => {
    // later: clear token / session here
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Trekking Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {trekkingPlaces.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">
                {place.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* 🔴 Logout button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
