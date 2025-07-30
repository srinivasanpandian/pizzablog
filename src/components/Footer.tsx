import React from 'react';
import { Pizza, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Pizza size={28} className="text-red-500" />
              <span className="text-xl font-bold">Bella Pizza</span>
            </div>
            <p className="text-gray-300">
              Authentic Italian pizza made with the finest ingredients and traditional recipes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-red-500" />
                <span className="text-sm text-gray-300">123 Pizza Street, Food City, FC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-red-500" />
                <span className="text-sm text-gray-300">(555) 123-PIZZA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-red-500" />
                <span className="text-sm text-gray-300">info@bellapizza.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-red-500" />
                <div className="text-sm text-gray-300">
                  <div>Mon - Thu: 11am - 10pm</div>
                  <div>Fri - Sat: 11am - 11pm</div>
                  <div>Sunday: 12pm - 9pm</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/menu" className="text-gray-300 hover:text-red-500 transition-colors block">Menu</a>
              <a href="/about" className="text-gray-300 hover:text-red-500 transition-colors block">About Us</a>
              <a href="/contact" className="text-gray-300 hover:text-red-500 transition-colors block">Contact</a>
              <a href="/blog" className="text-gray-300 hover:text-red-500 transition-colors block">Blog</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Bella Pizza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;