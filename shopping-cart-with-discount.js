
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

const coupons = [
    { code: "SALE", discount: 0.1 },
    { code: "DASHAIN", discount: 0.4 },
]

function calculateTotal (code) {
    const totalCost = cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.pricePerUnit * currentItem.quantity
    }, 0);
    const discountCoupon = coupons.find((coupon) => {
        return code === coupon.code;
    });
    if (!discountCoupon) {
        return "Invalid Coupon Code";
    }
    const discountAmount = totalCost * discountCoupon.discount;
    const netAmount = totalCost - discountAmount;
    return netAmount;
}

const totalAfterSale = calculateTotal("SALE");
console.log(totalAfterSale)
const totalAfterDashain = calculateTotal("DASHAIN");
console.log(totalAfterDashain)
const totalAfterInvalid = calculateTotal("HKJASJD");
console.log(totalAfterInvalid)
