// Color of the Day: Coral <Cassidy Petersen>


// This is done by changing the HTML file
// function challenge1() {
//     //Fetch the vaule of the checkbox 
//     // see if it is checked
//     // change the email field accordingly

//     let checkBox = document.getElementById("subscribe").checked;
//     if (checkBox){ 
//         document.querySelector("#emailDiv").style.display = "block";
//     } else { 
//         document.querySelector("#emailDiv").style.display = "none";
//     }
// }

// By adding Event Listener
// let varCheckbox = document.getElementById("subscribe");

// varCheckbox.addEventListener("click",function() {
//     if (varCheckbox.checked) {
//         document.querySelector("#emailDiv").style.display = "block";
//     } else {
//         document.querySelector("#emailDiv").style.display = "none";
//     }

// });

// Challenge 2
let SameAsAbove = document.getElementById("sameAddress");

SameAsAbove.addEventListener("click",function() {
    if (SameAsAbove.checked == true) {
        document.querySelector("#home").value = document.querySelector("#bill").value;
    } else {
        document.querySelector("#home").value = prompt("Enter Billing Address");
    }

});

// Challenge 3
let SameAsAbove = document.getElementById("sameAddress");

SameAsAbove.addEventListener("click",function() {
    if (SameAsAbove.checked == true) {
        document.querySelector("#home").value = document.querySelector("#bill").value;
    } else {
        document.querySelector("#home").value = prompt("Enter Billing Address");
    }

});




