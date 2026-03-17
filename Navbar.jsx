"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function Navbar() {

  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (

    <nav className="bg-green-600 text-white flex justify-between items-center px-8 py-4 shadow">

      {/* Logo */}

      <div className="text-lg font-semibold flex items-center gap-2">
        🌿 Digital Twin Farm
      </div>


      {/* Navigation Links */}

      <div className="flex items-center gap-6">

        <Link href="/">
          {t.home}
        </Link>

        <Link href="/login">
          {t.login}
        </Link>

        <Link href="/signup">
          {t.signup}
        </Link>

        <Link href="/dashboard">
          {t.dashboard}
        </Link>


        {/* Language Toggle Button */}

        <button
          onClick={toggleLanguage}
          className="bg-white text-green-700 px-3 py-1 rounded-md font-medium hover:bg-gray-100 transition"
        >
          {language === "en" ? "தமிழ்" : "English"}
        </button>

      </div>

    </nav>

  );

}