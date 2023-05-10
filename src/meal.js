function nameMenuItem(menuItemName) {
  return "Delicious" + " " + menuItemName;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients (toppings, ingredients) {
  if (!ingredients.includes(toppings)) {
    ingredients.push(toppings)
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(price) {
  (price *= .9)
  return price
}

function createRecipe(title, ingredients, type) {
 return {
  title: title,
  ingredients: ingredients,
  type: type
}
}




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


