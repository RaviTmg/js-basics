
function applyDiscount (order) {
    const discountAmount = order.orderTotal * order.discountPercentage;
    const grossAmount = order.orderTotal - discountAmount;
    return {
        orderTotal: order.orderTotal,
        discountPercentage: order.discountPercentage,
        grossAmount: grossAmount,
    };
}

const sampleOrder = {
    orderTotal: 100,
    discountPercentage: 0.1
}
const updatedOrder = applyDiscount(sampleOrder);
console.log(sampleOrder);
console.log(updatedOrder);
