import React, { useState, useEffect } from 'react';

const SectantPin = () => {
  const [activeTab, setActiveTab] = useState('trade');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Mock auction end time (24 hours from now)
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
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      id: 'trade',
      title: 'Trade & Barter',
      description: 'Exchange items directly with others in our barter system',
      icon: '🔄'
    },
    {
      id: 'auction',
      title: 'Auction',
      description: 'Bid on rare collectibles and vintage items in real-time',
      icon: '🔨'
    },
    {
      id: 'shop',
      title: 'Shop',
      description: 'Purchase unique items from small creators and artisans',
      icon: '🛍️'
    },
    {
      id: 'points',
      title: 'Earn Points',
      description: 'Get rewarded for sustainable shopping and trading',
      icon: '⭐'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Eco-conscious Shopper',
      text: 'SectantPin helped me declutter responsibly while finding unique pieces for my home.',
      avatar: '👩'
    },
    {
      name: 'Carlos R.',
      role: 'Independent Artisan',
      text: 'As a small creator, this platform gave me the visibility I needed to grow my business.',
      avatar: '👨'
    },
    {
      name: 'Priya K.',
      role: 'Vintage Collector',
      text: 'The auction feature is fantastic for finding rare collectibles with authentication.',
      avatar: '👩'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-green-700">SectantPin</span>
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Beta</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#features" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-green-500 text-sm font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  How It Works
                </a>
                <a href="#testimonials" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Testimonials
                </a>
                <a href="#sustainability" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Sustainability
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="bg-white text-green-700 hover:bg-green-50 border border-green-700 px-4 py-2 rounded-md text-sm font-medium mr-4">
                Sign In
              </button>
              <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
                Join Now
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium border-l-4 border-green-500 bg-green-50">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Testimonials
              </a>
              <a href="#sustainability" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Sustainability
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="w-full bg-white text-green-700 hover:bg-green-50 border border-green-700 px-4 py-2 rounded-md text-base font-medium mb-2">
                  Sign In
                </button>
                <button className="w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-base font-medium">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Give Your Belongings a <span className="text-amber-300">Second Life</span>
              </h1>
              <p className="mt-4 text-xl text-green-100 max-w-2xl">
                Join our sustainable marketplace to trade, sell, or buy pre-loved items. Reduce waste while discovering unique treasures.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-amber-400 hover:bg-amber-500 text-green-900 font-bold py-3 px-6 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                  Start Trading Now
                </button>
                <button className="bg-transparent hover:bg-green-700 text-white border border-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center text-green-100">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-xs font-bold">A</div>
                  <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-xs font-bold">B</div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs font-bold">C</div>
                  <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-xs font-bold">D</div>
                </div>
                <p className="ml-3">Join <span className="font-bold">5,000+</span> sustainable shoppers</p>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-full h-full bg-amber-300 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-6 text-gray-800">
                  <h3 className="text-xl font-bold mb-4">Featured Auction</h3>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Vintage Camera</span>
                      <span className="text-sm font-bold text-green-600">$120</span>
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
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition duration-300">
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How SectantPin Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform makes sustainable shopping and trading simple and rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`bg-white rounded-xl shadow-md p-6 border-2 transition-all duration-300 cursor-pointer ${
                  activeTab === feature.id 
                    ? 'border-green-500 transform -translate-y-2 shadow-lg' 
                    : 'border-transparent hover:border-green-300'
                }`}
                onClick={() => setActiveTab(feature.id)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="mt-12 bg-green-50 rounded-2xl p-8">
            {activeTab === 'trade' && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Trade & Barter System</h3>
                  <p className="text-gray-700 mb-4">
                    Exchange items directly with other community members without using money. Our smart matching algorithm helps you find perfect trade partners.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>No cash needed for exchanges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Smart matching based on item value and interests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Secure trade confirmation system</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md max-w-xs">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-2">👕</div>
                        <span className="font-medium">Vintage T-Shirt</span>
                      </div>
                      <div className="text-green-600 font-bold">↔</div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2">📚</div>
                        <span className="font-medium">Book Set</span>
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium">
                      Propose Trade
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'auction' && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Auction Platform</h3>
                  <p className="text-gray-700 mb-4">
                    Bid on rare collectibles, vintage items, and unique creations in real-time auctions. Our verification system ensures authenticity.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Real-time bidding with instant notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Item authentication and verification badges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Secure payment and shipping coordination</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md max-w-xs w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Current Bid</span>
                      <span className="font-bold text-green-600">$85</span>
                    </div>
                    <div className="h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded flex items-center justify-center mb-4">
                      <span className="text-5xl">🎨</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Time Left:</span>
                        <span className="font-bold">12:45:32</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <input 
                        type="number" 
                        placeholder="Your bid" 
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                      />
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                        Bid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shop' && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Shopping</h3>
                  <p className="text-gray-700 mb-4">
                    Discover unique items from small creators and artisans who prioritize sustainability and ethical production.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Direct support for independent creators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Eco-friendly and upcycled products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Transparent sourcing and production methods</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      <div className="h-20 bg-amber-50 rounded flex items-center justify-center mb-2">
                        <span className="text-3xl">🧵</span>
                      </div>
                      <p className="text-sm font-medium">Handmade Bag</p>
                      <p className="text-green-600 font-bold">$24</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      <div className="h-20 bg-blue-50 rounded flex items-center justify-center mb-2">
                        <span className="text-3xl">💎</span>
                      </div>
                      <p className="text-sm font-medium">Artisan Jewelry</p>
                      <p className="text-green-600 font-bold">$18</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      <div className="h-20 bg-green-50 rounded flex items-center justify-center mb-2">
                        <span className="text-3xl">👗</span>
                      </div>
                      <p className="text-sm font-medium">Upcycled Dress</p>
                      <p className="text-green-600 font-bold">$32</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      <div className="h-20 bg-purple-50 rounded flex items-center justify-center mb-2">
                        <span className="text-3xl">🏺</span>
                      </div>
                      <p className="text-sm font-medium">Ceramic Pot</p>
                      <p className="text-green-600 font-bold">$28</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'points' && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn Rewards & Points</h3>
                  <p className="text-gray-700 mb-4">
                    Get rewarded for making sustainable choices. Earn points for every trade, purchase, or successful sale on our platform.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Redeem points for discounts and merchandise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Donate points to sustainability initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Special badges for eco-friendly achievements</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">⭐</span>
                      </div>
                      <h4 className="font-bold text-lg">Your Points</h4>
                      <p className="text-3xl font-bold text-green-600">1,250</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Available to redeem:</span>
                        <span className="font-bold">1,000 pts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-bold text-green-600">Eco Warrior</span>
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium mt-2">
                        Redeem Points
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section id="sustainability" className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Sustainability Impact</h2>
            <p className="mt-4 text-lg text-green-100 max-w-3xl mx-auto">
              Together, we're making a difference by reducing waste and promoting circular economy practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-green-700 rounded-xl p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-2">5,200+</h3>
              <p className="text-green-100">Items Given Second Life</p>
            </div>
            <div className="bg-green-700 rounded-xl p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-2">8.5 Tons</h3>
              <p className="text-green-100">Waste Diverted from Landfills</p>
            </div>
            <div className="bg-green-700 rounded-xl p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-2">350+</h3>
              <p className="text-green-100">Small Creators Supported</p>
            </div>
          </div>

          <div className="mt-12 bg-green-700 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                <p className="text-green-100 mb-6">
                  By choosing SectantPin, you're not just buying or selling items - you're contributing to a more sustainable future. Every trade reduces the demand for new production and keeps usable items in circulation.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-amber-400 hover:bg-amber-500 text-green-900 font-bold py-3 px-6 rounded-lg transition duration-300">
                    Become a Member
                  </button>
                  <button className="bg-transparent hover:bg-green-800 text-white border border-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-green-800 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-4">Sustainability Pledge</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <span>We offset carbon emissions from shipping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <span>5% of our profits fund environmental NGOs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <span>We promote packaging-free shipping options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">✓</span>
                      <span>All partners adhere to our sustainability guidelines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Community Says</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from members who have transformed their shopping habits and discovered the joy of sustainable consumption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="mt-4 flex text-amber-400">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join the Sustainable Revolution?</h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Sign up today and get 100 bonus points to start your sustainable shopping journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Create Your Account
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg border border-gray-300 transition duration-300">
              Browse Listings
            </button>
          </div>
          <p className="mt-4 text-gray-700 text-sm">No credit card required • Free to join • List your first item today</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SectantPin</h3>
              <p className="text-gray-400">
                Building a sustainable future through conscious consumption and community trading.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">All Listings</a></li>
                <li><a href="#" className="hover:text-white">Clothing</a></li>
                <li><a href="#" className="hover:text-white">Crafts</a></li>
                <li><a href="#" className="hover:text-white">Collectibles</a></li>
                <li><a href="#" className="hover:text-white">Auctions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stay Connected</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 SectantPin. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SectantPin;