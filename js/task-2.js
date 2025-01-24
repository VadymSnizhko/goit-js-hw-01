function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = parseInt(quantity) * parseInt(pricePerDroid);
    let message = `You ordered  ${quantity} droids worth ${totalPrice} credits!`;
    return message;
}