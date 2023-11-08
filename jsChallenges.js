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
// let varCheckBox = document.getElementById("subscribe");
// varCheckBox.addEventListener("click", function(){

//     if(varCheckBox.checked ==true){
//         document.querySelector("#emailDiv").style.display = "initial";
//     } else{
//         document.querySelector("#emailDiv").style.display = "none";   
//     }
// });


//Challenge 2
// let varSameAsAbove = document.getElementById("sameAddress");

// varSameAsAbove.addEventListener("click", function(){

//     if(varSameAsAbove.checked == true){
//         console.log("this works")
//         document.querySelector("#home").value = document.querySelector("#bill").value;
//     } else{
//         document.querySelector("#home").value = prompt("Enter Billing Address");  
//     }
// });

// function challenge3(){
// if (form.querySelector("input[type=radio]:checked"));
// var value;
// if (!checked) {
//     alert("You need to select one of the options");
// }
// }


//Challenge 3
let box1Check = document.querySelectorAll('input[name="standing"]');
let box2Check = document.querySelectorAll('input[name="gradDate"]');
let submitButton = document.querySelector('input[type="submit"]');
//get value of radio buttons
//check if both radio buttons are selected

submitButton.addEventListener("click", function() {

     // Check if at least one radio button in the first group is checked
     let box1Selected = Array.from(box1Check).some(input => input.checked);

     // Check if at least one radio button in the second group is checked
     let box2Selected = Array.from(box2Check).some(input => input.checked);
 
     // Check if both groups have at least one radio button selected
     if (!(box1Selected && box2Selected)) {
         alert("Please select an option for both current class standing and anticipated graduation date.");
     } else {
         // If both selections are made, allow form submission
         document.getElementById("ch3form").submit();
     }
 });


// document.querySelectorAll('input[name="submit"]').addEventListener("click", function(){
//     console.log(document.querySelectorAll('input[name="standing"]'));
//     console.log(document.querySelectorAll('input[name="standing"]'));
//     if (!(box1Check.checked == true && box2Check.checked == true)){
//         alert("Please Enter both Values!")
//     }
// });
//if selected pass
//if not selected show alert