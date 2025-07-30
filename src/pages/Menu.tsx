import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  const categories = [
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'salads', name: 'Salads' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const menuItems = {
    pizzas: [
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
        description: "Artichokes, mushrooms, ham, olives, mozzarella, tomato sauce",
        price: "$26.99",
        image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
      },
      {
        name: "Prosciutto e Rucola",
        description: "Prosciutto, arugula, parmesan, mozzarella, cherry tomatoes",
        price: "$28.99",
        image: "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg"
      },
      {
        name: "Vegetarian Delight",
        description: "Bell peppers, mushrooms, onions, olives, tomatoes, mozzarella",
        price: "$24.99",
        image: "https://images.pexels.com/photos/7625047/pexels-photo-7625047.jpeg"
      },
      {
        name: "Meat Lovers",
        description: "Pepperoni, sausage, ham, bacon, mozzarella, tomato sauce",
        price: "$29.99",
        image: "https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg"
      }
    ],
    appetizers: [
      {
        name: "Garlic Bread",
        description: "Fresh baked bread with garlic butter and herbs",
        price: "$8.99",
        image: "https://images.pexels.com/photos/4676556/pexels-photo-4676556.jpeg"
      },
      {
        name: "Bruschetta",
        description: "Toasted bread with tomatoes, basil, and mozzarella",
        price: "$12.99",
        image: "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg"
      },
      {
        name: "Antipasto Platter",
        description: "Selection of cured meats, cheeses, and olives",
        price: "$18.99",
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
      }
    ],
    salads: [
      {
        name: "Caesar Salad",
        description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
        price: "$14.99",
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg"
      },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, basil, balsamic glaze",
        price: "$16.99",
        image: "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg"
      },
      {
        name: "Mediterranean Salad",
        description: "Mixed greens, olives, feta, tomatoes, cucumber, olive oil",
        price: "$15.99",
        image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg"
      }
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee and mascarpone",
        price: "$8.99",
        image: "https://images.pexels.com/photos/6957238/pexels-photo-6957238.jpeg"
      },
      {
        name: "Cannoli",
        description: "Sicilian pastry filled with sweet ricotta cream",
        price: "$6.99",
        image: "https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg"
      },
      {
        name: "Gelato",
        description: "Homemade Italian ice cream (Vanilla, Chocolate, Strawberry)",
        price: "$5.99",
        image: "https://images.pexels.com/photos/1752/italian-ice-cream-gelato-colors.jpg"
      }
    ],
    drinks: [
      {
        name: "Italian Soda",
        description: "Sparkling water with Italian syrup flavors",
        price: "$3.99",
        image: "https://images.pexels.com/photos/1528969/pexels-photo-1528969.jpeg"
      },
      {
        name: "Espresso",
        description: "Traditional Italian espresso",
        price: "$2.99",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
      },
      {
        name: "Wine Selection",
        description: "Curated selection of Italian wines",
        price: "$7.99+",
        image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our authentic Italian dishes made with the finest ingredients and traditional recipes
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">
                      {item.price}
                    </span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Special Offers
            </h2>
            <p className="text-xl">
              Don't miss out on these limited-time deals!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Family Combo</h3>
              <p className="text-lg mb-4">2 Large Pizzas + Garlic Bread + 2L Soda</p>
              <div className="text-3xl font-bold mb-4">
                <span className="line-through text-gray-300">$65.99</span>
                <span className="ml-2">$49.99</span>
              </div>
              <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Lunch Special</h3>
              <p className="text-lg mb-4">Personal Pizza + Salad + Drink</p>
              <div className="text-3xl font-bold mb-4">$15.99</div>
              <p className="text-sm mb-4">Available Mon-Fri, 11am-3pm</p>
              <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;