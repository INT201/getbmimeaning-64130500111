const { template } = require('@babel/core')


function calculateBMI(weight, height) {
  return weight/(height*height)
}

function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height)
  if(BMI < 18.5){
      return "Underweight"
  } else if(BMI >= 18.5 && BMI <= 24.9){
     return "Normal weight"
  } else if(BMI > 25.0){
    return "Overweight"
  }
}

// console.log(calculateBMI(69, 1.68))
// console.log(getBMIMeaning(65, 1.8))
// console.log(getBMIMeaning(80, 1.7))
// console.log(getBMIMeaning(44, 1.6))
// calculateBMI(69, 1.68)
// getBMIMeaning(65, 1.8)
// getBMIMeaning(80, 1.)
// getBMIMeaning(44, 1.6)
module.exports = getBMIMeaning
