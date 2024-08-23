
const products = [
    {
        name: "Macbook",
        price: 100,
        category: "laptop",
        quantity: 10,
        threshold: 5,
        replenishAmount: 10,
    },
    {
        name: "IPhone",
        price: 50,
        category: "Phone",
        quantity: 5,
        threshold: 1,
        replenishAmount: 5,
    },
];

function purchaseProduct (productName, numberPurchased) {
    const productToPurchase = products.find((product) =>{
        return product.name === productName;
    });
    if (!productToPurchase) {
        return "Product not found Bro";
    }
    const newQuantity = productToPurchase.quantity - numberPurchased; // 4 after purchase
    if (newQuantity < 0) {
        return "We dont have enough on stock Bro";
    }
    if (newQuantity <= productToPurchase.threshold) {
        productToPurchase.quantity 
        = newQuantity + productToPurchase.replenishAmount // 4+10 = 14
    }
    return "Product purchased successfully Bro";
}

const message = purchaseProduct("Macbook", 6);
console.log(message);
console.log(products);

const message2 = purchaseProduct("IPhone", 10);
console.log(message2)