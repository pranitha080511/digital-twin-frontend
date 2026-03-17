"use client";

import { useTranslate } from "../../lib/useTranslate";

export default function PredictionCard({ value }) {

  const { t } = useTranslate();

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm">

      <h2 className="text-lg font-semibold mb-3">
        {t("yieldPrediction")}
      </h2>

      <div className="text-4xl font-bold text-green-600">
        {value} Tons / Hectare
      </div>

      <p className="text-sm text-gray-500 mt-2">
        {t("yieldDescription")}
      </p>

    </div>

  );
}