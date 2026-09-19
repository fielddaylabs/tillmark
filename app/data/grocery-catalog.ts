export type GroceryCatalogItem = {
  id: string;
  name: string;
  category: string;
  units: string[];
  defaultUnit: string;
  aliases: string[];
};

const item = (
  id: string,
  name: string,
  category: string,
  units: string[],
  aliases: string[],
  defaultUnit = units[0] ?? "",
): GroceryCatalogItem => ({ id, name, category, units, defaultUnit, aliases });

// Brand-free names distilled from the descriptions returned by the benchmark
// receipts. Aliases retain the printed receipt vocabulary so future scans can
// resolve retailer abbreviations without exposing those brands in the UI.
const benchmarkGroceryCatalogBase: GroceryCatalogItem[] = [
  item("lentils", "Lentils", "Pantry", ["package", "oz", "lb"], ["lentils", "lentil soup", "goya lentils", "hrd lentils dried"]),
  item("beans", "Beans", "Pantry", ["can", "package", "oz"], ["beans", "black beans", "goya black beans", "pork & beans"]),
  item("coke-cans", "Cola Cans", "Beverage", ["pack", "can", "oz"], ["cola cans", "8pk/7.5oz cn coke", "coke classic", "coke classic conto"], "pack"),
  item("bottle-deposit", "Bottle Deposit", "Miscellaneous", [], ["bottle deposit", "btl/can deposit"]),
  item("organic-grape-tomatoes", "Organic Grape Tomatoes", "Produce", ["package", "oz", "lb"], ["organic grape tomatoes", "grape tomatoes", "grape tomato", "org grape tomatoes"]),
  item("tomatoes", "Tomatoes", "Produce", ["each", "package", "lb"], ["tomatoes", "tomato", "red tomatoes on vine"]),
  item("cherry-tomatoes", "Cherry Tomatoes", "Produce", ["package", "oz", "lb"], ["cherry tomatoes", "cherub tomatoes", "cherry nw lrge 18l"]),
  item("apples", "Apples", "Produce", ["each", "bag", "lb"], ["apples", "gala apples", "granny smith apples"]),
  item("bananas", "Bananas", "Produce", ["each", "bunch", "lb"], ["bananas", "banana we", "bananas lrw", "banana bag", "banana other", "wt banana bag #3", "banana naked other"]),
  item("blueberries", "Blueberries", "Produce", ["package", "oz", "lb"], ["blueberry", "blueberry 12 dry p", "bw pfv blueberry", "blubry mnchrs 42"]),
  item("strawberries", "Strawberries", "Produce", ["package", "oz", "lb"], ["strawberries", "organic strawberry"]),
  item("peaches", "Peaches", "Produce", ["each", "package", "lb"], ["peaches"]),
  item("pears", "Pears", "Produce", ["each", "package", "lb"], ["pears", "bartlett pears"]),
  item("pineapple", "Pineapple", "Produce", ["each", "lb"], ["pineapple", "pineapple gold"]),
  item("lemons", "Lemons", "Produce", ["each", "bag", "lb"], ["lemons", "bulk lemons", "gv lemon 75"]),
  item("broccoli", "Broccoli", "Produce", ["each", "package", "lb"], ["broccoli", "broccoli crowns", "broc crw ns rpc", "broc crw ns"]),
  item("spinach", "Spinach", "Produce", ["bunch", "package", "oz"], ["spinach", "bunch spinach", "dole spinach 10"]),
  item("lettuce", "Lettuce", "Produce", ["each", "head", "package"], ["lettuce", "romaine hrt s", "romaine hearts"]),
  item("cucumbers", "Cucumbers", "Produce", ["each", "package", "lb"], ["cucumbers", "green cucumbers", "mini cucumber 16oz"]),
  item("mushrooms", "Mushrooms", "Produce", ["package", "oz", "lb"], ["mushrooms", "portabella mushrms"]),
  item("carrots", "Carrots", "Produce", ["package", "oz", "lb"], ["carrots", "shredded carrots"]),
  item("onions", "Onions", "Produce", ["each", "bag", "lb"], ["onions", "green onions"]),
  item("bell-peppers", "Bell Peppers", "Produce", ["each", "package", "lb"], ["bell pepper", "bell peppers", "pepper assortment", "red bell"]),
  item("sweet-potatoes", "Sweet Potatoes", "Produce", ["each", "bag", "lb"], ["sweet potatoes"]),
  item("artichokes", "Artichokes", "Produce", ["each", "package"], ["artichokes"]),
  item("cilantro", "Cilantro", "Produce", ["bunch", "package"], ["cilantro"]),
  item("milk", "Milk", "Dairy", ["gallon", "half gallon", "carton", "oz"], ["milk", "milk 1%", "whole milk", "wpo whole milk", "srbb hvd milk gall", "rf 2% organic milk"]),
  item("oat-milk", "Oat Milk", "Dairy", ["carton", "oz"], ["oatmilk", "oat milk", "original oatmilk", "gg oatmilk"]),
  item("almond-milk", "Almond Milk", "Dairy", ["carton", "oz"], ["almond milk", "almondmilk"]),
  item("yogurt", "Yogurt", "Dairy", ["container", "package", "oz"], ["yogurt", "almondmilk yogurt", "lnf yogurt", "cbt greek style yo"]),
  item("cream-cheese", "Cream Cheese", "Dairy", ["package", "oz"], ["cream cheese", "srbb cream chs bri"]),
  item("butter", "Butter", "Dairy", ["package", "stick", "oz"], ["butter", "butter quarters", "srbb unsltd butter"]),
  item("cheese", "Cheese", "Dairy", ["package", "oz", "lb"], ["cheese", "swiss cheese", "sr cheese swiss"]),
  item("eggs", "Eggs", "Dairy", ["dozen", "half dozen", "each"], ["eggs", "large eggs", "large brown eggs", "egglbst lg white 1", "mp eggs", "large wh bar"]),
  item("chicken", "Chicken", "Protein", ["package", "lb", "each"], ["chicken", "boneless chicken breast"]),
  item("chicken-sausage", "Chicken Sausage", "Protein", ["package", "link", "lb"], ["chicken sausage"]),
  item("beef", "Beef", "Protein", ["package", "lb", "each"], ["beef", "tom hot house beef", "rst beef jt gng"]),
  item("salmon", "Salmon", "Protein", ["package", "lb", "each"], ["salmon", "atlantic salm fillt"]),
  item("tuna", "Tuna", "Protein", ["can", "pack", "oz"], ["tuna", "tuna in water", "bb tuna solid wht", "sk tuna 4pk"]),
  item("tofu", "Tofu", "Protein", ["package", "oz"], ["tofu", "organic tofu"]),
  item("bread", "Bread", "Bakery", ["loaf", "each", "package"], ["bread", "french bread", "12 grain bread"]),
  item("flatbread", "Flatbread", "Bakery", ["package", "each"], ["flatbread", "artisan flatbread"]),
  item("tortillas", "Corn Tortillas", "Bakery", ["package", "each", "oz"], ["tortillas", "corn tortillas"]),
  item("pasta", "Pasta", "Pantry", ["package", "oz", "lb"], ["pasta", "dry pasta", "filled pasta", "macaroni & cheese", "ron rotelle"]),
  item("pasta-sauce", "Pasta Sauce", "Pantry", ["jar", "package", "oz"], ["pasta sauce", "tomato sauce", "alfredo sauce", "marinara sauce"]),
  item("soup", "Soup", "Pantry", ["can", "container", "oz"], ["soup", "lentil soup", "amys soup ls len", "prog clcs beef broth"]),
  item("oatmeal", "Oatmeal", "Pantry", ["package", "oz", "lb"], ["oatmeal", "gv oatmeal", "quick oats", "dme quick oats 18z", "crispy oats"]),
  item("cereal", "Cereal", "Pantry", ["box", "package", "oz"], ["cereal", "cheerios"]),
  item("coffee", "Coffee", "Beverage", ["bag", "can", "oz"], ["coffee", "coffee c", "srbb orig coffee c"]),
  item("tea", "Tea", "Beverage", ["box", "package", "oz"], ["tea", "tetley tea british"]),
  item("fruit-cups-in-juice", "Fruit Cups", "Pantry", ["package", "each", "oz"], ["fruit cups", "fruit cups - juice", "fruit cups in juice"], "package"),
  item("juice", "Juice", "Beverage", ["bottle", "carton", "oz"], ["juice", "cold pressed juice", "cranberry cocktail"]),
  item("water", "Water", "Beverage", ["bottle", "pack", "oz"], ["water", "pure life 24pk watpc", "pure life 24pk watp c", "pure life watp", "pure life watpc", "aquafi 2pk"]),
  item("pizza", "Frozen Pizza", "Frozen food", ["each", "package"], ["pizza", "all nat pizzas"]),
  item("hummus", "Hummus", "Pantry", ["container", "package", "oz"], ["hummus", "organic hummus", "jsp h org hummus", "cdr hommus tahin"]),
  item("mayonnaise", "Mayonnaise", "Pantry", ["jar", "package", "oz"], ["mayonnaise", "helman mayonnaise", "mayo"]),
  item("dressing", "Dressing", "Pantry", ["bottle", "package", "oz"], ["dressing", "vinaigrette dressing"]),
  item("pickles", "Pickles", "Pantry", ["jar", "package", "oz"], ["pickles", "dill pickle chips"]),
  item("chips", "Chips", "Pantry", ["bag", "package", "oz"], ["chips", "clancy's chips"]),
  item("cookies", "Cookies", "Pantry", ["package", "box", "oz"], ["cookies", "cookie", "oreo cookie", "chocolate sandwich", "chips ahoy"]),
  item("crackers", "Crackers", "Pantry", ["box", "package", "oz"], ["crackers"]),
  item("dish-detergent", "Dish Detergent", "Household", ["bottle", "package", "oz"], ["dish detergent", "dish soap"]),
  item("aluminum-foil", "Aluminum Foil", "Household", ["roll", "package"], ["aluminum foil"]),
  item("spoons", "Plastic Spoons", "Household", ["package", "each"], ["spoons", "plastic spoons", "srpb everydy spoon"]),
];

