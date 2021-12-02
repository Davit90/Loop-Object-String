"use strict";

let myFunction = function (x) {
  let y = x.toString().split("");
  let str = y[y.length - 1];
  if (str > 0) {
    y.unshift(str);
    y.pop();
    console.log(y);
  } else {
    console.log(y);
  }
};

myFunction(367);
myFunction(1002);
myFunction(250);
myFunction(8);