var initial = document.querySelector("#initial-price");
var stocks = document.querySelector("#stocks-quantity");
var current = document.querySelector("#current-price");
var calculateBtn = document.querySelector("#calc-btn");
var outputBox = document.querySelector("#output-box");
var output= document.querySelector(".output")

calculateBtn.addEventListener("click",function (){
    var initialPrice=initial.value;
    var quantity=stocks.value;
    var currentPrice=current.value
    output.style.display="block";
    findProfitOrLoss(initialPrice,quantity,currentPrice)
});



function findProfitOrLoss(initialPrice,quantity,currentPrice)  {
  if(!initialPrice||!quantity||!currentPrice){
      showOutput("👿👿👿Please fill all the details👆👆👆👆")
      output.style["background-color"] = " rgb(0, 38, 255)";
  }
 else{
     if (initialPrice > currentPrice){

            var loss=quantity*(initialPrice-currentPrice);
            var lossPercent=(loss/(initialPrice*quantity))*100;
            
            output.style["background-color"] = "red";

          showOutput(`The loss amount is ${loss} and the loss percentage is ${lossPercent}% 😫😫😫😫`);
            }

            else if (currentPrice>initialPrice){

            var profit= quantity *(currentPrice-initialPrice)
            var profitPercent=(profit/(initialPrice*quantity))*100;
            
             output.style["background-color"] = "green";
            showOutput(`😲😲😲😲The Profit amount is ${profit} and the profit percentage is ${profitPercent}%`);
           
            }

            
        else{
            outputBox.innerHTML="No profit No loss..Don't worry Be happy !!!";
            output.style["background-color"] = "purple";
        }
    }
}

function showOutput(message){
    outputBox.innerHTML=message;
}


