"use client";

import { useTranslate } from "../../lib/useTranslate";

export default function ProfitCard({ profit }) {

  const { t } = useTranslate();

  return (

    <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm">

      <h2 className="text-lg font-semibold text-green-700 mb-2">
        {t("estimatedProfitImpact")}
      </h2>

      <p className="text-2xl font-bold text-green-600">
        + ₹{profit} {t("profitIncrease")}
      </p>

      <p className="text-sm text-gray-600 mt-2">
        {t("profitDescription")}
      </p>

    </div>

  );
}