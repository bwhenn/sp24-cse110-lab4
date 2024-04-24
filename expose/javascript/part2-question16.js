let statistics = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
};


for (const key in statistics) {
    if (key.charAt(0) == 'r' || statistics[key] % 2 == 1) {
        console.log(`${key}: ${statistics[key]}`);
    }
}


function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
  }
  
  function calculateSum(num1, num2) {
    let result = Number(num1) + Number(num2)
    return result
  }
  
  function init() {
    document.getElementById('printSum').addEventListener('click', printSum);
  }
  
  window.addEventListener('DOMContentLoaded', init);