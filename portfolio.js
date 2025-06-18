let clickX;
let clickY;
let testbox = document.querySelector(".testbox");
let activeState = false;
let colorIndex = 0;

const color = ["aqua","aquamarine","paleturquoise"];


document.addEventListener("click", function(){
//prevent spamclicking

if (activeState === true)
{
    console.log("please wait...");
}
else
{
activeState = true;

//color & shape et al
clickX = event.clientX;
clickY = event.clientY;

if (colorIndex > 2)
{
    colorIndex = 0;
}

colorPicked = color[colorIndex];
colorIndex += 1;
console.log(colorIndex);

if (Math.random()>0.5)
{
testbox.style.borderRadius = "50%";
console.log("shape ran");
}

console.log(colorPicked);
console.log(`clicked at ${clickX},${clickY}`);
testbox.style.left = ((clickX-50)+ "px");
testbox.style.top = ((clickY-50) + "px");

//testbox.style.transform = `translate(${clickX - 50}px, ${clickY - 50}px)`;
//console.log (((clickX-50)+ "px")+","+((clickY-50) + "px"));
testbox.style.backgroundColor = colorPicked;

testbox.style.display = "block";
testbox.style.animation = "grow 2s ease-in";

setTimeout(function(){
document.body.style.background = colorPicked;
testbox.style.animation = "none";
testbox.style.display = "none";
testbox.style.borderRadius = "5%"
console.log("animation ran");

activeState = false;
}, 750)

}
})


// p-muse style screenwipe 
// 1st: generate growing box animation
    //How to trigger css animation from js?
// 2nd: change background color
// 3rd: remove box 
    //literally just testbox.style.display = none;

//Problems
        //cant make it move with scroll
        //left and top style manipulation doesnt seem to extend beyond original viewpoint anchor 






