"use client";

import { useTranslate } from "../../lib/useTranslate";

export default function Footer() {

  const { t } = useTranslate();

  return (

    <footer className="bg-gray-100 border-t mt-10">

      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600">

        {t("copyright")} {new Date().getFullYear()} Digital Twin Farm

        <br />

        {t("footerText")}

      </div>

    </footer>

  );
}