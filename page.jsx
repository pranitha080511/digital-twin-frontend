"use client";

import { useTranslate } from "../lib/useTranslate";

export default function Home() {

  const { t } = useTranslate();

  return (

    <div className="bg-gradient-to-b from-green-50 to-white">

      {/* HERO SECTION */}

      <section className="max-w-6xl mx-auto px-4 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          {t("heroTitleLine1")}
          <br />
          {t("heroTitleLine2")}
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          {t("heroDescription")}
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="/dashboard"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition font-semibold"
          >
            {t("goDashboard")}
          </a>

          <a
            href="/login"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition font-semibold"
          >
            {t("login")}
          </a>

        </div>

      </section>


      {/* FEATURES SECTION */}

      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h3 className="font-semibold text-lg text-green-700">
            {t("predictiveYield")}
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            {t("predictiveYieldDesc")}
          </p>

        </div>


        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h3 className="font-semibold text-lg text-green-700">
            {t("whatIfSimulation")}
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            {t("whatIfSimulationDesc")}
          </p>

        </div>


        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h3 className="font-semibold text-lg text-green-700">
            {t("profitOptimization")}
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            {t("profitOptimizationDesc")}
          </p>

        </div>

      </section>

    </div>

  );
}