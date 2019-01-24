module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here 
           return num1+num2;
      },
      multiply: function(num1, num2) {
           // add code here 
           return num1*num2;
      },
      square: function(num) {
           // add code here 
           return num*num;
      },
      random: function(num1, num2) {
           // add code here
           var math = require('math');
           return (math.floor(math.random()*num2))+num1;
      }
    }
};