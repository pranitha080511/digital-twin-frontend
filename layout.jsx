import "./globals.css";

/* Leaflet Map Styles */
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  title: "Digital Twin Farm",
  description: "AI Powered Smart Farming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">

        <LanguageProvider>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </LanguageProvider>

      </body>
    </html>
  );
}