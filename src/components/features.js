import React, { useState } from 'react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('trade');

  const features = [
    {
      id: 'trade',
      title: 'Trade & Barter',
      description: 'Exchange items directly with others in our barter system',
      icon: '🔄',
      details: {
        title: 'Trade & Barter System',
        description: 'Exchange items directly with other community members without using money. Our smart matching algorithm helps you find perfect trade partners.',
        points: [
          'No cash needed for exchanges',
          'Smart matching based on item value and interests',
          'Secure trade confirmation system'
        ],
        example: (
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-2">👕</div>
                <span className="font-medium">Vintage T-Shirt</span>
              </div>
              <div className="text-secondspin-green-600 font-bold">↔</div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2">📚</div>
                <span className="font-medium">Book Set</span>
              </div>
            </div>
            <button className="w-full bg-secondspin-green-600 text-white py-2 rounded-lg font-medium">
              Propose Trade
            </button>
          </div>
        )
      }
    },
    {
      id: 'auction',
      title: 'Auction',
      description: 'Bid on rare collectibles and vintage items in real-time',
      icon: '🔨',
      details: {
        title: 'Live Auction Platform',
        description: 'Bid on rare collectibles, vintage items, and unique creations in real-time auctions. Our verification system ensures authenticity.',
        points: [
          'Real-time bidding with instant notifications',
          'Item authentication and verification badges',
          'Secure payment and shipping coordination'
        ],
        example: (
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Current Bid</span>
              <span className="font-bold text-secondspin-green-600">$85</span>
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
                <div className="bg-secondspin-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="flex space-x-2">
              <input 
                type="number" 
                placeholder="Your bid" 
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
              />
              <button className="bg-secondspin-green-600 hover:bg-secondspin-green-700 text-white px-4 py-2 rounded-lg font-medium">
                Bid
              </button>
            </div>
          </div>
        )
      }
    },
    {
      id: 'shop',
      title: 'Shop',
      description: 'Purchase unique items from small creators and artisans',
      icon: '🛍️',
      details: {
        title: 'Sustainable Shopping',
        description: 'Discover unique items from small creators and artisans who prioritize sustainability and ethical production.',
        points: [
          'Direct support for independent creators',
          'Eco-friendly and upcycled products',
          'Transparent sourcing and production methods'
        ],
        example: (
          <div className="grid grid-cols-2 gap-4 max-w-xs">
            {[
              { icon: '🧵', name: 'Handmade Bag', price: '$24' },
              { icon: '💎', name: 'Artisan Jewelry', price: '$18' },
              { icon: '👗', name: 'Upcycled Dress', price: '$32' },
              { icon: '🏺', name: 'Ceramic Pot', price: '$28' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border">
                <div className="h-20 bg-amber-50 rounded flex items-center justify-center mb-2">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-secondspin-green-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        )
      }
    },
    {
      id: 'points',
      title: 'Earn Points',
      description: 'Get rewarded for sustainable shopping and trading',
      icon: '⭐',
      details: {
        title: 'Earn Rewards & Points',
        description: 'Get rewarded for making sustainable choices. Earn points for every trade, purchase, or successful sale on our platform.',
        points: [
          'Redeem points for discounts and merchandise',
          'Donate points to sustainability initiatives',
          'Special badges for eco-friendly achievements'
        ],
        example: (
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-bold text-lg">Your Points</h4>
              <p className="text-3xl font-bold text-secondspin-green-600">1,250</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Available to redeem:</span>
                <span className="font-bold">1,000 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Level:</span>
                <span className="font-bold text-secondspin-green-600">Eco Warrior</span>
              </div>
              <button className="w-full bg-secondspin-green-600 hover:bg-secondspin-green-700 text-white py-2 rounded-lg font-medium mt-2">
                Redeem Points
              </button>
            </div>
          </div>
        )
      }
    }
  ];

  const activeFeature = features.find(feature => feature.id === activeTab);

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How SecondSpin Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform makes sustainable shopping and trading simple and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`bg-white rounded-xl shadow-md p-6 border-2 transition-all duration-300 cursor-pointer feature-card ${
                activeTab === feature.id 
                  ? 'border-secondspin-green-500 transform -translate-y-2 shadow-lg' 
                  : 'border-transparent hover:border-secondspin-green-300'
              }`}
              onClick={() => setActiveTab(feature.id)}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondspin-green-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeFeature.details.title}</h3>
              <p className="text-gray-700 mb-4">
                {activeFeature.details.description}
              </p>
              <ul className="space-y-2">
                {activeFeature.details.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondspin-green-500 mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {activeFeature.details.example}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;