import React from 'react';
import { ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Premium Quality",
      description: "Only the finest ingredients sourced from trusted suppliers"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Family Owned",
      description: "Three generations of authentic Italian pizza making"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Fast Delivery",
      description: "Hot and fresh pizza delivered in 30 minutes or less"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Award Winning",
      description: "Recognized as the best pizza in the city for 3 years running"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Authentic Italian Pizza
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Made with love, served with passion. Experience the taste of Italy right here in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                View Menu <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bella Pizza?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another pizza place. We're a family dedicated to bringing you the most authentic Italian experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 bg-gray-50"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Pizzas
            </h2>
            <p className="text-lg text-gray-600">
              Handcrafted with traditional techniques and premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Margherita Classic",
                description: "Fresh mozzarella, San Marzano tomatoes, basil, extra virgin olive oil",
                price: "$18.99",
                image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg"
              },
              {
                name: "Pepperoni Supreme",
                description: "Premium pepperoni, mozzarella, oregano, tomato sauce",
                price: "$22.99",
                image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
              },
              {
                name: "Quattro Stagioni",
                description: "Four seasons pizza with artichokes, mushrooms, ham, olives",
                price: "$26.99",
                image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
              }
            ].map((pizza, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pizza.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pizza.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">
                      {pizza.price}
                    </span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Bella Pizza their go-to choice for authentic Italian cuisine.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Order Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;