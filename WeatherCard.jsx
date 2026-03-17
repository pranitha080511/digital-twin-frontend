"use client";

import { useTranslate } from "../../lib/useTranslate";

export default function WeatherCard({ data }) {

  const { t } = useTranslate();

  if (!data) return null;

  return (

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">

      <h2 className="text-lg font-semibold mb-4">
        🌤 {t("liveFarmWeather")}
      </h2>

      <div className="space-y-2 text-gray-700">

        <p>
          🌡 {t("temperature")}: <strong>{data.temperature}°C</strong>
        </p>

        <p>
          💧 {t("humidity")}: <strong>{data.humidity}%</strong>
        </p>

        <p>
          ☁ {t("condition")}: <strong>{data.weather}</strong>
        </p>

      </div>

    </div>

  );

}