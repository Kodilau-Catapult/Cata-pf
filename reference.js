//Storing Values

    //item type
    let h1 = document.querySelector("h1");
    //classes
    let section = document.querySelector(".section");

//Interactions
let button = document.querySelector(".button")
let image = document.querySelector("img")

button.addEventListener('click',function(){
//put whatever code u wanna run here
//How to change elements in HTML from JS
button.innerHTML = "button but different";
image.src = "[insert url here]"
button

//Events List//
/*
"click"
"mouseover"
"mouseout"
"keydown"
"keypress"
Here are a few, go here for more https://www.w3schools.com/jsref/dom_obj_event.asp*/ 
})


//How to code toggle in JS
let toggle = true;
    //use boolean

button.addEventListener("click", function(){
if(toggle == true)
{
console.log("output1");
toggle = false;
}
else
{
console.log("output2");
toggle = true;
}
})
//

//How to make things disapear and reapear 

let image1 =document.querySelector(".image");
image1.style.display="none";

button.addEventListener("click", function(){
image1.style.display="block";

})

//How to store info 
.value;

let inputValue = document.querySelector(".inputbox").value


//scroll down reaction





