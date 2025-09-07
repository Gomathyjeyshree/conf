import React, { useState } from "react";

// Sample data
const countries = [
  { name: "Andorra", flag: "🇦🇩", cities: ["Andorra", "Andorra la Vella", "Arinsal", "Canillo", "El Pas de la Casa", "Encamp", "La Massana", "Ordino", "Santa Coloma"] },
  { name: "Armenia", flag: "🇦🇲", cities: ["Yerevan", "Gyumri", "Vanadzor", "Etchmiadzin"] },
  { name: "Austria", flag: "🇦🇹", cities: ["Vienna", "Graz", "Salzburg", "Innsbruck"] },
  { name: "Belarus", flag: "🇧🇾", cities: ["Minsk", "Gomel", "Brest", "Vitebsk"] },
  { name: "Belgium", flag: "🇧🇪", cities: ["Brussels", "Antwerp", "Ghent", "Bruges"] },
];

const ConferenceCities = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="bg-gray-50 p-8 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
          Top Cities for Conferences in Europe 2025-2026
        </h2>
        <p className="text-gray-600 mt-2">
          Discover upcoming conferences happening in Europe’s most popular cities.
        </p>
      </div>

      <div className="flex bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 rounded-xl shadow-lg overflow-hidden">
        {/* Left column: Countries */}
        <div className="w-1/4 bg-gradient-to-b from-purple-600 to-pink-400 overflow-y-auto max-h-[500px]">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-3 cursor-pointer transition-colors ${
                selectedCountry.name === country.name
                  ? "bg-white text-purple-700 font-bold shadow-inner rounded-r-lg"
                  : "text-white hover:bg-white hover:text-purple-700"
              }`}
              onClick={() => setSelectedCountry(country)}
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </div>
          ))}
        </div>

        {/* Right column: Cities */}
        <div className="w-3/4 bg-white p-6 rounded-r-xl">
          <div className="flex items-center gap-2 mb-4">
            <span>{selectedCountry.flag}</span>
            <h3 className="font-semibold text-lg text-purple-700">{selectedCountry.name}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {selectedCountry.cities.map((city, index) => (
              <span
                key={index}
                className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg font-medium hover:bg-pink-200 cursor-pointer transition"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCities;
