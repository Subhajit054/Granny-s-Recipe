
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative bg-gradient-to-r from-recipe-peach to-recipe-yellow py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 mb-6">
            Where <span className="text-recipe-orange">Technology</span> Meets <span className="text-recipe-orange">Tradition</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover recipes from around the world, get AI-powered suggestions based on your ingredients, and join a community of food lovers.
          </p>
          
          {/* Search form */}
          <div className="relative max-w-xl mx-auto mb-8">
            <div className="flex">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for any recipe or ingredient..."
                  className="w-full pl-12 pr-4 py-4 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-recipe-orange focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="rounded-r-full px-6 py-4 bg-recipe-orange hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>
          
          {/* Popular searches */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-gray-700 font-medium">Popular:</span>
            <button className="recipe-tag hover:bg-recipe-orange hover:text-white transition-colors">
              Bengali
            </button>
            <button className="recipe-tag hover:bg-recipe-orange hover:text-white transition-colors">
              South Indian
            </button>
            <button className="recipe-tag hover:bg-recipe-orange hover:text-white transition-colors">
              Italian
            </button>
            <button className="recipe-tag hover:bg-recipe-orange hover:text-white transition-colors">
              Quick Meals
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-recipe-orange hover:bg-orange-600 text-white">
              Try AI Recipe Generator
            </Button>
            <Button variant="outline" className="group">
              Premium Features
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-5 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,141.14s153.49-22.73,238.13-41.32,163.03-33.93,250.45-33.93C784.99,65.89,864,67,933.66,90.43"
            fill="#ffffff"
            fillOpacity="1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
