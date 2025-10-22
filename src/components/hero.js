import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const auctionEndTime = new Date();
    auctionEndTime.setHours(auctionEndTime.getHours() + 24);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = auctionEndTime - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeRemaining({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Give Your Belongings a <span className="text-secondspin-amber-400">Second Spin</span>
            </h1>
            <p className="mt-4 text-xl text-green-100 max-w-2xl">
              Join our sustainable marketplace to trade, sell, or buy pre-loved items. Reduce waste while discovering unique treasures.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-secondspin-amber-400 hover:bg-secondspin-amber-500 text-green-900 font-bold py-3 px-6 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                Start Trading Now
              </button>
              <button className="bg-transparent hover:bg-secondspin-green-700 text-white border border-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center text-green-100">
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D'].map((letter, index) => (
                  <div key={index} className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-xs font-bold">
                    {letter}
                  </div>
                ))}
              </div>
              <p className="ml-3">Join <span className="font-bold">5,000+</span> sustainable shoppers</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-secondspin-amber-400 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 text-gray-800">
                <h3 className="text-xl font-bold mb-4">Featured Auction</h3>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Vintage Camera</span>
                    <span className="text-sm font-bold text-secondspin-green-600">$120</span>
                  </div>
                  <div className="h-40 bg-gradient-to-r from-amber-100 to-amber-200 rounded flex items-center justify-center">
                    <span className="text-5xl">📷</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Time Remaining:</span>
                    <span className="font-bold">{timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondspin-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <button className="w-full bg-secondspin-green-600 hover:bg-secondspin-green-700 text-white py-2 rounded-lg font-medium transition duration-300">
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;