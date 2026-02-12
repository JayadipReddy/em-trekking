import { treks } from "@/data/treks";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Mountain, Calendar } from "lucide-react";
import WeatherCard from "./WeatherCard";

export default function TrekDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const trek = treks.find((t) => t.slug === slug);
console.log("Slug from URL:", slug);
console.log("Available slugs:", treks.map(t => t.slug));

  if (!trek) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 pb-16">

      {/* Hero Image */}
      <div className="w-full flex justify-center mt-8">
        <div className="relative w-[90%] md:w-[75%] lg:w-[60%] aspect-[16/9] rounded-xl overflow-hidden shadow-md">
          <img
            src={trek.image}
            alt={trek.name}
            className="w-full h-full object-contain bg-black"
          />
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 -mt-10 relative z-10">

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
            <MapPin className="text-blue-600" size={18} />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Distance: {trek.distance}
            </span>
          </div>

          <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl">
            <Mountain className="text-green-600" size={18} />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Difficulty: {trek.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-xl">
            <Calendar className="text-yellow-600" size={18} />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Best Time: {trek.bestTime}
            </span>
          </div>

        </div>

        {/* About Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            About This Trek
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            {trek.description}
          </p>
        </div>

        {/* ✅ Weather Section (Client Component) */}
        <WeatherCard lat={trek.lat} lon={trek.lon} />

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Location & Directions
          </h2>

          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src={trek.googleMapsEmbed}
              width="100%"
              height="350"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <Link
            href="/trekking"
            className="text-sm text-gray-600 hover:underline"
          >
            ← Back to Trekking List
          </Link>
        </div>

      </div>
    </div>
  );
}
