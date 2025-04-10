
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RecipeCard from "./RecipeCard";
import { ArrowRight } from "lucide-react";

// Sample recipe data
const FEATURED_RECIPES = [
  {
    id: "1",
    title: "Bengali Fish Curry (Macher Jhol)",
    cuisine: "Bengali",
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b40?q=80&w=1000&auto=format&fit=crop",
    prepTime: 40,
    servings: 4,
    rating: 4.8,
    authorName: "Anita Sen",
    isFavorite: true,
  },
  {
    id: "2",
    title: "South Indian Masala Dosa with Coconut Chutney",
    cuisine: "South Indian",
    image: "https://images.unsplash.com/photo-1562059392-096320bccc7e?q=80&w=1000&auto=format&fit=crop",
    prepTime: 30,
    servings: 2,
    rating: 4.7,
    authorName: "Priya Sharma",
  },
  {
    id: "3",
    title: "Homemade Italian Margherita Pizza",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop",
    prepTime: 60,
    servings: 4,
    rating: 4.5,
    authorName: "Marco Rossi",
  },
  {
    id: "4",
    title: "Classic Butter Chicken (Murgh Makhani)",
    cuisine: "North Indian",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000&auto=format&fit=crop",
    prepTime: 50,
    servings: 4,
    rating: 4.9,
    authorName: "Raj Malhotra",
  },
];

const categoryFilters = ["All", "Bengali", "South Indian", "North Indian", "Italian", "Chinese"];

const FeaturedRecipes = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRecipes = activeCategory === "All"
    ? FEATURED_RECIPES
    : FEATURED_RECIPES.filter(recipe => recipe.cuisine === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-800 heading-decoration">
              Featured Recipes
            </h2>
            <p className="text-gray-600 mt-4 mb-4 md:mb-0 max-w-2xl">
              Discover our hand-picked selection of delicious recipes from various cuisines around the world.
            </p>
          </div>
          <Button variant="ghost" className="self-start md:self-end group flex items-center text-recipe-orange">
            View All Recipes
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryFilters.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-recipe-orange text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipe grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
