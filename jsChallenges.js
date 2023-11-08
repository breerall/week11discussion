//color of the day: Coral - Bhavya

//Traditional Way of modifying HTML
// function challenge1(){
//     //Fetch the value of the Checkbox
//     if (document.getElementById("subscribe").checked == true){
//         //See if it is checked
//         document.querySelector("#emailDiv").style.display = "initial";
//         //Change the email field Accordingly
//     } else {
//         document.querySelector("#emailDiv").style.display = "none";
//     }
// }


// function challenge2(){
//     if (document.getElementById("sameAddress").checked == true){
//         console.log("this works")
//         console.log(document.querySelector("#bill").textarea);
//         document.querySelector("#home").value = document.querySelector("#bill").value;
//     }
//     else{
//         document.querySelector("#home").value = prompt("Enter Billing Address");
//     }
// }

// Challenge 1
let varCheckBox = document.getElementById("subscribe");
varCheckBox.addEventListener("click", function(){

    if(varCheckBox.checked ==true){
        document.querySelector("#emailDiv").style.display = "initial";
    } else{
        document.querySelector("#emailDiv").style.display = "none";   
    }
});


//Challenge 2
let varSameAsAbove = document.getElementById("sameAddress");

varSameAsAbove.addEventListener("click", function(){

    if(varSameAsAbove.checked == true){
        console.log("this works")
        document.querySelector("#home").value = document.querySelector("#bill").value;
    } else{
        document.querySelector("#home").value = prompt("Enter Billing Address");  
    }
});

// function challenge3(){
// if (form.querySelector("input[type=radio]:checked"));
// var value;
// if (!checked) {
//     alert("You need to select one of the options");
// }
// }