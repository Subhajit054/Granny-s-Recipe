
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  cuisine: string;
  image: string;
  prepTime: number;
  servings: number;
  rating: number;
  authorName: string;
  isFavorite?: boolean;
}

const RecipeCard = ({
  id,
  title,
  cuisine,
  image,
  prepTime,
  servings,
  rating,
  authorName,
  isFavorite = false,
}: RecipeCardProps) => {
  return (
    <Card className="recipe-card h-full flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="recipe-tag absolute top-3 left-3">
          {cuisine}
        </span>
        <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-display font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {prepTime} min
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            {servings} servings
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-gray-500">By {authorName}</span>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <Link to={`/recipes/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Recipe
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
