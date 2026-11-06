const INGREDIENT_KCAL_PER_100G = {
  "草莓": 32,
  "原味酸奶": 61,
  "香蕉": 89,
  "蓝莓": 57,
  "希腊酸奶": 73,
  "芒果": 60,
  "椰乳": 197,
  "青柠汁": 25,
  "牛油果": 160,
  "燕麦饮": 46,
  "可可粉": 228,
  "牛奶": 61,
  "淡奶油": 340,
  "香草提取物": 288,
};

const RECIPE_DETAILS = [
  { flavor: "berry", program: "ICE CREAM", allergens: ["dairy"], tags: ["low-sugar"], ingredients: [["草莓", "Strawberries", 175], ["原味酸奶", "Plain yogurt", 125], ["香蕉", "Banana", 75]] },
  { flavor: "yogurt", program: "ICE CREAM", allergens: ["dairy"], tags: ["high-protein"], ingredients: [["蓝莓", "Blueberries", 150], ["希腊酸奶", "Greek yogurt", 150], ["香蕉", "Banana", 75]] },
  { flavor: "mango", program: "SORBET", allergens: [], tags: ["vegan", "low-sugar"], ingredients: [["芒果", "Mango", 170], ["椰乳", "Coconut milk", 130], ["青柠汁", "Lime juice", 6]] },
  { flavor: "avocado", program: "LITE ICE CREAM", allergens: [], tags: ["vegan", "low-sugar"], ingredients: [["牛油果", "Avocado", 100], ["香蕉", "Banana", 150], ["椰乳", "Coconut milk", 100]] },
  { flavor: "cocoa", program: "ICE CREAM", allergens: ["oats"], tags: ["vegan", "low-sugar"], ingredients: [["香蕉", "Banana", 150], ["燕麦饮", "Oat drink", 150], ["可可粉", "Cocoa powder", 10]] },
  { flavor: "yogurt", program: "ICE CREAM", allergens: ["dairy"], tags: ["family"], ingredients: [["牛奶", "Milk", 200], ["淡奶油", "Cream", 50], ["香草提取物", "Vanilla extract", 2]] },
];
