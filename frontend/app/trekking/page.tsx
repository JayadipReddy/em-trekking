"use client";

import Link from "next/link";
import { treks } from "@/data/treks";

export default function TrekkingPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Trekking Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {treks.map((trek) => (
          <Link key={trek.slug} href={`/trekking/${trek.slug}`}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src={trek.image}
                alt={trek.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-center">
                  {trek.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
