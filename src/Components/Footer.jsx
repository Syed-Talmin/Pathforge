import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
         
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-white text-2xl font-bold">PATHFORGE</h2>
            <p className="mt-2 text-sm">
              Empowering your learning journey with personalized tools and insights.
            </p>
          </div>

        
          <div className="flex flex-col items-center justify-center text-center">
            <Link to='/my-learning' className="text-sm  hover:text-white transition">
              MY LEARNING
            </Link>
            <Link to='/roadmap' className=" hover:text-white transition">
            EXPLORE ROADMAPS
            </Link>
            <Link to='/contact' className=" hover:text-white transition">
              CONTACT
            </Link>
            <Link to='/term' className=" hover:text-white transition">
            PRIVACY POLICY
            </Link>
          </div>
        </div>

        
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} PATHFORGE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
