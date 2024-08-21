
const cartItems = [
    {
        productName: "Laptop",
        pricePerUnit: 50000,
        quantity: 5,
    },
    {
        productName: "Mouse",
        pricePerUnit: 1000,
        quantity: 10,
    }
];

function calculateTotalCostUsingForEach () {
    let totalCost = 0;
    cartItems.forEach(function (cartItem) {
        console.log(cartItem.productName);
        totalCost = totalCost + cartItem.pricePerUnit * cartItem.quantity;
    });
    /**
     * iteration 1: cartItem = laptop, 50000, 5; totalCost = 250000
     * iteration 2: cartitem = mouse, 1000, 10; 260000
     */
    console.log("The total cost of the cart items is: ", totalCost);
}
calculateTotalCostUsingForEach();

function calculateTotalCostUsingReduce () {
    const totalCost = cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.pricePerUnit * currentItem.quantity
    }, 0);
    /**
     * iteration 1: 
     * previousValue = 0, 
     * currentItem = {
     *      name: "Laptop",
     *      pricePerUnit: 50000,
     *      quantity: 5
     * }
     * returns 250000
     * 
     * iteration 2:
     * previousValue = 250000
     * currentItem = {
     *      name: "Mouse",
     *      pricePerUnit: 1000,
     *      quantity: 10
     * }
     * returns 260000
     * 
     * final value is the value returned in the last iteration
     * totalValue = 260000  
     */
    console.log("The total cost of the cart items is: ", totalCost);
}
calculateTotalCostUsingReduce();

function calculateTotalCostUsingForOf () {
    let totalCost = 0;
    for (const cartItem of cartItems) {
        totalCost = totalCost + cartItem.pricePerUnit * cartItem.quantity
    }
    console.log("The total cost of the cart items is: ", totalCost);
}
calculateTotalCostUsingForOf();
