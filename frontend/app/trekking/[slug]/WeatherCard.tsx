"use client";

import { useEffect, useState } from "react";

export default function WeatherCard({ lat, lon }: { lat: number; lon: number }) {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/weather?lat=${lat}&lon=${lon}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [lat, lon]);

  if (!weather) {
    return (
      <div className="mt-8 p-6 bg-blue-50 rounded-xl shadow-sm">
        Loading weather...
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-3">
        Current Weather
      </h3>
      <p>🌡 Temperature: {weather.temperature}°C</p>
      <p>🌥 Condition: {weather.condition}</p>
      <p>💨 Wind Speed: {weather.wind_speed} m/s</p>
      <p>💧 Humidity: {weather.humidity}%</p>
    </div>
  );
}