// Clean, brand-free entries recovered from the local-storage catalog. The
// receipt-specific wording remains in aliases so matching improves without
// exposing retailer or manufacturer names in the picker.
const recoveredCatalogItems: GroceryCatalogItem[] = [
  item("green-beans", "Green Beans", "Produce", ["package", "can", "lb"], ["green beans", "steam green beans"]),
  item("bologna", "Bologna", "Deli", ["package", "oz", "lb"], ["bologna", "fs rus wnd rbr bologn"]),
  item("shells-and-cheese", "Shells and Cheese", "Pantry", ["package", "box", "oz"], ["shells and cheese", "deluxe shells cheddar", "deluxe shells ghdr", "hrd dlx shls & ghdr", "hrd dlx shls & chdr"]),
  item("bow-tie-pasta", "Bow Tie Pasta", "Pantry", ["package", "oz", "lb"], ["bow tie pasta", "farfale boy tie", "farfalle boy tie", "farfalle bow tie", "hrd farfale boy tie", "hrd farfalle boy tie"]),
  item("cheese-and-crackers", "Cheese and Crackers", "Snacks", ["package", "box", "oz"], ["cheese and crackers", "cream cheese cheddar crackers", "hrd crm che/chv crkr"]),
  item("cooking-spray", "Cooking Spray", "Pantry", ["can", "package", "oz"], ["cooking spray", "grill spray", "hrd grill spray"]),
  item("american-cheese-slices", "American Cheese Slices", "Dairy", ["package", "slice", "oz"], ["american cheese slices", "american white singles", "american white cheese singles", "hrd amercn wht sngl w", "hrd amercrn wht sngl w"]),
  item("electrolyte-water", "Electrolyte Water", "Beverage", ["bottle", "pack", "oz"], ["electrolyte water", "electrolyte e water", "hrd electroly+e wtr"]),
  item("diced-tomatoes-peppers", "Diced Tomatoes with Peppers", "Pantry", ["can", "package", "oz"], ["diced tomatoes with peppers", "diced tomato habanero", "dicd tomato habanero", "hrd dico tomto haban", "hrd dicd tomto haban"]),
  item("cinnamon-granola-bars", "Cinnamon Granola Bars", "Pantry", ["box", "package", "each"], ["cinnamon granola bars", "granola bar cinnamon", "jnkls grnla br cinn"]),
  item("medium-roast-coffee", "Medium Roast Coffee", "Beverage", ["bag", "can", "oz"], ["medium roast coffee", "medium roast iced"]),
  item("chipotle-peppers", "Chipotle Peppers", "Pantry", ["can", "jar", "oz"], ["chipotle peppers"]),
  item("vegan-cheese-shreds", "Vegan Cheese Shreds", "Dairy", ["package", "oz"], ["vegan cheese shreds", "vegan style shreds"]),
  item("dried-chili-peppers", "Dried Chili Peppers", "Pantry", ["package", "oz"], ["dried chili peppers", "dried chili pepper"]),
  item("coconut-crisps", "Coconut Crisps", "Snacks", ["package", "oz"], ["coconut crisps", "coconutcashbricrisps"]),
  item("canola-oil", "Canola Oil", "Pantry", ["bottle", "oz"], ["canola oil"]),
  item("kalamata-olives", "Kalamata Olives", "Pantry", ["jar", "package", "oz"], ["kalamata olives"]),
  item("whole-grains", "Whole Grains", "Pantry", ["package", "box", "oz"], ["whole grains", "organic grains"]),
  item("portobello-mushrooms", "Portobello Mushrooms", "Produce", ["package", "oz", "lb"], ["portobello mushrooms", "portabella mushrooms", "portabella mushrs"]),
  item("meatless-meatballs", "Meatless Meatballs", "Frozen food", ["package", "oz"], ["meatless meatballs"]),
  item("vanilla-extract", "Vanilla Extract", "Baking", ["bottle", "oz"], ["vanilla extract", "pure vanilla"]),
  item("peanut-butter", "Peanut Butter", "Pantry", ["jar", "package", "oz"], ["peanut butter", "creamy peanut btr", "crunchy peanut butter", "crnchy peanut buttr", "crnchy peanut butr", "dme crnchy pnt buttr", "dme crnchy pnt butr"]),
  item("trash-bags", "Trash Bags", "Household", ["box", "package", "each"], ["trash bags", "large eco bags", "xtratuff white trsh", "xtratuff wht trsh"]),
  item("dried-cranberries", "Dried Cranberries", "Snacks", ["package", "oz"], ["dried cranberries"]),
  item("dark-chocolate", "Dark Chocolate", "Snacks", ["bar", "package", "oz"], ["dark chocolate", "dark choc assort"]),
  item("half-and-half", "Half and Half", "Dairy", ["carton", "pint", "oz"], ["half and half", "fat free half", "fat free half/half"]),
  item("egg-rolls", "Egg Rolls", "Frozen food", ["package", "each", "oz"], ["egg rolls"]),
  item("navel-oranges", "Navel Oranges", "Produce", ["each", "bag", "lb"], ["navel oranges"]),
  item("mixed-squash", "Mixed Squash", "Produce", ["package", "each", "lb"], ["mixed squash"]),
  item("gummy-candy", "Gummy Candy", "Snacks", ["package", "oz"], ["gummy candy", "gummi bears worms", "g bearse hppy cola", "g bears hppy cola", "gummi bears/worms"]),
  item("prepared-sandwich", "Prepared Sandwich", "Prepared Food", ["package", "each"], ["prepared sandwich", "lean sandwich"]),
  item("yogurt-tubes", "Yogurt Tubes", "Dairy", ["package", "each", "oz"], ["yogurt tubes", "moo tubes"]),
  item("italian-sausage", "Italian Sausage", "Meat", ["package", "link", "lb"], ["italian sausage", "italian t sausage"]),
  item("string-cheese", "String Cheese", "Dairy", ["package", "stick", "oz"], ["string cheese", "lt spirals string", "lt/spirals string"]),
  item("deli-meat", "Deli Meat", "Deli", ["package", "oz", "lb"], ["deli meat", "ham or turkey tub"]),
  item("orange-juice", "Orange Juice", "Beverage", ["carton", "bottle", "oz"], ["orange juice", "nfc oj in carafe", "nfc oj"]),
  item("whipped-topping", "Whipped Topping", "Dairy", ["tub", "container", "oz"], ["whipped topping"]),
  item("stevia-sweetener", "Stevia Sweetener", "Pantry", ["package", "box", "oz"], ["stevia sweetener"]),
  item("mini-marshmallows", "Mini Marshmallows", "Baking", ["package", "oz"], ["mini marshmallows"]),
  item("trail-mix", "Trail Mix", "Snacks", ["package", "oz"], ["trail mix"]),
  item("russet-potatoes", "Russet Potatoes", "Produce", ["bag", "each", "lb"], ["russet potatoes", "russett pot", "10lb russett pot"]),
  item("white-vinegar", "White Vinegar", "Pantry", ["bottle", "oz"], ["white vinegar"]),
  item("mustard", "Mustard", "Pantry", ["bottle", "jar", "oz"], ["mustard", "specialty mustard", "specialty mustards"]),
  item("valencia-oranges", "Valencia Oranges", "Produce", ["each", "bag", "lb"], ["valencia oranges"]),
  item("whole-wheat-spaghetti", "Whole Wheat Spaghetti", "Pantry", ["package", "oz", "lb"], ["whole wheat spaghetti", "wg ww thin spagh"]),
  item("toilet-paper", "Toilet Paper", "Household", ["package", "roll", "each"], ["toilet paper", "premium double roll bath", "prem dbl roll bath"]),
  item("rotisserie-chicken", "Rotisserie Chicken", "Deli", ["each", "package", "lb"], ["rotisserie chicken", "rotis chkn ssnd"]),
  item("chili-with-beans", "Chili with Beans", "Pantry", ["can", "container", "oz"], ["chili with beans", "chili", "hormel ht chili beans"]),
  item("bag-fee", "Bag Fee", "Service Fee", ["each"], ["bag fee", "bag fee non txbl"]),
  item("cider", "Cider", "Beverage", ["bottle", "pack", "oz"], ["cider", "dry cider", "4pk cn citz dry cid"]),
  item("white-beans", "White Beans", "Pantry", ["can", "package", "oz"], ["white beans", "wh beans", "hrd 100% wh bns"]),
  item("plantains", "Plantains", "Produce", ["each", "bunch", "lb"], ["plantains", "plantain"]),
  item("body-wash", "Body Wash", "Personal Care", ["bottle", "oz"], ["body wash", "deep moisture bw"]),
  item("bacon", "Bacon", "Meat", ["package", "oz", "lb"], ["bacon", "sliced bacon"]),
  item("whole-wheat-bread", "Whole Wheat Bread", "Bakery", ["loaf", "each", "package"], ["whole wheat bread", "whl eat bar", "wh bar", "wh? br?"] , "loaf"),
  item("french-green-beans", "French Green Beans", "Pantry", ["can", "package", "oz"], ["french green beans", "flrgs frnch can"]),
  item("microwave-popcorn", "Microwave Popcorn", "Snacks", ["box", "package", "oz"], ["microwave popcorn", "ff microwave popcorn"]),
  item("black-cherry-preserves", "Black Cherry Preserves", "Pantry", ["jar", "oz"], ["black cherry preserves", "blkchry", "polaner blkchry"]),
  item("chicken-tenders", "Chicken Tenders", "Meat", ["package", "oz", "lb"], ["chicken tenders", "iqf ckn tender"]),
  item("radishes", "Radishes", "Produce", ["bunch", "package", "lb"], ["radishes"]),
  item("mozzarella-sticks", "Mozzarella Sticks", "Frozen food", ["package", "each", "oz"], ["mozzarella sticks", "gf mozzarella stic", "gf mozzarella sticks", "fgf gf mozz stickspc", "fge gf mozz stickspc", "russo gf mozz stic"]),
  item("cheese-bites", "Cheese Bites", "Frozen food", ["package", "each", "oz"], ["cheese bites", "fgf 3 chse bites copc", "fge 3 chse bites crpc"]),
  item("pepperoni-bites", "Pepperoni Bites", "Frozen food", ["package", "each", "oz"], ["pepperoni bites", "fgf pepperoni bitepc", "fge pepperoni bitepc"]),
  item("hot-cocoa-mix", "Hot Cocoa Mix", "Beverage", ["box", "package", "oz"], ["hot cocoa mix", "sw miss hc nsa"]),
  item("granola-bars", "Granola Bars", "Pantry", ["box", "package", "each"], ["granola bars", "granola bar", "nv grn bar s pb", "nv grn sltd cream cpc", "nv gran sltd cream cpc"]),
  item("toasted-crunch-cereal", "Toasted Crunch Cereal", "Pantry", ["box", "package", "oz"], ["toasted crunch cereal", "gm ctnn tst crnch"]),
  item("golden-graham-cereal", "Golden Graham Cereal", "Pantry", ["box", "package", "oz"], ["golden graham cereal", "gm golden grahms tbr"]),
  item("honey-nut-cereal", "Honey Nut Cereal", "Pantry", ["box", "package", "oz"], ["honey nut cereal", "gm hny nut cheer lpc"]),
  item("peanut-butter-cereal", "Peanut Butter Cereal", "Pantry", ["box", "package", "oz"], ["peanut butter cereal", "gm reeses pb pffs"]),
  item("clementines", "Clementines", "Produce", ["box", "bag", "each"], ["clementines", "cleh imported box", "halo clems"]),
  item("baby-wipes", "Baby Wipes", "Household", ["package", "box", "each"], ["baby wipes", "sr bby wipe scnt"]),
  item("paper-bowls", "Paper Bowls", "Household", ["package", "each"], ["paper bowls", "dxe bowls", "10 oz bowls"]),
  item("maple-syrup", "Maple Syrup", "Pantry", ["bottle", "oz"], ["maple syrup", "spring tr pure map"]),
  item("flour", "Flour", "Pantry", ["bag", "package", "lb"], ["flour", "plain flour", "mayflower", "mayflower 2lb"], "bag"),
];

