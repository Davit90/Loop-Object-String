"use strict";

let myFunc = function(a,b,c){
    let arr = [];
    arr.push(a,b,c);
    return arr.sort(function(a,b){
        return a-b;
    })
}

console.log(myFunc(45,26,78));
console.log(myFunc(-23,-456,0));