document.getElementById("total-btn").addEventListener("click",function () {
    // income
  const incomeFlid= document.getElementById("incoum-total");
  const incomeValue=incomeFlid.value;
  const incomeNum=parseFloat(incomeValue);
//   food
  const foodFild= document.getElementById("food-cost-field");
  const foodValue=foodFild.value;
  const foodNum=parseFloat(foodValue);

//   rent
  const rentFlid= document.getElementById("rent-cost-field");
  const rentValue=rentFlid.value;
  const rentNum=parseFloat(rentValue);
// Clothes
  const clothesFlid= document.getElementById("clothes-cost-field");
  const clothesValue=clothesFlid.value;
  const clothesNum=parseFloat(clothesValue);
//   expenc total
const expanceTotal = foodNum+rentNum+clothesNum;
const balanceTotal=incomeNum-expanceTotal;
// expanceDisplay

const expanceDisplay= document.getElementById("expanse-total")
 expanceDisplay.innerText=expanceTotal;

//  balance
const balance= document.getElementById("balance")

if(incomeNum<=foodNum){
    balance.innerText="No Money"
    expanceDisplay.innerText="Nothing"
}
else if(incomeNum<=rentNum){
    balance.innerText="No Money"
    expanceDisplay.innerText="Nothing"
}
else if(incomeNum<=clothesNum){
    balance.innerText="No Money"
    expanceDisplay.innerText="Nothing"
}
else{
    balance.innerText=balanceTotal;
}
})