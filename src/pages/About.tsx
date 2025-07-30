import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Three generations of passion, tradition, and the finest Italian cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Italy to Your Table
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bella Pizza began in 1952 when our founder, Giuseppe Rossini, brought his family's centuries-old pizza recipes from Naples to America. With nothing but a dream and a passion for authentic Italian cuisine, he opened the first Bella Pizza in a small storefront.
                </p>
                <p>
                  Giuseppe's son, Marco, learned the craft at his father's side, perfecting the art of hand-tossed dough and wood-fired cooking. Today, Marco's daughter Sofia continues the family tradition, ensuring every pizza maintains the authentic taste that has made Bella Pizza a beloved local institution.
                </p>
                <p>
                  We believe that great pizza starts with great ingredients. That's why we import our San Marzano tomatoes directly from Italy, use only the freshest mozzarella di bufala, and grow our own basil in our restaurant garden.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg"
                alt="Traditional pizza making"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by these core principles that have been passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Passion",
                description: "Every pizza is made with love and dedication to our craft"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Family",
                description: "We treat every customer like a member of our extended family"
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-500" />,
                title: "Quality",
                description: "We never compromise on ingredients or preparation methods"
              },
              {
                icon: <Clock className="w-8 h-8 text-green-500" />,
                title: "Tradition",
                description: "Honoring authentic Italian recipes and time-tested techniques"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Family
            </h2>
            <p className="text-lg text-gray-600">
              The passionate people behind every perfect pizza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sofia Rossini",
                role: "Owner & Head Chef",
                description: "Third-generation pizza maker continuing the family legacy",
                image: "https://images.pexels.com/photos/4253311/pexels-photo-4253311.jpeg"
              },
              {
                name: "Marco Rossini",
                role: "Master Pizza Chef",
                description: "40+ years of experience in traditional Italian cooking",
                image: "https://images.pexels.com/photos/4253290/pexels-photo-4253290.jpeg"
              },
              {
                name: "Antonio Moretti",
                role: "Kitchen Manager",
                description: "Trained in Naples, bringing authentic techniques to every dish",
                image: "https://images.pexels.com/photos/4253295/pexels-photo-4253295.jpeg"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-lg text-gray-600">
              Proud to be recognized by our community and industry peers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Best Pizza 2023 - City Food Awards",
              "Family Business of the Year 2022",
              "Excellence in Italian Cuisine 2021",
              "Customer Choice Award 2020"
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;