// Additional everyday options make manual review useful even when a receipt
// contains an item not present in the benchmark set.
const everydayCatalogItems: GroceryCatalogItem[] = [
  item("avocados", "Avocados", "Produce", ["each", "bag", "lb"], ["avocados", "avocado"]),
  item("grapes", "Grapes", "Produce", ["package", "bunch", "lb"], ["grapes", "green grapes", "red grapes"]),
  item("watermelon", "Watermelon", "Produce", ["each", "package", "lb"], ["watermelon"]),
  item("raspberries", "Raspberries", "Produce", ["package", "oz"], ["raspberries", "raspberry"]),
  item("blackberries", "Blackberries", "Produce", ["package", "oz"], ["blackberries", "blackberry"]),
  item("plums", "Plums", "Produce", ["each", "package", "lb"], ["plums", "plum"]),
  item("nectarines", "Nectarines", "Produce", ["each", "package", "lb"], ["nectarines", "nectarine"]),
  item("kiwi", "Kiwi", "Produce", ["each", "package", "lb"], ["kiwi", "kiwifruit"]),
  item("mangoes", "Mangoes", "Produce", ["each", "package", "lb"], ["mangoes", "mango"]),
  item("limes", "Limes", "Produce", ["each", "bag", "lb"], ["limes", "lime"]),
  item("garlic", "Garlic", "Produce", ["each", "bulb", "package"], ["garlic", "garlic bulb"]),
  item("ginger", "Ginger", "Produce", ["each", "package", "lb"], ["ginger", "fresh ginger"]),
  item("celery", "Celery", "Produce", ["bunch", "package", "each"], ["celery", "celery stalks"]),
  item("zucchini", "Zucchini", "Produce", ["each", "package", "lb"], ["zucchini", "courgette"]),
  item("cabbage", "Cabbage", "Produce", ["each", "head", "lb"], ["cabbage"]),
  item("kale", "Kale", "Produce", ["bunch", "package", "oz"], ["kale", "curly kale"]),
  item("asparagus", "Asparagus", "Produce", ["bunch", "package", "lb"], ["asparagus"]),
  item("cauliflower", "Cauliflower", "Produce", ["each", "package", "lb"], ["cauliflower"]),
  item("beets", "Beets", "Produce", ["bunch", "package", "lb"], ["beets", "beet"]),
  item("parsley", "Parsley", "Produce", ["bunch", "package"], ["parsley"]),
  item("sour-cream", "Sour Cream", "Dairy", ["container", "package", "oz"], ["sour cream"]),
  item("cottage-cheese", "Cottage Cheese", "Dairy", ["container", "package", "oz"], ["cottage cheese"]),
  item("shredded-cheese", "Shredded Cheese", "Dairy", ["package", "oz"], ["shredded cheese"]),
  item("parmesan-cheese", "Parmesan Cheese", "Dairy", ["package", "container", "oz"], ["parmesan cheese", "parmesan"]),
  item("mozzarella-cheese", "Mozzarella Cheese", "Dairy", ["package", "oz", "lb"], ["mozzarella cheese", "mozzarella"]),
  item("heavy-cream", "Heavy Cream", "Dairy", ["carton", "pint", "oz"], ["heavy cream", "whipping cream"]),
  item("ground-turkey", "Ground Turkey", "Meat", ["package", "lb", "oz"], ["ground turkey"]),
  item("pork-chops", "Pork Chops", "Meat", ["package", "lb", "each"], ["pork chops", "pork chop"]),
  item("ham", "Ham", "Meat", ["package", "lb", "oz"], ["ham"]),
  item("turkey", "Turkey", "Meat", ["package", "lb", "each"], ["turkey"]),
  item("shrimp", "Shrimp", "Protein", ["package", "lb", "oz"], ["shrimp", "prawns"]),
  item("cod", "Cod", "Protein", ["package", "lb", "each"], ["cod", "cod fillet"]),
  item("tempeh", "Tempeh", "Protein", ["package", "oz"], ["tempeh"]),
  item("bagels", "Bagels", "Bakery", ["package", "each"], ["bagels", "bagel"]),
  item("english-muffins", "English Muffins", "Bakery", ["package", "each"], ["english muffins", "english muffin"]),
  item("sandwich-rolls", "Sandwich Rolls", "Bakery", ["package", "each"], ["sandwich rolls", "rolls", "buns"]),
  item("sugar", "Sugar", "Baking", ["bag", "package", "lb"], ["sugar", "granulated sugar"]),
  item("brown-sugar", "Brown Sugar", "Baking", ["bag", "package", "lb"], ["brown sugar"]),
  item("baking-soda", "Baking Soda", "Baking", ["box", "package", "oz"], ["baking soda"]),
  item("baking-powder", "Baking Powder", "Baking", ["can", "package", "oz"], ["baking powder"]),
  item("yeast", "Yeast", "Baking", ["package", "jar", "oz"], ["yeast", "dry yeast"]),
  item("rice", "Rice", "Pantry", ["bag", "package", "lb"], ["rice", "white rice"]),
  item("brown-rice", "Brown Rice", "Pantry", ["bag", "package", "lb"], ["brown rice"]),
  item("quinoa", "Quinoa", "Pantry", ["bag", "package", "oz"], ["quinoa"]),
  item("couscous", "Couscous", "Pantry", ["box", "package", "oz"], ["couscous"]),
  item("tomato-paste", "Tomato Paste", "Pantry", ["can", "tube", "oz"], ["tomato paste"]),
  item("canned-tomatoes", "Canned Tomatoes", "Pantry", ["can", "package", "oz"], ["canned tomatoes", "diced tomatoes"]),
  item("salsa", "Salsa", "Pantry", ["jar", "container", "oz"], ["salsa"]),
  item("taco-shells", "Taco Shells", "Pantry", ["box", "package", "each"], ["taco shells", "taco shell"]),
  item("flour-tortillas", "Flour Tortillas", "Bakery", ["package", "each", "oz"], ["flour tortillas"]),
  item("broth", "Broth", "Pantry", ["carton", "can", "oz"], ["broth", "chicken broth", "vegetable broth"]),
  item("coconut-milk", "Coconut Milk", "Pantry", ["can", "carton", "oz"], ["coconut milk"]),
  item("jam", "Jam", "Pantry", ["jar", "package", "oz"], ["jam", "fruit spread"]),
  item("honey", "Honey", "Pantry", ["bottle", "jar", "oz"], ["honey"]),
  item("salt", "Salt", "Pantry", ["container", "package", "oz"], ["salt", "table salt"]),
  item("black-pepper", "Black Pepper", "Pantry", ["container", "package", "oz"], ["black pepper", "pepper"]),
  item("cinnamon", "Cinnamon", "Baking", ["container", "package", "oz"], ["cinnamon"]),
  item("sparkling-water", "Sparkling Water", "Beverage", ["bottle", "pack", "oz"], ["sparkling water", "seltzer"]),
  item("lemonade", "Lemonade", "Beverage", ["bottle", "carton", "oz"], ["lemonade"]),
  item("sports-drink", "Sports Drink", "Beverage", ["bottle", "pack", "oz"], ["sports drink"]),
  item("iced-tea", "Iced Tea", "Beverage", ["bottle", "carton", "oz"], ["iced tea"]),
  item("frozen-vegetables", "Frozen Vegetables", "Frozen food", ["package", "bag", "oz"], ["frozen vegetables", "frozen vegetable"]),
  item("frozen-fruit", "Frozen Fruit", "Frozen food", ["package", "bag", "oz"], ["frozen fruit"]),
  item("ice-cream", "Ice Cream", "Frozen food", ["container", "package", "oz"], ["ice cream"]),
  item("frozen-fries", "Frozen Fries", "Frozen food", ["package", "bag", "oz"], ["frozen fries", "french fries"]),
  item("frozen-waffles", "Frozen Waffles", "Frozen food", ["box", "package", "each"], ["frozen waffles", "waffles"]),
  item("paper-towels", "Paper Towels", "Household", ["roll", "package", "each"], ["paper towels"]),
  item("napkins", "Napkins", "Household", ["package", "box", "each"], ["napkins"]),
  item("food-storage-bags", "Food Storage Bags", "Household", ["box", "package", "each"], ["food storage bags", "storage bags"]),
  item("plastic-wrap", "Plastic Wrap", "Household", ["roll", "package"], ["plastic wrap", "cling wrap"]),
  item("laundry-detergent", "Laundry Detergent", "Household", ["bottle", "container", "oz"], ["laundry detergent"]),
  item("fabric-softener", "Fabric Softener", "Household", ["bottle", "container", "oz"], ["fabric softener"]),
  item("all-purpose-cleaner", "All-Purpose Cleaner", "Household", ["bottle", "container", "oz"], ["all purpose cleaner", "all-purpose cleaner"]),
  item("sponges", "Sponges", "Household", ["package", "each"], ["sponges", "sponge"]),
  item("hand-soap", "Hand Soap", "Household", ["bottle", "bar", "oz"], ["hand soap"]),
  item("tissues", "Tissues", "Household", ["box", "package"], ["tissues", "facial tissues"]),
  item("paper-plates", "Paper Plates", "Household", ["package", "each"], ["paper plates"]),
  item("shampoo", "Shampoo", "Personal Care", ["bottle", "oz"], ["shampoo"]),
  item("conditioner", "Conditioner", "Personal Care", ["bottle", "oz"], ["conditioner"]),
  item("toothpaste", "Toothpaste", "Personal Care", ["tube", "oz"], ["toothpaste"]),
  item("toothbrush", "Toothbrush", "Personal Care", ["each", "package"], ["toothbrush"]),
  item("deodorant", "Deodorant", "Personal Care", ["stick", "package", "oz"], ["deodorant"]),
];

