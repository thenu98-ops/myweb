import React from 'react';
import { TrophyIcon } from 'lucide-react';
export function Achievements() {
  const achievements = ['Champions – Genezis Inter-University Idea Pitch & Robotics Competition (AI Powered device for blind people) 2024 | KDU', 'Champion – ROSCCO Line Following Robotics Competition 2023 | KDU', '2nd Runner-Up – DEXTRON Fast Line-Following Robot Competition 2024 | University of Moratuwa', 'Semi-Finalist – SLIOT Ideathon Competition (AI powered Traffic Light System) 2023 | University of Moratuwa', 'Semi-Finalist – Robot Battles 2.0 Death Race Competition 2024 | Uwa Wellassa University'];
  return <section className="py-20 bg-gray-800 bg-opacity-80 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Achievements
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-md overflow-hidden border border-gray-700">
            <div className="p-6 space-y-4">
              {achievements.map((achievement, index) => <div key={index} className="flex items-start">
                  <TrophyIcon className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">{achievement}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}