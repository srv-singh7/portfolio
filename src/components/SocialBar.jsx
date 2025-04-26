import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { FaWhatsapp } from 'react-icons/fa';

export const SocialBar = () => {
    const gmailComposeUrl = [
        "https://mail.google.com/mail/?view=cm",
        "fs=1",
        "to=souravsingh9472@gmail.com",
        "su=" + encodeURIComponent("Inquiry about Portfolio"),
        "body=" + encodeURIComponent("Hello Sourav,\n\nI have a question regarding your portfolio.\n\nRegards,\n[Your Name]")
      ].join("&");
  return (
    <div className="fixed top-1/4 right-2 z-50 flex flex-col gap-4 p-2 pr-6 sm:top-1/4 sm:right-2 top-auto bottom-2 right-2">
      <a href="https://www.linkedin.com/in/sourav-kumar-singh-561104214/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition">
        <FaLinkedin size={30} />
      </a>
      <a
        href={gmailComposeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        {/* If you have a custom SVG, place it here; otherwise use a react-icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30"
          height="30"
          fill="none"
          className="transition hover:scale-110"
        >
          <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
          <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
          <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
          <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
          <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
        </svg>
      </a>
      <a 
        href="https://wa.me/+918920229784?text=Hello%20there%20I%20need%20help!" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-green-500 hover:scale-110 transition"
      >
        <FaWhatsapp size={24} />
      </a>
      <a href="https://github.com/srv-singh7" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:scale-110 transition">
        <FaGithub size={30} />
      </a>
      <a href="https://leetcode.com/u/srv_singh7/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:scale-110 transition">
        <SiLeetcode size={30} />
      </a>
      <a href="https://www.codechef.com/users/souravsingh947" target="_blank" rel="noopener noreferrer" className="text-brown-500 hover:scale-110 transition">
        <SiCodechef size={30} />
      </a>
      <a href="https://codeforces.com/profile/srv_singh7" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-6 h-6">
            <rect x="5" y="20" width="10" height="30" fill="#FFD700" />
            <rect x="25" y="10" width="10" height="40" fill="#1E90FF" />
            <rect x="45" y="25" width="10" height="25" fill="#DC143C" />
        </svg>
      </a>
      <a href="https://www.geeksforgeeks.org/user/souravsic7di/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition">
        <SiGeeksforgeeks size={30} />
      </a>
      
    </div>
  );
};
