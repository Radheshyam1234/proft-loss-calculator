var initial = document.querySelector("#initial-price");
var stocks = document.querySelector("#stocks-quantity");
var current = document.querySelector("#current-price");
var calculateBtn = document.querySelector("#calc-btn");
var outputBox = document.querySelector("#output-box");
var body=document.querySelector("body")
//var output= document.querySelector(".output")

calculateBtn.addEventListener("click", ()=>{
    const initialPrice=Number(initial.value);
    const quantity=Number(stocks.value);
    const currentPrice=Number(current.value)
    outputBox.style.display="block";
    findProfitOrLoss(initialPrice,quantity,currentPrice)
});



function findProfitOrLoss(initialPrice,quantity,currentPrice)  {

 if(!initialPrice||!quantity||!currentPrice){
      showOutput("👿👿👿Please fill all the details👆👆👆👆")
      outputBox.style["background-color"] = " rgb(0, 38, 255)";
      body.style["background-color"]="#f1c40f"
  }
  


 else if (initialPrice > currentPrice){
   
    var loss=quantity*(initialPrice-currentPrice);
                var lossPercent=(loss/(initialPrice*quantity))*100;
                
                outputBox.style["background-color"] = "red";
    
              showOutput(`The loss amount is ${loss} and the loss percentage is ${lossPercent}% 😫😫😫😫`);
              body.style["background-color"]="#ff3f34"
              

}

else if (currentPrice > initialPrice){
   

    var profit= quantity *(currentPrice-initialPrice)
            var profitPercent=(profit/(initialPrice*quantity))*100;
            
             outputBox.style["background-color"] = "green";
            showOutput(`😲😲😲😲The Profit amount is ${profit} and the profit percentage is ${profitPercent}%`);

            body.style["background-color"]="#27ae60"

}
else {
    outputBox.innerHTML="No profit No loss..Don't worry Be happy !!!";
          outputBox.style["background-color"] = "purple";
          body.style["background-color"]="#ecf0f1"
}


 
}

function showOutput(message){
    outputBox.innerHTML=message;
}

