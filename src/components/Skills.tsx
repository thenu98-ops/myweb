import React from 'react';
export function Skills() {
  const skillCategories = [{
    name: 'Embedded Systems & IoT',
    skills: 'C/C++, Arduino, ESP-IDF, ST-Link STM32 (CubeIDE), Raspberry Pi, I2C, SPI, UART, ADC, DAC, PWM, BLE, WiFi'
  }, {
    name: 'Robotics & Electronics',
    skills: 'KiCAD, EasyEDA, LTspice, Tinkercad, Multimeter, Oscilloscope, Function Generator, Spectrum Analyzer, Power Supplies, Fusion360, Webot'
  }, {
    name: 'Mobile Application Development',
    skills: 'Dart, Flutter, Firebase, Figma, Android Studio, CodeMagic(CI/CD), Payment Gateways, REST APIs'
  }, {
    name: 'AI / ML / Computer Vision',
    skills: 'Python, OpenCV, PyTorch, YOLOv8, TensorFlow, Conda, Collab'
  }, {
    name: 'Tools & Platforms',
    skills: 'Git/GitHub, Linux, Node.js, Postman, PuTTY'
  }, {
    name: 'Soft Skills',
    skills: 'Teamwork & Collaboration, Project Coordinating, Communication Skills, Creativity, Continuous Learning'
  }];
  return <section id="skills" className="py-20 bg-gray-900 bg-opacity-80 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => <div key={index} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                {category.name}
              </h3>
              <p className="text-gray-300">{category.skills}</p>
            </div>)}
        </div>
      </div>
    </section>;
}