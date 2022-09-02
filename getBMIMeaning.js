const { template } = require('@babel/core')


function calculateBMI(weight, height) {
  return weight/(height*height)
}

function getBMIMeaning(weight, height) {
  
  if(calculateBMI(weight,height) < 18.5){
      return "Underweight"
  } else if(calculateBMI(weight,height) >= 18.5 && calculateBMI(weight,height) <= 24.9){
     return "Normal weight"
  } else if(calculateBMI(weight,height)> 25.0){
    return "Overweight"
  }
}

console.log(calculateBMI(69, 1.68))
console.log(getBMIMeaning(65, 1.8))
console.log(getBMIMeaning(80, 1.7))
console.log(getBMIMeaning(44, 1.6))
module.exports = getBMIMeaning
