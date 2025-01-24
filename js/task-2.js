function getShippingMessage(country, price, deliveryFee) {

    let totalPrice = parseInt(price) + parseInt(deliveryFee);

    country = String(country);

    let message = `Shipping to ${country} will cost ${totalPrice} credits`;
    
    return message;
}
