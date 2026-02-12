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
    image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12958.231513678835!2d79.63272790531167!3d13.387245229490675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d58b5298afe09%3A0x4f36e6b3da303014!2sKailasa%20Kona%20falls!5e1!3m2!1sen!2sin!4v1770869943828!5m2!1sen!2sin",
  },
   {
    name: "Moolakona Falls",
    slug: "moolakona-falls",
    image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.980074975068!2d79.6204636!3d13.475325399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d5b56abe8a857%3A0x6a8e2ae5291cfbb6!2sMoola%20Kona%20Waterfalls!5e0!3m2!1sen!2sin!4v1770870326785!5m2!1sen!2sin",
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
