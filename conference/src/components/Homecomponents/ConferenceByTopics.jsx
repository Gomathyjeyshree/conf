import React, { useState } from "react";

const topics = {
  Engineering: [
    "Aeronautical", "Architecture", "Artificial Intelligence", "Big Data",
    "Bioinformatic", "Biomedical Engineering", "Biotechnology",
    "Computer Software And Applications", "Computer Vision", "Computing",
    "Construction", "Cybersecurity", "Data Mining", "Image Processing",
    "Internet And World Wide Web", "Knowledge Management", "Manufacturing",
    "Materials", "Military", "Mining", "Nanoscience", "Nanotechnology",
    "Nanotechnology And Smart Materials", "Networking", "Polymers And Plastics",
    "Remote Sensing"
  ],
  "Business And Economics": [],
  Education: [],
  "Engineering And Technology": [],
  "Health And Medicine": [],
  Interdisciplinary: [],
  "Mathematics And Statistics": [],
  "Physical And Life Sciences": [],
  "Regional Studies": [],
  "Social Science And Humanities": [],
  Law: []
};

export default function ConferenceByTopics() {
  const [activeTopic, setActiveTopic] = useState("Engineering");

  return (
    <div className="bg-gray-50 py-12 px-6 min-h-screen">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-purple-700">
        Conference By Topics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Sidebar */}
        <div className="border rounded-xl overflow-hidden shadow">
          {Object.keys(topics).map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`w-full text-left px-4 py-3 border-b last:border-none transition flex justify-between items-center
                ${
                  activeTopic === topic
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold"
                    : "bg-white hover:bg-pink-50 text-gray-800"
                }`}
            >
              {topic}
              {activeTopic === topic && <span className="ml-2">›</span>}
            </button>
          ))}
        </div>

        {/* Details Panel */}
        <div className="border rounded-xl shadow">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 font-semibold rounded-t-xl">
            {activeTopic}
          </div>
          <div className="p-4 max-h-80 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            {topics[activeTopic].length > 0 ? (
              topics[activeTopic].map((sub, idx) => (
                <div key={idx} className="text-gray-800 text-sm flex items-start">
                  <span className="mr-2 text-purple-500">•</span>
                  {sub}
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No subtopics available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
