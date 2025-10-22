import React from 'react';

const Sustainability = () => {
  const stats = [
    { icon: '🔄', value: '5,200+', label: 'Items Given Second Life' },
    { icon: '🌱', value: '8.5 Tons', label: 'Waste Diverted from Landfills' },
    { icon: '🤝', value: '350+', label: 'Small Creators Supported' }
  ];

  return (
    <section id="sustainability" className="py-16 bg-secondspin-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Sustainability Impact</h2>
          <p className="mt-4 text-lg text-green-100 max-w-3xl mx-auto">
            Together, we're making a difference by reducing waste and promoting circular economy practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-secondspin-green-700 rounded-xl p-6">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              <p className="text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondspin-green-700 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-green-100 mb-6">
                By choosing SecondSpin, you're not just buying or selling items - you're contributing to a more sustainable future. Every trade reduces the demand for new production and keeps usable items in circulation.
              </p>
              <div className="flex space-x-4">
                <button className="bg-secondspin-amber-400 hover:bg-secondspin-amber-500 text-green-900 font-bold py-3 px-6 rounded-lg transition duration-300">
                  Become a Member
                </button>
                <button className="bg-transparent hover:bg-secondspin-green-800 text-white border border-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-secondspin-green-800 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">Sustainability Pledge</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondspin-amber-400 mr-2">✓</span>
                    <span>We offset carbon emissions from shipping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondspin-amber-400 mr-2">✓</span>
                    <span>5% of our profits fund environmental NGOs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondspin-amber-400 mr-2">✓</span>
                    <span>We promote packaging-free shipping options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondspin-amber-400 mr-2">✓</span>
                    <span>All partners adhere to our sustainability guidelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;