import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, LinkedinIcon, GithubIcon, GlobeIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 bg-gray-900 bg-opacity-80 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Contact Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="text-blue-400 mr-3" size={20} />
                  <span className="text-gray-300">+94 714350509</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="text-blue-400 mr-3" size={20} />
                  <span className="text-gray-300">thenura125@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="text-blue-400 mr-3" size={20} />
                  <span className="text-gray-300">Wadduwa, Sri Lanka</span>
                </div>
                <div className="flex items-center">
                  <LinkedinIcon className="text-blue-400 mr-3" size={20} />
                  <a href="https://www.linkedin.com/in/thenura-ops/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                    linkedin.com/in/thenura-ops
                  </a>
                </div>
                <div className="flex items-center">
                  <GithubIcon className="text-blue-400 mr-3" size={20} />
                  <a href="https://github.com/thenu98-ops" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                    github.com/thenu98-ops
                  </a>
                </div>
                <div className="flex items-center">
                  <GlobeIcon className="text-blue-400 mr-3" size={20} />
                  <a href="http://www.thenura.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                    www.thenura.xyz
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">References</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white">
                    Eng. (Mrs.) PN Karunanayake
                  </h4>
                  <p className="text-gray-400">Senior Lecturer</p>
                  <div className="mt-2">
                    <p className="text-gray-300">+94 77 333 1189</p>
                    <p className="text-gray-300">karunanayake@kdu.ac.lk</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Mr. SAN Kulasinghe
                  </h4>
                  <p className="text-gray-400">Lecturer</p>
                  <div className="mt-2">
                    <p className="text-gray-300">+94 71 157 4925</p>
                    <p className="text-gray-300">kulasinghesan@kdu.ac.lk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}