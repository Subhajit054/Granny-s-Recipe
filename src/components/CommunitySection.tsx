
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Calendar, ChefHat } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
            Join Our Cooking Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with fellow food enthusiasts, participate in cooking challenges, and showcase your culinary creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Weekly Challenge */}
          <Card className="recipe-card overflow-hidden">
            <div className="h-48 bg-recipe-peach flex items-center justify-center">
              <Calendar className="h-24 w-24 text-recipe-orange" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                Weekly Cooking Challenges
              </h3>
              <p className="text-gray-600 mb-4">
                Each week, we announce a new cooking challenge. Participants create dishes based on the theme, share their results, and win exciting prizes!
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-medium text-gray-800">Current challenge:</p>
                <p className="text-recipe-orange font-bold">Regional Breakfast Specialties</p>
                <p className="text-gray-500 text-sm">Ends in 3 days</p>
              </div>
              <Button variant="outline" className="w-full">
                View Challenge Details
              </Button>
            </CardContent>
          </Card>

          {/* Live Cooking Battles */}
          <Card className="recipe-card overflow-hidden">
            <div className="h-48 bg-recipe-yellow flex items-center justify-center">
              <ChefHat className="h-24 w-24 text-recipe-orange" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                Live Cooking Battles
              </h3>
              <p className="text-gray-600 mb-4">
                Watch expert home cooks go head-to-head in real-time cooking competitions. Vote for your favorites and learn new techniques!
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-medium text-gray-800">Upcoming battle:</p>
                <p className="text-recipe-orange font-bold">Bengali vs. South Indian Rice Dishes</p>
                <p className="text-gray-500 text-sm">Saturday, 7:00 PM</p>
              </div>
              <Button variant="outline" className="w-full">
                Set Reminder
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-recipe-green/20 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <Users className="h-12 w-12 text-recipe-orange mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
            10,000+ Active Members
          </h3>
          <p className="text-gray-600 mb-6">
            Join our vibrant community of food lovers, home cooks, and culinary experts. Share your recipes, get feedback, and make friends with similar tastes!
          </p>
          <Button className="bg-recipe-orange hover:bg-orange-600">
            Join Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