export const benchmarkGroceryCatalog = [
  ...benchmarkGroceryCatalogBase,
  ...recoveredCatalogItems,
  ...everydayCatalogItems,
] satisfies GroceryCatalogItem[];

// These IDs came from the prior local-storage snapshot. They are ignored on
// load so the canonical entries above replace duplicate or malformed copies.
export const legacyCatalogIdRedirects: Record<string, string | null> = {
  "custom-bologna": "bologna",
  "custom-deluxe-shells-ghdr": "shells-and-cheese",
  "custom-farfale-boy-tie": "bow-tie-pasta",
  "custom-cream-cheese-cheddar-crackers": "cheese-and-crackers",
  "custom-grill-spray": "cooking-spray",
  "custom-american-white-singles": "american-cheese-slices",
  "custom-electrolyte-e-water": "electrolyte-water",
  "custom-diced-tomato-habanero": "diced-tomatoes-peppers",
  "custom-granola-bar-cinnamon": "cinnamon-granola-bars",
  "custom-farfalle-boy-tie": "bow-tie-pasta",
  "custom-amercrn-white-singles": "american-cheese-slices",
  "custom-deluxe-shells-cheddar": "shells-and-cheese",
  "custom-dicd-tomato-habanero": "diced-tomatoes-peppers",
  "custom-medium-roast-iced": "medium-roast-coffee",
  "custom-chipotle-peppers": "chipotle-peppers",
  "custom-vegan-style-shreds": "vegan-cheese-shreds",
  "custom-dried-chili-pepper": "dried-chili-peppers",
  "custom-coconutcashbricrisps": "coconut-crisps",
  "custom-canola-oil": "canola-oil",
  "custom-kalamata-olives": "kalamata-olives",
  "custom-organic-grains": "whole-grains",
  "custom-portabella-mushrs": "portobello-mushrooms",
  "custom-meatless-meatballs": "meatless-meatballs",
  "custom-pure-vanilla": "vanilla-extract",
  "custom-creamy-peanut-btr": "peanut-butter",
  "custom-large-eco-bags": "trash-bags",
  "custom-dried-cranberries": "dried-cranberries",
  "custom-dark-choc-assort": "dark-chocolate",
  "custom-fat-free-half": "half-and-half",
  "custom-egg-rolls": "egg-rolls",
  "custom-navel-oranges": "navel-oranges",
  "custom-mixed-squash": "mixed-squash",
  "custom-gummi-bears-worms": "gummy-candy",
  "custom-g-bearse-hppy-cola": "gummy-candy",
  "custom-lean-sandwich": "prepared-sandwich",
  "custom-moo-tubes": "yogurt-tubes",
  "custom-italian-sausage": "italian-sausage",
  "custom-lt-spirals-string": "string-cheese",
  "custom-ham-or-turkey-tub": "deli-meat",
  "custom-nfc-oj-in-carafe": "orange-juice",
  "custom-whipped-topping": "whipped-topping",
  "custom-stevia-sweetener": "stevia-sweetener",
  "custom-mini-marshmallows": "mini-marshmallows",
  "custom-g-bears-hppy-cola": "gummy-candy",
  "custom-trail-mix": "trail-mix",
  "custom-russett-pot": "russet-potatoes",
  "custom-white-vinegar": "white-vinegar",
  "custom-specialty-mustards": "mustard",
  "custom-valencia-oranges": "valencia-oranges",
  "custom-wg-ww-thin-spagh": "whole-wheat-spaghetti",
  "custom-prem-dbl-roll-bath": "toilet-paper",
  "custom-lb": null,
  "custom-rotis-chkn-ssnd": "rotisserie-chicken",
  "custom-hormel-ht-chili-beans": "chili-with-beans",
  "custom-bag-fee-non-txbl": "bag-fee",
  "custom-dry-cider": "cider",
  "custom-wh-beans": "white-beans",
  "custom-plantain": "plantains",
  "custom-mayflower": "flour",
  "custom-deep-moisture-bw": "body-wash",
  "custom-sliced-bacon": "bacon",
  "custom-large-wh-bar": "eggs",
  "custom-yellow": "onions",
  "custom-whl-eat-bar": "whole-wheat-bread",
  "custom-plain": "flour",
  "custom-wh-bar": "whole-wheat-bread",
  "custom-flrgs-frnch-can": "french-green-beans",
  "custom-ff-microwave-popcorn": "microwave-popcorn",
  "custom-blkchry": "black-cherry-preserves",
  "custom-crnchy-peanut-buttr": "peanut-butter",
  "custom-iqf-ckn-tender": "chicken-tenders",
  "custom-radishes": "radishes",
  "custom-crnchy-peanut-butr": "peanut-butter",
  "custom-fgf-gf-mozzarella-stickspc": "mozzarella-sticks",
  "custom-fgf-chse-bites-copc": "cheese-bites",
  "custom-fgf-pepperoni-bitepc": "pepperoni-bites",
  "custom-gf-mozzarella-stic": "mozzarella-sticks",
  "custom-fge-gf-mozzarella-stickspc": "mozzarella-sticks",
  "custom-fge-chse-bites-crpc": "cheese-bites",
  "custom-fge-pepperoni-bitepc": "pepperoni-bites",
  "custom-sw-miss-hc-nsa": "hot-cocoa-mix",
  "custom-nv-grn-bar-s-pb": "granola-bars",
  "custom-nv-grn-sltd-cream-cpc": "granola-bars",
  "custom-nv-gran-sltd-cream-cpc": "granola-bars",
  "custom-gm-ctnn-tst-crnch": "toasted-crunch-cereal",
  "custom-gm-golden-grahms-tbr": "golden-graham-cereal",
  "custom-gm-hny-nut-cheer-lpc": "honey-nut-cereal",
  "custom-gm-reeses-pb-pffs": "peanut-butter-cereal",
  "custom-banana-other": "bananas",
  "custom-cleh-imported-box": "clementines",
  "custom-sr-bby-wipe-scnt": "baby-wipes",
  "custom-dxe-bowls": "paper-bowls",
  "custom-everyday-spoon": "spoons",
  "custom-pure-life-watp": "water",
  "custom-spring-tr-pure-map": "maple-syrup",
  "custom-banana-bag": "bananas",
  "custom-xtratuff-white-trsh": "trash-bags",
};

