// import React from 'react';
// export function Projects() {
//   const projects = [{
//     title: 'EV Charging System',
//     image: '1.png',
//     date: 'Feb 2025 - Ongoing',
//     description: 'Developing a smart EV charging system under the Sri Lankan brand "ChargerOne" using ESP32, supporting AC/DC and CAN-based fast charging. Integrated with a mobile app for station locating, session control, and e-wallet payments.',
//     technologies: 'Flutter, BLoC State Management, REST APIs, Firebase, AWS(E2C), ESP-IDF, Payment Gateways, Android Studio, Codemagic(CI/CD), GIT, Android APIs',
//     type: 'freelance',
//     version: 'v1 Finalized'
//   }, {
//     title: 'Smart Baby Cradle',
//     date: 'June 2024 - Feb 2025',
//     description: 'A Raspberry Pi-powered smart cradle system that enhances baby care through AI and IoT technologies. It features cry detection, an AI powered voice assistant, and real-time monitoring of temperature and humidity. The system can be fully controlled via a mobile app, allowing parents to monitor and comfort their baby remotely, offering both convenience and peace of mind.',
//     technologies: 'Flutter, Firebase Authentication, Firestore Database, Raspberry Pi, TensorFlow, Audio Processing'
//   }, {
//     title: 'Tomato Picking Robot',
//     date: 'May 2025 - Ongoing',
//     description: 'Developing an intelligent tomato-picking robot using a YOLO-based model for ripeness detection and stereo vision for 3D positioning. A robotic arm with inverse kinematics ensures precise, damage-free picking.',
//     technologies: 'OpenCV, Pytorch, Yolov8, CUDA, Anaconda, Raspberry Pi',
//     type: 'freelance'
//   }, {
//     title: 'AM Audio Circuit',
//     date: 'Feb 2025 - March 2025',
//     description: "Designed and built a multi-stage audio output system on a custom PCB using BJTs and passive components. Implemented a 1 kHz high-pass filter, high-gain common-emitter amplifier (>50×), and 15 kHz low-pass filter for clear audio output. Utilized ESP32's DAC and ADC for test signal generation.",
//     technologies: 'KiCAD, Signal Generators, Oscilloscope, Arduino',
//     type: 'freelance'
//   }, {
//     title: 'Fast Line Follow Robot',
//     date: 'April 2024 - Aug 2024',
//     description: 'We developed a fast line-following robot using a custom IR sensor array and ESP32-C3 Mini, built on a custom-designed PCB for optimized performance and compact design.',
//     technologies: 'ESP-IDF, KiCAD, IR Sensors, I2C, Arduino, MUX'
//   }, {
//     title: 'Battle Robot',
//     date: 'Nov 2023 - Feb 2023',
//     description: 'We developed a robust battle robot with a strong, durable build, using Arduino Nano for RC control.',
//     technologies: 'RC, Motor Controlling'
//   }, {
//     title: 'Smart Device for Blind People (Idea Proposal)',
//     date: 'Sep 2024',
//     description: 'Proposed a smart wearable for the visually impaired powered by Rockchip 3588, featuring real-time image and speech processing, LiDAR-based obstacle detection, dual HD cameras, GPT-4 voice assistant, and guardian alert connectivity for safe and independent navigation.'
//   }, {
//     title: 'STM Based Joystick',
//     date: 'Jan 2024 - March 2024',
//     description: 'Designed and developed a wireless joystick controller using the STM32 Blue Pill with two analog joystick modules and an OLED display. Utilized the NRF24L01 module for wireless communication and designed a modern enclosure for the system.',
//     technologies: 'STMCube-IDE, STLink, I2C, SPI, KiCad, Fusion360'
//   }, {
//     title: 'Library Management System',
//     date: 'Dec 2022 - Feb 2023',
//     description: 'Created a Windows Forms app to manage library tasks such as adding students, issuing/returning books, and maintaining book records using SQL as the backend.',
//     technologies: 'WPF, Windows Forms App, VS, C#, .NET, SQL'
//   }];
//   return <section id="projects" className="py-20 bg-gray-900 bg-opacity-80 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-white">
//           Projects
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => <div key={index} className="bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden shadow-md border border-gray-700 transition-transform hover:-translate-y-1 hover:shadow-lg">
//               <img
//               src={project.image}
//               alt={project.title}
//               className = "object-cover w-full h-full"
//               />
//               <div className="bg-gray-700 h-48 flex items-center justify-center">
//                 <p className="text-gray-400">Project Image</p>
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-white">
//                     {project.title}
//                   </h3>
//                   {project.type && <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">
//                       {project.type}
//                     </span>}
//                 </div>
//                 <p className="text-sm text-gray-300 mb-3">{project.date}</p>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 {project.technologies && <div>
//                     <h4 className="font-semibold text-white mb-1">
//                       Technologies:
//                     </h4>
//                     <p className="text-sm text-gray-300">
//                       {project.technologies}
//                     </p>
//                   </div>}
//                 {project.version && <div className="mt-3">
//                     <span className="bg-green-900 text-green-200 text-xs px-2 py-1 rounded">
//                       {project.version}
//                     </span>
//                   </div>}
//               </div>
//             </div>)}
//         </div>
//       </div>
//     </section>;
// }



