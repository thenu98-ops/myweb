// import React from 'react';
// import { LinkedinIcon, GithubIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
// export function Hero() {
//   return <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/4 flex justify-center mb-10 md:mb-0">
//             <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
//               {/* Replace the URL with your actual photo URL */}
//               <img src="images\my.png" alt="Thenura Karunarathna" className="w-full h-full object-cover" />
//             </div>
//           </div>
//           <div className="md:w-2/5 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Thenura Karunarathna
//             </h1>
//             <h2 className="text-xl md:text-2xl mb-6">
//               Electronics and Telecommunication Engineer
//             </h2>
//             <p className="text-lg mb-8 max-w-2xl">
//               Dedicated and results-driven engineer with a strong background in
//               embedded systems, IoT, AI, and mobile application development.
//               Skilled in both hardware and software integration, with a passion
//               for learning and adapting to new technologies.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition">
//                 Contact Me
//               </a>
//               <a href="#projects" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition">
//                 View Projects
//               </a>
//             </div>
//           </div>
//           <div className="md:w-1/4 flex justify-center">
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
//               <div className="flex flex-col space-y-4">
//                 <a href="https://www.linkedin.com/in/thenura-ops/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-200 transition">
//                   <LinkedinIcon size={20} />
//                   <span>linkedin.com/in/thenura-ops</span>
//                 </a>
//                 <a href="https://github.com/thenu98-ops" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-200 transition">
//                   <GithubIcon size={20} />
//                   <span>github.com/thenu98-ops</span>
//                 </a>
//                 <div className="flex items-center space-x-3">
//                   <PhoneIcon size={20} />
//                   <span>+94 714350509</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MailIcon size={20} />
//                   <span>thenura125@gmail.com</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MapPinIcon size={20} />
//                   <span>Wadduwa, Sri Lanka</span>
//                 </div>
//                 <a href="http://www.thenura.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-200 transition">
//                   <span>www.thenura.xyz</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>;
// }



import React from 'react';
import { LinkedinIcon, GithubIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative text-white py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,50,0.6), rgba(0,0,80,0.6)), url('/images/banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Profile Photo */}
          <div className="md:w-1/4 flex justify-center mb-10 md:mb-0">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="images/my.png" alt="Thenura Karunarathna" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Intro Text */}
          <div className="md:w-2/5 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Thenura Karunarathna
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              Electronics and Telecommunication Engineer
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Dedicated and results-driven engineer with a strong background in
              embedded systems, IoT, AI, and mobile application development.
              Skilled in both hardware and software integration, with a passion
              for learning and adapting to new technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition">
                Contact Me
              </a>
              <a href="#projects" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition">
                View Projects
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4 flex justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex flex-col space-y-4">
                <a href="https://www.linkedin.com/in/thenura-ops/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-200 transition">
                  <LinkedinIcon size={20} />
                  <span>linkedin.com/in/thenura-ops</span>
                </a>
                <a href="https://github.com/thenu98-ops" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-200 transition">
                  <GithubIcon size={20} />
                  <span>github.com/thenu98-ops</span>
                </a>
                <div className="flex items-center space-x-3">
                  <PhoneIcon size={20} />
                  <span>+94 714350509</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MailIcon size={20} />
                  <span>thenura125@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon size={20} />
                  <span>Wadduwa, Sri Lanka</span>
                </div>
                <a href="http://www.thenura.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-200 transition">
                  <span>www.thenura.xyz</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
