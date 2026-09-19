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
export const benchmarkGroceryCatalog: GroceryCatalogItem[] = [
  item("lentils", "Lentils", "Pantry", ["package", "oz", "lb"], ["lentils", "lentil soup", "goya lentils", "hrd lentils dried"]),
  item("beans", "Beans", "Pantry", ["package", "oz", "lb"], ["black beans", "beans", "goya black beans", "pork & beans", "steam green beans"]),
  item("coke-cans", "Coke Cans", "Beverage", ["pack of 8 cans", "can", "oz"], ["8pk/7.5oz cn coke", "coke classic", "coke classic conto", "coke cans"], "pack of 8 cans"),
  item("bottle-deposit", "Bottle Deposit", "Miscellaneous", [], ["bottle deposit", "btl/can deposit"]),
  item("organic-grape-tomatoes", "Organic Grape Tomatoes", "Produce", ["package", "oz", "lb"], ["organic grape tomatoes", "grape tomatoes", "grape tomato", "org grape tomatoes"]),
  item("tomatoes", "Tomatoes", "Produce", ["each", "package", "lb"], ["tomatoes", "tomato", "red tomatoes on vine"]),
  item("cherry-tomatoes", "Cherry Tomatoes", "Produce", ["package", "oz", "lb"], ["cherry tomatoes", "cherub tomatoes", "cherry nw lrge 18l"]),
  item("apples", "Apples", "Produce", ["each", "bag", "lb"], ["apples", "gala apples", "granny smith apples"]),
  item("bananas", "Bananas", "Produce", ["each", "bunch", "lb"], ["bananas", "banana we", "bananas lrw"]),
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
  item("eggs", "Eggs", "Dairy", ["dozen", "half dozen", "each"], ["eggs", "large eggs", "large brown eggs", "egglbst lg white 1", "mp eggs"]),
  item("chicken", "Chicken", "Protein", ["package", "lb", "each"], ["chicken", "boneless chicken breast"]),
  item("chicken-sausage", "Chicken Sausage", "Protein", ["package", "link", "lb"], ["chicken sausage"]),
  item("beef", "Beef", "Protein", ["package", "lb", "each"], ["beef", "tom hot house beef", "rst beef jt gng"]),
  item("salmon", "Salmon", "Protein", ["package", "lb", "each"], ["salmon", "atlantic salm fillt"]),
  item("tuna", "Tuna", "Protein", ["can", "pack", "oz"], ["tuna", "tuna in water", "bb tuna solid wht", "sk tuna 4pk"]),
  item("tofu", "Tofu", "Protein", ["package", "oz"], ["tofu", "organic tofu"]),
  item("bread", "Bread", "Bakery", ["loaf", "each", "package"], ["bread", "french bread", "12 grain bread"]),
  item("flatbread", "Flatbread", "Bakery", ["package", "each"], ["flatbread", "artisan flatbread"]),
  item("tortillas", "Tortillas", "Bakery", ["package", "each", "oz"], ["tortillas", "corn tortillas"]),
  item("pasta", "Pasta", "Pantry", ["package", "oz", "lb"], ["pasta", "dry pasta", "filled pasta", "macaroni & cheese", "ron rotelle"]),
  item("pasta-sauce", "Pasta Sauce", "Pantry", ["jar", "package", "oz"], ["pasta sauce", "tomato sauce", "alfredo sauce", "marinara sauce"]),
  item("soup", "Soup", "Pantry", ["can", "container", "oz"], ["soup", "lentil soup", "amys soup ls len", "prog clcs beef broth"]),
  item("oatmeal", "Oatmeal", "Pantry", ["package", "oz", "lb"], ["oatmeal", "gv oatmeal", "quick oats", "dme quick oats 18z", "crispy oats"]),
  item("cereal", "Cereal", "Pantry", ["box", "package", "oz"], ["cereal", "cheerios"]),
  item("coffee", "Coffee", "Beverage", ["bag", "can", "oz"], ["coffee", "coffee c", "srbb orig coffee c"]),
  item("tea", "Tea", "Beverage", ["box", "package", "oz"], ["tea", "tetley tea british"]),
  item("fruit-cups-in-juice", "Fruit Cups in Juice", "Pantry", ["package", "each", "oz"], ["fruit cups - juice", "fruit cups in juice"], "package"),
  item("juice", "Juice", "Beverage", ["bottle", "carton", "oz"], ["juice", "cold pressed juice", "cranberry cocktail"]),
  item("water", "Water", "Beverage", ["bottle", "pack", "oz"], ["water", "pure life 24pk watpc", "aquafi 2pk"]),
  item("pizza", "Pizza", "Frozen food", ["each", "package"], ["pizza", "all nat pizzas"]),
  item("hummus", "Hummus", "Pantry", ["container", "package", "oz"], ["hummus", "organic hummus", "jsp h org hummus", "cdr hommus tahin"]),
  item("mayonnaise", "Mayonnaise", "Pantry", ["jar", "package", "oz"], ["mayonnaise", "helman mayonnaise", "mayo"]),
  item("dressing", "Dressing", "Pantry", ["bottle", "package", "oz"], ["dressing", "vinaigrette dressing"]),
  item("pickles", "Pickles", "Pantry", ["jar", "package", "oz"], ["pickles", "dill pickle chips"]),
  item("chips", "Chips", "Pantry", ["bag", "package", "oz"], ["chips", "clancy's chips"]),
  item("cookies", "Cookies", "Pantry", ["package", "box", "oz"], ["cookies", "cookie", "oreo cookie", "chocolate sandwich", "chips ahoy"]),
  item("crackers", "Crackers", "Pantry", ["box", "package", "oz"], ["crackers"]),
  item("dish-detergent", "Dish Detergent", "Household", ["bottle", "package", "oz"], ["dish detergent", "dish soap"]),
  item("aluminum-foil", "Aluminum Foil", "Household", ["roll", "package"], ["aluminum foil"]),
  item("spoons", "Spoons", "Household", ["package", "each"], ["spoons", "srpb everydy spoon"]),
];

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
