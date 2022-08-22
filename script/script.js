const elForm = document.querySelector(".site-form");
const elInputTemp = document.querySelector("#input-temp");
const elRainInput = document.querySelector("#rain");
const elGymInput = document.querySelector("#gym");
const elResult = document.querySelector(".result");
const elBtn = document.querySelector(".btn");

elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputVal = elInputTemp.value;


    let niceTemp = (inputVal > 5 && inputVal < 30) // chiqamiz
    let notAllowed = niceTemp && (elRainInput.checked) // chiqmaymiz
    let allowed = notAllowed && elGymInput.checked // chiqamiz
    
    if (elInputTemp.value == "") {
        alert("inputga qiymat kiriting")
    } else if (allowed) {
        elResult.innerHTML = "xa"
   } else if(notAllowed) {
       elResult.innerHTML = "yo'q"
   } else if (niceTemp) {
       elResult.innerHTML = "xa"
   } else if (!niceTemp) {
       elResult.innerHTML = "yo'q"
   }

 


});

// chiqamiz temp > 5, temp < 30
// chiqmaymiz rain == true 
// chiqamiz rain == true && gym == true
// chiqmaymiz temp < 5 && gym == true