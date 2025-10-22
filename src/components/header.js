import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-secondspin-green-700 spin-logo">SecondSpin</span>
              <span className="ml-2 text-xs bg-secondspin-green-100 text-secondspin-green-800 px-2 py-1 rounded-full">Beta</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#features" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-secondspin-green-500 text-sm font-medium">
                Features
              </a>
              <a href="#sustainability" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                Sustainability
              </a>
              <a href="#testimonials" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                Testimonials
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-white text-secondspin-green-700 hover:bg-secondspin-green-50 border border-secondspin-green-700 px-4 py-2 rounded-md text-sm font-medium mr-4">
              Sign In
            </button>
            <button className="bg-secondspin-green-600 text-white hover:bg-secondspin-green-700 px-4 py-2 rounded-md text-sm font-medium">
              Join Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondspin-green-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium border-l-4 border-secondspin-green-500 bg-secondspin-green-50">
                Features
              </a>
              <a href="#sustainability" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Sustainability
              </a>
              <a href="#testimonials" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Testimonials
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="w-full bg-white text-secondspin-green-700 hover:bg-secondspin-green-50 border border-secondspin-green-700 px-4 py-2 rounded-md text-base font-medium mb-2">
                  Sign In
                </button>
                <button className="w-full bg-secondspin-green-600 text-white hover:bg-secondspin-green-700 px-4 py-2 rounded-md text-base font-medium">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;