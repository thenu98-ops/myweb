import React from 'react';
export function Education() {
  return <section id="education" className="py-20 bg-gray-800 bg-opacity-80 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-bold">
                Kotelawala Defense University
              </h3>
              <span className="text-gray-300">2022 - Present</span>
            </div>
            <p className="mb-2">
              Bachelor of Science in Electronics and Telecommunication
              Engineering
            </p>
             <p className="text-gray-400 italic">
              Expected Graduation: Dec 2026
            </p>
          </div>
          <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-bold">
                University of Colombo, School of Computing
              </h3>
              <span className="text-gray-300">2024 - Present</span>
            </div>
            <p className="mb-2">
              Bachelor of Information Technology (external)
            </p>
           
          </div>
          <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-bold">Kalutara Vidyalaya</h3>
              <span className="text-gray-300">Completed</span>
            </div>
            <p>
              Advance Level - Physical Stream (Combined Mathematics, Physics,
              Chemistry)
            </p>
          </div>
          <h3 className="text-2xl font-bold mt-12 mb-6">Additional Courses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 bg-opacity-70 p-5 rounded-lg shadow-md border border-gray-700">
              <h4 className="font-bold">Diploma in ICT</h4>
              <p className="text-gray-300">IMBS Green Campus (2023)</p>
            </div>
            <div className="bg-gray-900 bg-opacity-70 p-5 rounded-lg shadow-md border border-gray-700">
              <h4 className="font-bold">Full Stack Developer</h4>
              <p className="text-gray-300">University of Moratuwa (2022)</p>
            </div>
            <div className="bg-gray-900 bg-opacity-70 p-5 rounded-lg shadow-md border border-gray-700">
              <h4 className="font-bold">Google Data Analysis</h4>
              <p className="text-gray-300">Google (2022)</p>
            </div>
            <div className="bg-gray-900 bg-opacity-70 p-5 rounded-lg shadow-md border border-gray-700">
              <h4 className="font-bold">AI For Everyone</h4>
              <p className="text-gray-300">DeepLearning.AI (2022)</p>
            </div>
            <div className="bg-gray-900 bg-opacity-70 p-5 rounded-lg shadow-md border border-gray-700">
              <h4 className="font-bold">MATLAB Professional</h4>
              <p className="text-gray-300">MATLAB Coding (2023)</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}