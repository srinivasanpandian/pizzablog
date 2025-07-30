const mongoose = require('mongoose');
const User = require('./models/User');
const BlogPost = require('./models/BlogPost');
require('dotenv').config({ path: './config.env' });

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bella-pizza');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await BlogPost.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@bellapizza.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('Created admin user:', adminUser.username);

    // Create sample blog posts
    const samplePosts = [
      {
        title: 'The Art of Making Perfect Pizza Dough',
        content: 'Making the perfect pizza dough is an art that has been perfected over generations. At Bella Pizza, we follow traditional Neapolitan methods that have been passed down through our family for decades. The secret lies in the perfect balance of flour, water, salt, and yeast, combined with the right kneading technique and proper fermentation time. Our dough is made fresh daily using only the finest Italian "00" flour, which gives it that authentic texture and flavor that our customers love. The fermentation process takes 24-48 hours, allowing the dough to develop complex flavors and the perfect airy structure. We believe that great pizza starts with great dough, and that\'s why we never compromise on quality or tradition.',
        excerpt: 'Discover the secrets behind our authentic Italian pizza dough that creates the perfect base for every pizza.',
        author: 'Sofia Rossini',
        image: 'https://images.pexels.com/photos/4252144/pexels-photo-4252144.jpeg',
        authorId: adminUser._id,
        tags: ['pizza', 'dough', 'traditional', 'neapolitan'],
        status: 'published'
      },
      {
        title: 'From Naples to Your Table: Our Family Journey',
        content: 'Our story begins in the cobblestone streets of Naples, where my great-grandfather first learned the art of pizza making from the masters of the craft. In 1952, he brought his passion and recipes to America, determined to share the authentic taste of Naples with his new community. What started as a small family kitchen has grown into Bella Pizza, but we\'ve never lost sight of our roots. Every recipe, every technique, every ingredient choice is guided by the traditions passed down through four generations. We still use the same wood-fired oven techniques, the same fresh ingredients philosophy, and the same commitment to quality that my great-grandfather brought with him from Italy. Today, we continue his legacy, serving not just pizza, but a piece of our family\'s history and love for authentic Italian cuisine.',
        excerpt: 'Learn about our family\'s journey from Naples to bringing authentic Italian flavors to your neighborhood.',
        author: 'Marco Rossini',
        image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg',
        authorId: adminUser._id,
        tags: ['family', 'history', 'naples', 'tradition'],
        status: 'published'
      },
      {
        title: 'The Secret to Our Wood-Fired Oven',
        content: 'Our wood-fired oven isn\'t just a cooking tool – it\'s the heart of our kitchen. Built with bricks imported directly from Italy, it reaches temperatures of 800-900°F (427-482°C), creating the perfect environment for authentic Neapolitan pizza. The intense heat cooks our pizzas in just 60-90 seconds, creating that signature charred crust and perfectly melted cheese that our customers rave about. We use only seasoned oak and cherry wood, which imparts a subtle smoky flavor that can\'t be replicated in conventional ovens. The dome shape of our oven creates perfect air circulation, ensuring even cooking and that characteristic leopard-spotted crust. Every morning, our master pizzaiolo carefully builds and maintains the fire, ensuring it reaches the perfect temperature before we open our doors. This dedication to traditional cooking methods is what sets Bella Pizza apart and keeps our customers coming back for the authentic taste of Naples.',
        excerpt: 'Explore how our traditional wood-fired oven creates the perfect crispy crust and smoky flavor in every pizza.',
        author: 'Antonio Moretti',
        image: 'https://images.pexels.com/photos/4252144/pexels-photo-4252144.jpeg',
        authorId: adminUser._id,
        tags: ['wood-fired', 'oven', 'traditional', 'neapolitan'],
        status: 'published'
      },
      {
        title: 'Fresh Ingredients: The Foundation of Great Pizza',
        content: 'At Bella Pizza, we believe that exceptional pizza starts with exceptional ingredients. That\'s why we source only the finest, freshest ingredients from local farmers and trusted Italian suppliers. Our San Marzano tomatoes come directly from the volcanic soil of Mount Vesuvius, where they\'ve been grown for generations. Our mozzarella di bufala is made fresh daily from water buffalo milk, giving it that creamy texture and rich flavor that makes our pizzas unforgettable. We use only extra virgin olive oil from small-batch producers in Tuscany, and our basil is grown locally in our own herb garden. Every ingredient is carefully selected for its quality, authenticity, and ability to create the perfect harmony of flavors. We never use pre-shredded cheese, canned sauces, or frozen dough – everything is made fresh, in-house, every day. This commitment to quality ingredients is what makes every bite of our pizza a true taste of Italy.',
        excerpt: 'Discover how our commitment to fresh, quality ingredients creates the authentic Italian taste our customers love.',
        author: 'Sofia Rossini',
        image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg',
        authorId: adminUser._id,
        tags: ['ingredients', 'fresh', 'quality', 'authentic'],
        status: 'published'
      },
      {
        title: 'The Perfect Margherita: A Timeless Classic',
        content: 'The Margherita pizza is more than just a menu item – it\'s a symbol of our commitment to tradition and quality. Named after Queen Margherita of Savoy in 1889, this simple yet perfect combination of tomato sauce, mozzarella, and basil represents the colors of the Italian flag. At Bella Pizza, we make our Margherita exactly as it was intended: with our house-made San Marzano tomato sauce, fresh mozzarella di bufala, fragrant basil leaves, and a drizzle of our finest extra virgin olive oil. The key to a perfect Margherita lies in the balance of flavors – the sweetness of the tomatoes, the creaminess of the cheese, the freshness of the basil, and the richness of the olive oil all working together in perfect harmony. Cooked in our wood-fired oven at high temperatures, the crust becomes crispy and charred while the cheese melts to perfection. It\'s a testament to the principle that sometimes, the simplest things are the most beautiful.',
        excerpt: 'Learn about the history and perfection of the classic Margherita pizza, the foundation of all great pizzerias.',
        author: 'Marco Rossini',
        image: 'https://images.pexels.com/photos/4252144/pexels-photo-4252144.jpeg',
        authorId: adminUser._id,
        tags: ['margherita', 'classic', 'traditional', 'simple'],
        status: 'published'
      }
    ];

    const createdPosts = await BlogPost.insertMany(samplePosts);
    console.log(`Created ${createdPosts.length} sample blog posts`);

    console.log('Database seeded successfully!');
    console.log('\nAdmin credentials:');
    console.log('Email: admin@bellapizza.com');
    console.log('Password: admin123');
    console.log('\nYou can now start the server and access the admin panel.');

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData(); 