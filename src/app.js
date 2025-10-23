import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import Sustainability from './components/sustainability';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 smooth-scroll">
      <Header />
      <Hero />
      <Features />
      <Sustainability />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondspin-amber-400 to-secondspin-amber-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join the Sustainable Revolution?</h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Sign up today and get 100 bonus points to start your sustainable shopping journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-secondspin-green-700 hover:bg-secondspin-green-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Create Your Account
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg border border-gray-300 transition duration-300">
              Browse Listings
            </button>
          </div>
          <p className="mt-4 text-gray-700 text-sm">No credit card required • Free to join • List your first item today</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;