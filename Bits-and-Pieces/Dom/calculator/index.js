let operationContainer = document.querySelector(".operators");


let temp = ["AC", "&#8998;", "%", "/", "7", "8", "9", "*",
    "4","5","6","-","1","2","3","+","0","."," = "]

function createOperators() {
   
for (let i = 0; i < temp.length; i++){

    operationContainer.innerHTML += `<div value=${temp[i]}  class=
    "g${i} operator"><p>${temp[i]}</p>
        </div>`
    }

 handleEvents()
}
   
function handleEvents() {
    let operatorItems = document.querySelectorAll(".operator");
    let inputElement = document.getElementById("input");
    let resultElement = document.getElementById("result");
   

    for (let i = 0; i < operatorItems.length; i++){
        operatorItems[i].addEventListener("click", (e) => {
            let opr = e.target.innerText
         
           
            if (opr == "AC") {
                inputElement.textContent = ""
                 resultElement.textContent=""
                
            } else if (opr == "=") {

                let temp=eval(inputElement.textContent)
                resultElement.textContent = inputElement.textContent;
                inputElement.textContent = temp

            } else if (opr == "⌦") {
                let temp = inputElement.textContent
                  inputElement.textContent=temp.substring(0,temp.length-1)
                
            } else {
                inputElement.textContent+=opr
               
            }
        })
    }
}

createOperators();



