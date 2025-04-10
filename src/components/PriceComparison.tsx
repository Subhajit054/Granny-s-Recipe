
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Check, Search, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PriceItem {
  id: number;
  item: string;
  bigbasket: number;
  blinkit: number;
  jiomart: number;
  inCart?: boolean;
}

const priceComparisonData: PriceItem[] = [
  {
    id: 1,
    item: "Basmati Rice (1kg)",
    bigbasket: 125,
    blinkit: 140,
    jiomart: 120,
  },
  {
    id: 2,
    item: "Chicken Breast (500g)",
    bigbasket: 180,
    blinkit: 170,
    jiomart: 185,
  },
  {
    id: 3,
    item: "Olive Oil (500ml)",
    bigbasket: 450,
    blinkit: 470,
    jiomart: 440,
  },
  {
    id: 4,
    item: "Paneer (200g)",
    bigbasket: 90,
    blinkit: 88,
    jiomart: 85,
  },
];

const PriceComparison = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<PriceItem[]>([]);
  const [priceData, setPriceData] = useState<PriceItem[]>(priceComparisonData);

  const handleAddToList = (item: PriceItem) => {
    // Add item to cart
    if (!cartItems.some(cartItem => cartItem.id === item.id)) {
      setCartItems([...cartItems, item]);
      
      // Update the priceData to mark this item as in cart
      setPriceData(priceData.map(priceItem => 
        priceItem.id === item.id ? { ...priceItem, inCart: true } : priceItem
      ));
      
      // Get the best price and vendor
      const prices = [
        { vendor: "BigBasket", price: item.bigbasket },
        { vendor: "Blinkit", price: item.blinkit },
        { vendor: "JioMart", price: item.jiomart },
      ];
      const bestPrice = prices.reduce((prev, current) => 
        (prev.price < current.price) ? prev : current
      );
      
      toast({
        title: "Added to Shopping List",
        description: `${item.item} added from ${bestPrice.vendor} at ₹${bestPrice.price}`,
      });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = searchTerm 
    ? priceData.filter(item => 
        item.item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : priceData;

  const viewCart = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Shopping Cart Empty",
        description: "Add items to your shopping cart first",
        variant: "destructive",
      });
      return;
    }
    
    // Calculate total savings
    let totalRegularPrice = 0;
    let totalBestPrice = 0;
    
    cartItems.forEach(item => {
      const regularPrice = Math.max(item.bigbasket, item.blinkit, item.jiomart);
      const bestPrice = Math.min(item.bigbasket, item.blinkit, item.jiomart);
      totalRegularPrice += regularPrice;
      totalBestPrice += bestPrice;
    });
    
    const savings = totalRegularPrice - totalBestPrice;
    
    toast({
      title: `Cart: ${cartItems.length} items`,
      description: `Total savings: ₹${savings} compared to regular prices`,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
            Compare Grocery Prices
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the best deals for your ingredients across popular grocery delivery platforms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-md border-recipe-peach border">
            <CardContent className="p-6">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for any ingredient or product..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-left py-3 px-4 font-semibold text-gray-700">Item</TableHead>
                      <TableHead className="text-center py-3 px-4 font-semibold text-gray-700">
                        <div className="flex items-center justify-center">
                          <img
                            src="https://placehold.co/24x24/EEE/31572c?text=BB"
                            alt="BigBasket"
                            className="h-6 w-6 mr-2 rounded"
                          />
                          BigBasket
                        </div>
                      </TableHead>
                      <TableHead className="text-center py-3 px-4 font-semibold text-gray-700">
                        <div className="flex items-center justify-center">
                          <img
                            src="https://placehold.co/24x24/EEE/f97316?text=BL"
                            alt="Blinkit"
                            className="h-6 w-6 mr-2 rounded"
                          />
                          Blinkit
                        </div>
                      </TableHead>
                      <TableHead className="text-center py-3 px-4 font-semibold text-gray-700">
                        <div className="flex items-center justify-center">
                          <img
                            src="https://placehold.co/24x24/EEE/0046be?text=JM"
                            alt="JioMart"
                            className="h-6 w-6 mr-2 rounded"
                          />
                          JioMart
                        </div>
                      </TableHead>
                      <TableHead className="text-center py-3 px-4 font-semibold text-gray-700">Best Deal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.map((item) => {
                      const bestPrice = Math.min(
                        item.bigbasket,
                        item.blinkit,
                        item.jiomart
                      );
                      return (
                        <TableRow key={item.id} className="border-b hover:bg-gray-50">
                          <TableCell className="py-4 px-4 text-gray-700">{item.item}</TableCell>
                          <TableCell
                            className={`py-4 px-4 text-center ${
                              item.bigbasket === bestPrice ? "font-semibold text-green-600" : ""
                            }`}
                          >
                            ₹{item.bigbasket}
                          </TableCell>
                          <TableCell
                            className={`py-4 px-4 text-center ${
                              item.blinkit === bestPrice ? "font-semibold text-green-600" : ""
                            }`}
                          >
                            ₹{item.blinkit}
                          </TableCell>
                          <TableCell
                            className={`py-4 px-4 text-center ${
                              item.jiomart === bestPrice ? "font-semibold text-green-600" : ""
                            }`}
                          >
                            ₹{item.jiomart}
                          </TableCell>
                          <TableCell className="py-4 px-4 text-center">
                            <Button
                              variant="outline"
                              size="sm"
                              className={`text-xs ${item.inCart 
                                ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100" 
                                : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"}`}
                              onClick={() => handleAddToList(item)}
                              disabled={item.inCart}
                            >
                              {item.inCart ? (
                                <>
                                  <Check className="h-3 w-3 mr-1" />
                                  Added
                                </>
                              ) : (
                                <>
                                  <ShoppingCart className="h-3 w-3 mr-1" />
                                  Add to List
                                </>
                              )}
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {cartItems.length > 0 
                    ? `${cartItems.length} items in your shopping list` 
                    : "Add ingredients to your shopping list"}
                </span>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={viewCart}
                    className={cartItems.length > 0 ? "bg-green-50 border-green-200" : ""}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    View Shopping List ({cartItems.length})
                  </Button>
                  <Button className="bg-recipe-orange hover:bg-orange-600">
                    View Full Price Comparison
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
