"use client";

import { useEffect, useState } from "react";

interface WeatherCardProps {
  lat: number;
  lon: number;
}

export default function WeatherCard({ lat, lon }: WeatherCardProps) {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/weather?lat=${lat}&lon=${lon}`)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(() => setWeather(null));
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
      <h3 className="text-lg font-semibold mb-3">Current Weather</h3>
      <p>🌡 Temperature: {weather.temperature}°C</p>
      <p>🌥 Condition: {weather.condition}</p>
      <p>💨 Wind Speed: {weather.wind_speed} m/s</p>
      <p>💧 Humidity: {weather.humidity}%</p>
    </div>
  );
}
