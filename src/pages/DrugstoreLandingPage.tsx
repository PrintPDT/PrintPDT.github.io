import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';

const DrugstoreLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">MediCare</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shop</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Prescriptions</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white py-20 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">Your Health, Our Priority</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover a wide range of health and wellness products, from medicines to beauty essentials, delivered right to your door.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-blue-800 dark:hover:bg-gray-300 font-semibold px-8 py-3 rounded-full shadow-lg">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Explore Our Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard title="Medicines" description="Prescription & OTC" icon="💊" />
          <CategoryCard title="Vitamins & Supplements" description="Boost your health" icon="🍊" />
          <CategoryCard title="Beauty & Skincare" description="Radiant skin solutions" icon="💅" />
          <CategoryCard title="Baby Care" description="Essentials for your little one" icon="👶" />
          <CategoryCard title="Personal Care" description="Daily hygiene products" icon="🧼" />
          <CategoryCard title="First Aid" description="Emergency supplies" icon="🩹" />
          <CategoryCard title="Health Devices" description="Monitoring & diagnostics" icon="🩺" />
          <CategoryCard title="Sexual Wellness" description="Discreet & trusted" icon="❤️" />
        </div>
      </section>

      {/* Call to Action / Promotions */}
      <section className="bg-blue-50 dark:bg-gray-800 py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Get 15% Off Your First Order!</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Sign up for our newsletter and receive exclusive discounts and health tips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input type="email" placeholder="Enter your email" className="max-w-sm w-full py-2 px-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">MediCare</h4>
            <p className="text-sm">Your trusted partner for health and wellness.</p>
            <div className="flex space-x-4 mt-4">
              {/* Social media icons - using placeholder.svg for now */}
              <a href="#" className="hover:text-white"><img src="/placeholder.svg" alt="Facebook" className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><img src="/placeholder.svg" alt="Twitter" className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><img src="/placeholder.svg" alt="Instagram" className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white text-sm transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <p className="text-sm">123 Health St, Wellness City, 12345</p>
            <p className="text-sm">Email: info@medicare.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} MediCare. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Helper component for categories
const CategoryCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:border-gray-600">
    <CardContent className="flex flex-col items-center justify-center p-0">
      <div className="text-5xl mb-4">{icon}</div>
      <CardTitle className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</CardTitle>
      <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default DrugstoreLandingPage;