import React from 'react';

export function Projects() {
  const projects = [
    {
      title: 'EV Charging System',
      date: 'Feb 2025 - Ongoing',
      description: 'Developing a smart EV charging system under the Sri Lankan brand "ChargerOne" using ESP32, supporting AC/DC and CAN-based fast charging. Integrated with a mobile app for station locating, session control, and e-wallet payments.',
      technologies: 'Flutter, BLoC State Management, REST APIs, Firebase, AWS(E2C), ESP-IDF, Payment Gateways, Android Studio, Codemagic(CI/CD), GIT, Android APIs',
      type: 'freelance',
      version: 'v1 Finalized',
      image: '1.png',
    },
    {
      title: 'Smart Baby Cradle',
      date: 'June 2024 - Feb 2025',
      description: 'A Raspberry Pi-powered smart cradle system that enhances baby care through AI and IoT technologies. It features cry detection, an AI powered voice assistant, and real-time monitoring of temperature and humidity.',
      technologies: 'Flutter, Firebase Authentication, Firestore Database, Raspberry Pi, TensorFlow, Audio Processing',
      image: '2.jpg',
    },
    {
      title: 'Tomato Picking Robot',
      date: 'May 2025 - Ongoing',
      description: 'Developing an intelligent tomato-picking robot using a YOLO-based model for ripeness detection and stereo vision for 3D positioning. A robotic arm with inverse kinematics ensures precise, damage-free picking.',
      technologies: 'OpenCV, Pytorch, Yolov8, CUDA, Anaconda, Raspberry Pi',
      type: 'freelance',
      image: '3.jpeg',
    },
    {
      title: 'AM Audio Circuit',
      date: 'Feb 2025 - March 2025',
      description: "Designed and built a multi-stage audio output system on a custom PCB using BJTs and passive components. Implemented a 1 kHz high-pass filter, high-gain common-emitter amplifier (>50×), and 15 kHz low-pass filter for clear audio output.",
      technologies: 'KiCAD, Signal Generators, Oscilloscope, Arduino',
      type: 'freelance',
      image: '4.jpg',
    },
    {
      title: 'Fast Line Follow Robot',
      date: 'April 2024 - Aug 2024',
      description: 'We developed a fast line-following robot using a custom IR sensor array and ESP32-C3 Mini, built on a custom-designed PCB for optimized performance and compact design.',
      technologies: 'ESP-IDF, KiCAD, IR Sensors, I2C, Arduino, MUX',
      image: '5.jpg',
    },
    {
      title: 'Battle Robot',
      date: 'Nov 2023 - Feb 2023',
      description: 'We developed a robust battle robot with a strong, durable build, using Arduino Nano for RC control.',
      technologies: 'RC, Motor Controlling',
      image: '6.jpg',
    },
    {
      title: 'Smart Device for Blind People (Idea Proposal)',
      date: 'Sep 2024',
      description: 'Proposed a smart wearable for the visually impaired powered by Rockchip 3588, featuring real-time image and speech processing, LiDAR-based obstacle detection, dual HD cameras, GPT-4 voice assistant, and guardian alert connectivity.',
      image: '7.jpeg',
    },
    {
      title: 'STM Based Joystick',
      date: 'Jan 2024 - March 2024',
      description: 'Designed and developed a wireless joystick controller using the STM32 Blue Pill with two analog joystick modules and an OLED display.',
      technologies: 'STMCube-IDE, STLink, I2C, SPI, KiCad, Fusion360',
      image: '8.png',
    },
    {
      title: 'Library Management System',
      date: 'Dec 2022 - Feb 2023',
      description: 'Created a Windows Forms app to manage library tasks such as adding students, issuing/returning books, and maintaining book records using SQL as the backend.',
      technologies: 'WPF, Windows Forms App, VS, C#, .NET, SQL',
      image: '9.jpeg',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 bg-opacity-80 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden shadow-md border border-gray-700 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.type && (
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">
                      {project.type}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-300 mb-3">{project.date}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.technologies && (
                  <div>
                    <h4 className="font-semibold text-white mb-1">Technologies:</h4>
                    <p className="text-sm text-gray-300">{project.technologies}</p>
                  </div>
                )}
                {project.version && (
                  <div className="mt-3">
                    <span className="bg-green-900 text-green-200 text-xs px-2 py-1 rounded">
                      {project.version}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
