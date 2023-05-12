function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }

}

function listItems(deliveryOrders) {
  var items = ''
  var lastIndex = deliveryOrders.length -1
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i] === deliveryOrders[lastIndex]) {
      items += deliveryOrders[i].item
    } else {
      items += deliveryOrders[i].item
      items += ', '
    }
  }
  return items
}

function searchOrder (deliveryOrders, item) { 
  for (var i = 0; i < deliveryOrders.length; i ++) {
    if (deliveryOrders[i].item.includes(item)) {
      return true
    }
  } 
  return false;
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}