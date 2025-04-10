
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const PremiumFeatures = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-recipe-purple/10 to-recipe-peach/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center text-recipe-purple bg-purple-100 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-1 text-recipe-purple fill-recipe-purple" />
            Premium Membership
          </span>
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
            Unlock Exclusive Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your cooking experience with our premium features, designed to save you time and inspire your culinary journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* AI Meal Plans */}
          <Card className="recipe-card hover:-translate-y-1 transition-transform">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-recipe-yellow flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/32x32/f97316/FFFFFF?text=AI"
                  alt="AI Icon"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                AI Meal Plans
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalized weekly meal plans based on your dietary preferences, available ingredients, and nutritional goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Personalized for your diet</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automatic grocery lists</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Nutritional information</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Ad-Free Experience */}
          <Card className="recipe-card hover:-translate-y-1 transition-transform">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-recipe-peach flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/32x32/f97316/FFFFFF?text=Ad"
                  alt="Ad Free Icon"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                Ad-Free Experience
              </h3>
              <p className="text-gray-600 mb-4">
                Enjoy an uninterrupted cooking journey with no advertisements, faster page loads, and a cleaner interface.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No distracting ads</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Faster browsing experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Distraction-free cooking</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Exclusive Content */}
          <Card className="recipe-card hover:-translate-y-1 transition-transform">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-recipe-green flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/32x32/f97316/FFFFFF?text=Ex"
                  alt="Exclusive Icon"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                Exclusive Content
              </h3>
              <p className="text-gray-600 mb-4">
                Access premium recipes, cooking techniques, and expert tutorials from renowned chefs around the world.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Chef masterclasses</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regional cuisine deep dives</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Early access to new features</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-recipe-purple hover:bg-purple-600">
            Become a Premium Member
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Starting at just ₹299/month. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
