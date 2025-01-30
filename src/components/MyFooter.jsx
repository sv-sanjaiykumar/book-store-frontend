import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Brand Center</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-white font-semibold mb-3">HELP CENTER</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Discord Server</a></li>
              <li><a href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Licensing</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-white font-semibold mb-3">DOWNLOAD</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">iOS</a></li>
              <li><a href="#" className="hover:text-white">Android</a></li>
              <li><a href="#" className="hover:text-white">Windows</a></li>
              <li><a href="#" className="hover:text-white">MacOS</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Socials */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <a href="https://flowbite.com" target="_blank" className="text-gray-500 text-sm hover:text-white">
            © 2025 BookStore™
          </a>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
