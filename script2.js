"use strict";

    let result = function (a = 45, b = 45) {
      if (a + b <= 180) {
        let res = 180 - (a + b);
        return res;
      }
    };
    
    console.log(result(45, 90));
    console.log(result(30, 30));
    console.log(result(75, 25));
    