import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Eco-conscious Shopper',
      text: 'SecondSpin helped me declutter responsibly while finding unique pieces for my home.',
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
                <div className="w-12 h-12 rounded-full bg-secondspin-green-100 flex items-center justify-center text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <div className="mt-4 flex text-secondspin-amber-400">
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
  );
};

export default Testimonials;