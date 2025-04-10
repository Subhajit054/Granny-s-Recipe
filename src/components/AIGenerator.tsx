
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Search, Sparkles } from "lucide-react";

const AIGenerator = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const addIngredient = () => {
    if (inputValue.trim() !== "" && !ingredients.includes(inputValue.trim())) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  const generateRecipe = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-recipe-green/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
              AI Recipe Generator
            </h2>
            <p className="text-gray-600">
              Tell us what ingredients you have, and our AI will suggest delicious recipes for you to try!
            </p>
          </div>

          <Card className="shadow-lg border-recipe-green border-2">
            <CardContent className="pt-6">
              <div className="flex items-center mb-8">
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Enter an ingredient..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    className="pr-10"
                  />
                  <button
                    onClick={addIngredient}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-recipe-orange transition-colors"
                  >
                    <PlusCircle className="h-5 w-5" />
                  </button>
                </div>
                <Button
                  onClick={addIngredient}
                  className="ml-3 hidden sm:flex"
                  variant="outline"
                >
                  Add
                </Button>
              </div>

              {/* Ingredients chips */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Your ingredients:</h3>
                <div className="flex flex-wrap gap-2">
                  {ingredients.length === 0 ? (
                    <p className="text-gray-400 text-sm italic">Add some ingredients to get started</p>
                  ) : (
                    ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="bg-recipe-yellow text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        <span>{ingredient}</span>
                        <button
                          onClick={() => removeIngredient(ingredient)}
                          className="ml-2 text-gray-600 hover:text-gray-800"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Preferences options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Dietary preferences
                  </label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                    <option>No preference</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                    <option>Gluten-free</option>
                    <option>Keto</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Cuisine type
                  </label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                    <option>Any cuisine</option>
                    <option>Bengali</option>
                    <option>South Indian</option>
                    <option>North Indian</option>
                    <option>Italian</option>
                    <option>Chinese</option>
                    <option>Mexican</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={generateRecipe}
                disabled={ingredients.length === 0 || isGenerating}
                className="w-full bg-recipe-orange hover:bg-orange-600 h-12"
              >
                {isGenerating ? (
                  "Generating..."
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Recipe
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              <strong>Pro tip:</strong> For the best results, add at least 3-5 main ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGenerator;
