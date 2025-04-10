
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Heart, ShoppingCart, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Ingredient {
  name: string;
  quantity: string;
  price: number;
  available: boolean;
}

interface Step {
  number: number;
  description: string;
  ingredients: Ingredient[];
}

interface RecipeDetailProps {
  id: string;
  title: string;
  cuisine: string;
  image: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  rating: number;
  authorName: string;
  isFavorite?: boolean;
  description: string;
  steps: Step[];
}

const RecipeDetail = ({
  id,
  title,
  cuisine,
  image,
  prepTime,
  cookTime,
  totalTime,
  servings,
  rating,
  authorName,
  isFavorite = false,
  description,
  steps,
}: RecipeDetailProps) => {
  const { toast } = useToast();
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});

  const handleAddToCart = (ingredientName: string) => {
    setAddedToCart(prev => ({ ...prev, [ingredientName]: true }));
    toast({
      title: "Added to cart",
      description: `${ingredientName} has been added to your shopping cart.`,
    });
  };

  const addAllIngredientsToCart = () => {
    const allIngredients: Record<string, boolean> = {};
    steps.forEach(step => {
      step.ingredients.forEach(ingredient => {
        allIngredients[ingredient.name] = true;
      });
    });
    setAddedToCart(allIngredients);
    toast({
      title: "Added all ingredients",
      description: "All recipe ingredients have been added to your shopping cart.",
    });
  };

  return (
    <div className="recipe-detail">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recipe image and basic info */}
        <Card className="lg:col-span-1">
          <div className="relative">
            <img src={image} alt={title} className="w-full h-72 object-cover rounded-t-lg" />
            <span className="recipe-tag absolute top-3 left-3">{cuisine}</span>
            <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
              <Heart
                className={`h-5 w-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </button>
          </div>
          
          <CardContent className="pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Prep: {prepTime} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Cook: {cookTime} min</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Total: {totalTime} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{servings} servings</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                </div>
                <span className="text-sm text-gray-500">By {authorName}</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="border-t pt-4 flex justify-between">
            <Button className="bg-recipe-orange hover:bg-orange-600">
              Print Recipe
            </Button>
            <Button variant="outline" onClick={addAllIngredientsToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add All Ingredients
            </Button>
          </CardFooter>
        </Card>

        {/* Recipe description and steps */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h1 className="text-3xl font-display font-bold text-gray-800 mb-4">
              {title}
            </h1>
            
            <p className="text-gray-700 mb-8">{description}</p>
            
            <h2 className="text-xl font-display font-bold text-gray-800 mb-4 heading-decoration">
              Step by Step Instructions
            </h2>
            
            <div className="space-y-8 mt-6">
              {steps.map((step) => (
                <div key={step.number} className="border-b pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold mb-2">
                    Step {step.number}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  
                  {step.ingredients.length > 0 && (
                    <div className="mt-4 bg-recipe-yellow/10 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold mb-2 text-orange-800">
                        Ingredients needed for this step:
                      </h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Ingredient</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Availability</TableHead>
                            <TableHead>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {step.ingredients.map((ingredient) => (
                            <TableRow key={ingredient.name}>
                              <TableCell className="font-medium">{ingredient.name}</TableCell>
                              <TableCell>{ingredient.quantity}</TableCell>
                              <TableCell>₹{ingredient.price}</TableCell>
                              <TableCell>
                                {ingredient.available ? (
                                  <span className="text-green-600 flex items-center">
                                    <CheckCircle2 className="h-4 w-4 mr-1" /> In Stock
                                  </span>
                                ) : (
                                  <span className="text-red-500">Out of Stock</span>
                                )}
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  disabled={!ingredient.available || addedToCart[ingredient.name]}
                                  onClick={() => handleAddToCart(ingredient.name)}
                                  className={addedToCart[ingredient.name] ? "bg-green-50 text-green-700 border-green-200" : ""}
                                >
                                  <ShoppingCart className="h-3 w-3 mr-1" />
                                  {addedToCart[ingredient.name] ? "Added" : "Add to Cart"}
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecipeDetail;
