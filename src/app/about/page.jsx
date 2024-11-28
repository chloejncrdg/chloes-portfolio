import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf4e2] px-6">
      {/* Main Content */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#fefcf7] shadow-lg rounded-lg p-8">
        {/* Biography Section */}
        <div>
          <h1 className="text-5xl font-be-regular mb-8 text-[#393400]">Meet Chloe</h1>
          <p className="text-[#393400] leading-relaxed">
            Chloe Carandang is an aspiring product designer with a background in visual arts and web development. Currently a 4th-year student at National University-Manila, she&apos;s pursuing a Bachelor of Science in Information Technology with a focus on Multimedia Arts and Animation. Chloe’s goal is to design and develop products that would help people feel seen and heard.
          </p>
          <p className="text-[#393400] leading-relaxed mt-4">
            When she&apos;s not immersed in academics, she&apos;s probably drawing fishes or trying new pastry recipes to share with friends and family.
          </p>
          <p className="text-[#393400] leading-relaxed mt-4">
            Feel free to email her for her CV.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/assets/about/me.png" // Replace this with the path to your image
            alt="Name"
            className="w-64 h-64 object-cover rounded-full shadow-md"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 flex items-center space-x-6">
        <a
          href="https://www.linkedin.com/in/chloe-jadyn-carandang-5040a8216/" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#393400] hover:text-[#201f14] text-2xl"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="mailto:carandangcn@students.national-u.edu.ph" // Replace with your email
          className="text-[#393400] hover:text-[#201f14] text-2xl"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default About;
