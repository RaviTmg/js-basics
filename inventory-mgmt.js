
const products = [
    {
        name: "Macbook",
        price: 100,
        category: "laptop",
        quantity: 10,
    },
    {
        name: "IPhone",
        price: 50,
        category: "Phone",
        quantity: 5,
    },
];

function purchaseProduct (productName, numberPurchased) {
    const productToPurchase = products.find((product) =>{
        return product.name === productName;
    });
    if (!productToPurchase) {
        return "Product not found Bro";
    }
    const newQuantity = productToPurchase.quantity - numberPurchased;
    if (newQuantity < 0) {
        return "We dont have enough on stock Bro";
    }
    productToPurchase.quantity = newQuantity;
    return "Product purchased successfully Bro";
}

const message = purchaseProduct("Macbook", 5);
console.log(message);
console.log(products);

const message2 = purchaseProduct("IPhone", 10);
console.log(message2)