export const groceryCategories = [
  "Grocery",
  "Produce",
  "Pantry",
  "Beverage",
  "Dairy",
  "Protein",
  "Bakery",
  "Frozen food",
  "Household",
  "Miscellaneous",
  "Deli",
  "Meat",
  "Snacks",
  "Baking",
  "Prepared Food",
  "Personal Care",
  "Service Fee",
];

function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/\b\d+(?:\.\d+)?\s*(?:oz|lb|pk|pc|ct|gal|gall|pack)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreAlias(searchText: string, alias: string) {
  const normalizedAlias = normalizeSearchText(alias);
  if (!normalizedAlias) return 0;
  if (searchText.includes(normalizedAlias)) return 100 + normalizedAlias.length;

  const searchTokens = new Set(searchText.split(" "));
  const aliasTokens = normalizedAlias.split(" ").filter((token) => token.length > 2);
  if (!aliasTokens.length || !aliasTokens.every((token) => searchTokens.has(token))) return 0;
  return 50 + aliasTokens.length * 10 + normalizedAlias.length / 100;
}

export function matchCatalogItem(rawText: string, description: string | null, catalogItems: readonly GroceryCatalogItem[] = benchmarkGroceryCatalog) {
  const searchText = normalizeSearchText(`${rawText} ${description ?? ""}`);
  if (!searchText) return null;

  let best: { item: GroceryCatalogItem; score: number } | null = null;
  for (const catalogItem of catalogItems) {
    for (const alias of catalogItem.aliases) {
      const score = scoreAlias(searchText, alias);
      if (!best || score > best.score) best = { item: catalogItem, score };
    }
  }

  return best && best.score >= 70 ? best.item : null;
}

