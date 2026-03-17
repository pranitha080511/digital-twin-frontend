"use client";

import { useTranslate } from "../../lib/useTranslate";

export default function About() {

  const { t } = useTranslate();

  return (

    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold text-green-700 mb-4">
        {t("aboutTitle")}
      </h1>

      <p className="text-gray-600 leading-relaxed">
        {t("aboutDescription")}
      </p>

    </div>

  );
}