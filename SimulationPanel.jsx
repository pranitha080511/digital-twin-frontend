"use client";

import { useState } from "react";
import { useTranslate } from "../../lib/useTranslate";

export default function SimulationPanel() {

  const { t } = useTranslate();

  const [irrigation, setIrrigation] = useState(1);
  const [fertilizer, setFertilizer] = useState(65);

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">

      <h2 className="text-lg font-semibold">
        {t("whatIfSimulation")}
      </h2>

      {/* Irrigation Slider */}

      <div>

        <label className="text-sm font-medium">
          {t("irrigationDelay")} ({t("days")}): {irrigation}
        </label>

        <input
          type="range"
          min="0"
          max="7"
          value={irrigation}
          onChange={(e) => setIrrigation(e.target.value)}
          className="w-full mt-2"
        />

      </div>

      {/* Fertilizer Slider */}

      <div>

        <label className="text-sm font-medium">
          {t("fertilizerLevel")} (%): {fertilizer}
        </label>

        <input
          type="range"
          min="0"
          max="100"
          value={fertilizer}
          onChange={(e) => setFertilizer(e.target.value)}
          className="w-full mt-2"
        />

      </div>

    </div>

  );

}