export function catalogifyReceiptLines<T extends { rawText: string; description: string | null; category: string | null; unit: string | null }>(lines: T[], catalogItems: readonly GroceryCatalogItem[] = benchmarkGroceryCatalog) {
  return lines.map((line) => {
    const catalogItem = matchCatalogItem(line.rawText, line.description, catalogItems);
    if (!catalogItem) return line;
    const normalizedUnit = line.unit?.trim().toLowerCase();
    const unit = normalizedUnit && catalogItem.units.some((catalogUnit) => catalogUnit.toLowerCase() === normalizedUnit)
      ? line.unit
      : catalogItem.defaultUnit || null;
    return {
      ...line,
      description: catalogItem.name,
      category: catalogItem.category,
      unit,
    };
  });
}

export function findCatalogItem(id: string | null | undefined, catalogItems: readonly GroceryCatalogItem[] = benchmarkGroceryCatalog) {
  return id ? catalogItems.find((catalogItem) => catalogItem.id === id) ?? null : null;
}

const ignoredSuggestionTokens = new Set(["a", "c", "f", "n", "o", "t", "w", "x", "id", "pc", "ct", "pk", "pack", "cn", "case", "cd", "dme", "flgrs", "fs", "hrd", "jnkls", "polaner", "rus", "wndrbr"]);
const brandSuggestionTokens = new Set([
  "aldi", "amys", "bertolli", "breyers", "chobani", "coke", "clancys", "feel", "foods", "goya", "gilliam", "good",
  "helman", "naked", "one", "oreo", "russo", "shoprite", "sonoma", "srbb", "srpb", "tenderin", "udis", "wpo",
]);
const suggestionReplacements: Record<string, string> = {
  amercn: "american",
  bns: "beans",
  bologn: "bologna",
  br: "bar",
  che: "cheese",
  chdr: "cheddar",
  chv: "cheddar",
  citz: "cider",
  cit: "cider",
  cid: "cider",
  cinn: "cinnamon",
  crm: "cream",
  crkr: "crackers",
  dico: "diced",
  dlx: "deluxe",
  drsng: "dressing",
  electroly: "electrolyte",
  grnla: "granola",
  haban: "habanero",
  hrt: "heart",
  hts: "hearts",
  mayo: "mayonnaise",
  micro: "microwave",
  mozz: "mozzarella",
  mushrms: "mushrooms",
  pepp: "pepper",
  pnt: "peanut",
  pop: "popcorn",
  tom: "tomato",
  tomto: "tomato",
  veg: "vegetable",
  shls: "shells",
  sngl: "singles",
  wht: "white",
  wtr: "water",
};

