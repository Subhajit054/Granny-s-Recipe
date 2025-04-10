
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChefHat, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-recipe-orange" />
              <span className="text-2xl font-display font-bold">
                Granny's <span className="text-recipe-orange">Recipe</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Where technology meets tradition. Discover recipes from around the world and elevate your cooking experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-400 hover:text-white transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/generator" className="text-gray-400 hover:text-white transition-colors">
                  AI Generator
                </Link>
              </li>
              <li>
                <Link to="/prices" className="text-gray-400 hover:text-white transition-colors">
                  Price Comparison
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-gray-400 hover:text-white transition-colors">
                  Premium Membership
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Cuisines</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cuisine/bengali" className="text-gray-400 hover:text-white transition-colors">
                  Bengali
                </Link>
              </li>
              <li>
                <Link to="/cuisine/south-indian" className="text-gray-400 hover:text-white transition-colors">
                  South Indian
                </Link>
              </li>
              <li>
                <Link to="/cuisine/north-indian" className="text-gray-400 hover:text-white transition-colors">
                  North Indian
                </Link>
              </li>
              <li>
                <Link to="/cuisine/italian" className="text-gray-400 hover:text-white transition-colors">
                  Italian
                </Link>
              </li>
              <li>
                <Link to="/cuisine/chinese" className="text-gray-400 hover:text-white transition-colors">
                  Chinese
                </Link>
              </li>
              <li>
                <Link to="/cuisine/mexican" className="text-gray-400 hover:text-white transition-colors">
                  Mexican
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get weekly recipe ideas, cooking tips, and special offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-recipe-orange hover:bg-orange-600 w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; 2025 Granny's Recipe. All rights reserved.
          </p>
          <div className="space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
