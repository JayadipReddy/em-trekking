"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TrekkingPage() {
  const router = useRouter();

 const trekkingPlaces = [
  {
    name: "Talakona Waterfalls",
    slug: "talakona-waterfalls",
    image: "https://i.pinimg.com/736x/72/a9/cc/72a9cca1ae8d3bd0dceb35a6d71b1fda.jpg",
  },
  {
    name: "Nagalapuram Hills",
    slug: "nagalapuram-hills",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/92/f3/05/nagalapuram-falls-is.jpg?w=800&h=500&s=1",
  },
  {
    name: "Tumburu Theertham",
    slug: "tumburu-theertham",
    image: "https://www.trawell.in/admin/images/upload/741666410Tirumala_Thumburu_Theertham_Main.jpg",
  },
  {
    name: "Nagari Hills",
    slug: "nagari-hills",
    image: "https://duraimurugan.com/wp-content/uploads/2012/06/mountain.jpg",
  },
  {
    name: "Srivari Mettu (Tirumala)",
    slug: "srivari-mettu",
    image: "https://tirumalatirupatiyatra.in/wp-content/uploads/2017/11/Steps-Sri-Vari-Mettu.jpg",
  },
  {
    name: "Japali Theertham (Tirumala)",
    slug: "japali-theertham",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2a/48/c8/japali-teertham.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Chakra Theertham (Tirumala)",
    slug: "chakra-theertham",
    image: "https://tirupatitirumalainfo.com/wp-content/uploads/2016/09/Chakra-Theertham.jpg",
  },
  {
    name: "Horsley Hills",
    slug: "horsley-hills",
    image: "https://www.savaari.com/blog/wp-content/uploads/2022/04/48558708151_ac21de557f_c.jpg",
  },
  {
    name: "Mamandur Forest",
    slug: "mamandur-forest",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweosnCfuOPzyyssxqTaMRnTGtHEM_IA-ICHADq_1p39wKR2Y6zI5s1amZ0jiU4u6xietx05m5rri1Lc_7UmRGDfnfbn4TuZmT8B-9skt8vfFXzvTgPk3GJaC2f3Sa22iSGXZnS1gZg=w408-h723-k-no",
  },
  {
    name: "Chandragiri Fort",
    slug: "chandragiri-fort",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweod0p_boCC1Up9u-hLoIzybhTR7IFh1Tp7iNnTQEUhv6nwjcsXHYRpBmSNPKU6P6wAqTdNtO1Er8_qulHw5p8xT1RekC_r8BzMVxbN0Uq4K_AHLZ10hQSqISDvGS6B7VbPUlt9I=w270-h312-n-k-no",
  },
   {
    name: "Kailasakona Falls",
    slug: "kailasakona-falls",
    image: "https://www.bing.com/th/id/OSK.m2yN8BvxvXuetMcqA-1v0dJyyt_j7CwxmSqGVYfxFTI?w=310&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
   {
    name: "Moolakona Falls",
    slug: "moolakona-falls",
    image: "https://th.bing.com/th/id/OIP.Q7FlJMkaureO_wEWJei2FQHaE7?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
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
  {trekkingPlaces.map((place) => (
    <Link key={place.slug} href={`/trekking/${place.slug}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
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
    </Link>
  ))}
</div>
    </main>
  );
}
