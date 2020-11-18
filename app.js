// alert("Testing...");

// to collect all box components...
// const boxes = document.querySelectorAll(".box");
const h1 = document.querySelector("h1");
const supervisorBox = document.querySelector(".box-supervisor");
const calculatorBox = document.querySelector(".box-calculator");

//to set a listener on the box components...
// boxes.forEach(function(box){
//     box.addEventListener("mouseover", function(e){

//     })
// })

document.addEventListener("DOMContentLoaded", animation());

function animation() {
  //h1.classList.add("alt-colors"); //added animation class
  calculatorBox.classList.add("move-down"); //add animation class
  supervisorBox.classList.add("move-down"); //add animation class
  //h1.classList.add("top-slideIn");
}
