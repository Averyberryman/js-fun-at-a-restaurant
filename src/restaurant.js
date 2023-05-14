function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, typeOfPizza) { 
  if (typeOfPizza.type === "lunch" && !restaurant.menus.lunch.some(item => item.name === typeOfPizza.name)) {
    restaurant.menus.lunch.push(typeOfPizza)
  }
  if (typeOfPizza.type === "breakfast" && !restaurant.menus.breakfast.some(item => item.name === typeOfPizza.name)) {
    restaurant.menus.breakfast.push(typeOfPizza)
  }
  if (typeOfPizza.type === "dinner" && !restaurant.menus.dinner.some(item => item.name === typeOfPizza.name)) {
    restaurant.menus.dinner.push(typeOfPizza)
}
}

function removeMenuItem(restaurant, itemName, menuType) {
  var menu = restaurant.menus[menuType];
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === itemName) {
      menu.splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }

  function checkForFood(restaurant, foodItem) {
   var index = restaurant.menus[foodItem.type];
   for (var i = 0; i < index.length; i++) {
    if (index[i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`
    }
   }
   return `Sorry, we aren't serving ${foodItem.name} today.`
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}