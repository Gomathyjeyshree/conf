import React from "react";

const conferences = [
  {
    date: "18th Sep 2025",
    title: "International Conference on Hematology and Blood Disease - ICHBD",
    city: "TORONTO",
    country: "Canada",
  },
  {
    date: "15th Sep 2025",
    title: "International Conference on Arts, Humanities and Social Sciences - ICAHSS",
    city: "ACCRA",
    country: "Ghana",
  },
  {
    date: "29th Sep 2025",
    title: "International Conference on African Philosophical Thought - ICAPTH",
    city: "BERLIN",
    country: "Germany",
  },
  {
    date: "30th Sep 2025",
    title: "International Conference on Architecture and Alternative Design Solutions - ICAADS",
    city: "MONTREAL",
    country: "Canada",
  },
];

export default function ConferenceByMonths() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-purple-700">
        Upcoming <span className="text-pink-500">Conferences</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {conferences.map((conf, idx) => (
          <div key={idx} className="relative text-center">
            {/* Date Circle */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
              {conf.date}
            </div>

            {/* Card */}
            <div className="border-2 border-purple-300 rounded-xl p-6 pt-12 bg-white shadow-md hover:shadow-xl transition">
              <p className="text-purple-600 font-semibold text-sm mb-2 line-clamp-2">
                {conf.title}
              </p>
              <p className="font-bold text-lg text-purple-700">{conf.city}</p>
              <p className="text-pink-500">{conf.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
