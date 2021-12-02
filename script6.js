"use strict";


let myFunc = function(x,y,z){
    if (x>0 && y>0 && z>0)
    {
           console.log("+");
    }
    else if (x<0 && y<0 && z<0)
            {
              console.log("-");
            }
            else if (x>0 && y<0 && z<0)
            {
              console.log("+");
            }
            else if (x<0 && y>0 && z<0)
            {
              console.log("+");
            }
            else if (x===0 || y===0 || z===0)
            {
              console.log("unsigned");
            }
            else
            {
              console.log("-");
            }
   }

   myFunc(-14,5,0)
   myFunc(-8,9,-6);
   myFunc(4,19,-2);