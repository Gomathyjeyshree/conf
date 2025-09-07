import React from "react";

const data = {
  Asia: [
    "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei Darussalam",
    "Burma", "China", "Hong Kong", "India", "Mongolia", "Nepal", "Oman",
    "Pakistan", "Palestinian Territories", "Philippines", "Qatar", "Russia",
    "Saudi Arabia"
  ],
  Africa: [
    "Algeria", "Cameroon", "Egypt", "Ethiopia", "Gambia", "Ghana", "Kenya",
    "Lesotho", "Liberia", "Mozambique", "Namibia", "Nigeria", "Rwanda",
    "Seychelles", "Sierra Leone", "Somalia", "South Africa", "Sudan"
  ],
  Europe: [
    "Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium", "Bulgaria",
    "Croatia", "Cyprus", "Italy", "Latvia", "Lebanon", "Lithuania",
    "Luxembourg", "Macedonia", "Netherlands", "Norway", "Poland"
  ]
};

const flags = {
  Asia: "https://flagcdn.com/w40/my.png",
  Africa: "https://flagcdn.com/w40/et.png",
  Europe: "https://flagcdn.com/w40/eu.png"
};

export default function ConferenceByCountry() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-400 py-10 px-6 min-h-screen text-white">
      <h2 className="text-center text-3xl font-bold mb-10">
        Conference by Country
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(data).map(([continent, countries]) => (
          <div
            key={continent}
            className="bg-white text-black p-6 shadow-lg rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={flags[continent]}
                alt={`${continent} flag`}
                className="w-8 h-6 rounded-sm"
              />
              <span className="text-xl font-semibold">{continent}</span>
            </div>
            <div className="max-h-72 overflow-y-auto">
              <ul className="grid grid-cols-1 gap-2">
                {countries.map((country) => (
                  <li
                    key={country}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-purple-500">»</span> {country}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
