"use strict";

let arr = [125, 35, 20];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i] + " even");
  } else {
    console.log(arr[i] + " odd");
  }
}


// let result = function (e) {
//   if (e % 2 === 0) {
//     console.log(e + " even");
//   } else {
//     console.log(e + " odd");
//   }
// };

// result(125);
// result(35);
// result(20);