
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChefHat, Search, Menu, X, User, ShoppingCart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-recipe-orange" />
            <span className="text-2xl font-display font-bold text-gray-800">
              Granny's <span className="text-recipe-orange">Recipe</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-recipe-orange font-medium transition">
                Home
              </Link>
              <Link to="/recipes" className="text-gray-700 hover:text-recipe-orange font-medium transition">
                Recipes
              </Link>
              <Link to="/generator" className="text-gray-700 hover:text-recipe-orange font-medium transition">
                AI Generator
              </Link>
              <Link to="/prices" className="text-gray-700 hover:text-recipe-orange font-medium transition">
                Price Compare
              </Link>
              <Link to="/premium" className="text-gray-700 hover:text-recipe-orange font-medium transition">
                Premium
              </Link>
            </nav>
          )}

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search recipes..." 
                className="pl-10 w-64 rounded-full bg-gray-50"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-recipe-orange hover:bg-orange-600">
              Share Recipe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search recipes..." 
                className="pl-10 rounded-full bg-gray-50 w-full"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-recipe-orange font-medium py-2 transition" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/recipes" className="text-gray-700 hover:text-recipe-orange font-medium py-2 transition" onClick={toggleMenu}>
                Recipes
              </Link>
              <Link to="/generator" className="text-gray-700 hover:text-recipe-orange font-medium py-2 transition" onClick={toggleMenu}>
                AI Generator
              </Link>
              <Link to="/prices" className="text-gray-700 hover:text-recipe-orange font-medium py-2 transition" onClick={toggleMenu}>
                Price Compare
              </Link>
              <Link to="/premium" className="text-gray-700 hover:text-recipe-orange font-medium py-2 transition" onClick={toggleMenu}>
                Premium
              </Link>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="flex-1 bg-recipe-orange hover:bg-orange-600">
                  Share Recipe
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