function titleCase(value: string) {
  return value.replace(/\b\w/g, (character) => character.toUpperCase());
}

function suggestionUnits(rawText: string, description: string | null) {
  const source = `${rawText} ${description ?? ""}`.toLowerCase();
  if (/\b\d*\s*(?:pk|pack)\b/.test(source)) return { units: ["pack", "each", "oz"], defaultUnit: "pack" };
  if (/\b(?:cn|can|cans)\b/.test(source)) return { units: ["can", "pack", "oz"], defaultUnit: "can" };
  if (/\blb\b/.test(source)) return { units: ["lb", "package", "oz"], defaultUnit: "lb" };
  if (/\boz\b/.test(source)) return { units: ["oz", "package", "lb"], defaultUnit: "oz" };
  return { units: ["package", "each", "oz", "lb"], defaultUnit: "package" };
}

export function suggestCatalogItemFromLine(line: { rawText: string; description: string | null; category?: string | null }) {
  const source = line.description || line.rawText;
  const tokens = normalizeSearchText(source)
    .split(" ")
    .filter((token) => token && !/^\d+$/.test(token) && !ignoredSuggestionTokens.has(token) && !brandSuggestionTokens.has(token))
    .map((token) => suggestionReplacements[token] ?? token);
  const uniqueTokens = [...new Set(tokens)];
  if (!uniqueTokens.length) return null;

  let name = uniqueTokens.join(" ");
  if (uniqueTokens.includes("cider") && uniqueTokens.includes("dry")) name = "dry cider";
  if (uniqueTokens.includes("cider") && uniqueTokens.length === 1) name = "cider";

  const units = suggestionUnits(line.rawText, line.description);
  const category = line.category ? titleCase(line.category) : "Grocery";
  return {
    id: `custom-${normalizeSearchText(name).replace(/\s+/g, "-") || "item"}`,
    name: titleCase(name),
    category,
    units: units.units,
    defaultUnit: units.defaultUnit,
    aliases: [...new Set([name, line.rawText, line.description].filter((value): value is string => Boolean(value)))],
  } satisfies GroceryCatalogItem;
}
