const priceTotal =() => {
}
const logReceipt = (...jeffsMenu) => { 
  let subTotal = 0;
  jeffsMenu.forEach(jeffsMenu => {
    console.log(`${jeffsMenu.descr} - ${jeffsMenu.price}`)
    subTotal += jeffsMenu.price;
  })
  let taxes = subTotal * 0.10;
  let total = taxes + subTotal;
  console.log(`Subtotal = ${subTotal}\nTaxes = ${taxes.toFixed(2)}\nTotal = ${total.toFixed(2)}`)
};

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);


// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// SubTotal - $10.97
// Tax = $1.10
// Total = $12.07

// A(n) 'this' allows you to call the function above where the function is defined.

// //
// const priceTotal =() => {
//   }
// const logReceipt =(...jeffsMenu) => {
// let subTotal = 0; 
// jeffsMenu.forEach(jeffsMenu => {
//   console.log(`${jeffsMenu.descr} - ${jeffsMenu.price}`)
//   subTotal += jeffsMenu.price;
// })
// let taxes = subTotal * 0.20; 
// let total = taxes + subTotal; 
// console.log(`Subtotal = ${subTotal}\nTaxes = ${taxes.toFixed(2)}\nTotal = ${total.toFixed(2)}`)
// };
// const withTotal = function (price) {
//   totalPrice += price
// }
// // jeffsMenu.forEach((jeffsMenu)=>{
// //   console.log(jeffsMenu.descr)
// //   withTotal(jeffsMenu.price)
// //   totalPrice += jeffsMenu.price
// //   console.log(jeffsMenu.price)
// // })
// //console.log(totalPrice/2)}

// // Check
// // const logReceipt = function (...jeffsMenu) {
// //   let totalTaxPrice = 0; 
  
// //   const withTotal = function (price) {
// //     totalTaxPrice += price
// //   }
// //   jeffsMenu.forEach((jeffsMenu)=>{
// //     console.log(jeffsMenu.descr)
// //     withTotal(jeffsMenu.price)
// //     totalTaxPrice += jeffsMenu.price
// //     console.log(jeffsMenu.price)
// //   })
  
// //   console.log(totalTaxPrice/2 * .09)
// //   const TaxTotal = totalTaxPrice + TotalPrice 
// //   console.log(TaxTotal)
// //   }
  
// //   // Check
// //   logReceipt(
// //     { descr: 'Burrito', price: 5.99 },
// //     { descr: 'Chips & Salsa', price: 2.99 },
// //     { descr: 'Sprite', price: 1.99 }
// //   );
