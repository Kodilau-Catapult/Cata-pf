let clickX;
let clickY;
let testbox = document.querySelector(".testbox");
let coverbox = document.querySelector(".coverbox");
let activeState = false;
let titleState = false;
let colorIndex = 0;
let body = document.querySelector("div");
let subtitle = document.querySelector(".subtitle");
let colorGlobal;
let navButtons = document.querySelectorAll(".navb");

const color = ["#8FEFCF","paleturquoise","#FFDF64"];
const titles = ["Catapult Intern   ", "Math Enjoyer", "Rising Entrepeneur", "Government Enthusiast",]
const blacklist = [".button", ".div"];

//color change on click
document.addEventListener("click", function(event){
//prevent spamclicking
console.log(event.target);
/*
blacklist.forEach(function(item){
    if (event.target === item)
{
    activeState = true;
}
else{}
})
*/

if (activeState === true)
{
    console.log("please wait...");
}
else
{
activeState = true;

//color & shape et al
clickX = event.pageX;
clickY = event.pageY;

if (colorIndex > 2)
{
    colorIndex = 0;
}

colorPicked = color[colorIndex];
colorGlobal = colorPicked;
colorIndex += 1;
console.log(colorIndex);

if (Math.random()>0.5)
{
testbox.style.borderRadius = "50%";
}

console.log(`clicked at ${clickX-50},${clickY-50}`);
testbox.style.left = ((clickX-50)+ "px");
testbox.style.top = ((clickY-50) + "px");

//testbox.style.transform = `translate(${clickX - 50}px, ${clickY - 50}px)`;
//console.log (((clickX-50)+ "px")+","+((clickY-50) + "px"));
testbox.style.backgroundColor = colorPicked;
testbox.style.display = "block";
testbox.style.animation = "grow 2s ease-in";
console.log(colorPicked);

setTimeout(function(){
console.log("background changed to " + colorPicked)

document.body.style.background = colorPicked;
testbox.style.animation = "none";
testbox.style.display = "none";
testbox.style.borderRadius = "5%"
activeState = false;
}, 750)
}
})
//color change on open
setTimeout(function(){

testbox.style.left = "50vw";
testbox.style.top = "50vh";

testbox.style.backgroundColor = "paleturquoise";

testbox.style.display = "block";
testbox.style.animation = "grow 2s ease-in";

setTimeout(function(){
document.body.style.background = "paleturquoise";
testbox.style.animation = "none";
testbox.style.display = "none";
testbox.style.borderRadius = "5%"
activeState = false;
}, 750)
}, 500)
//create on scroll thru
{
const animationElements = document.querySelectorAll(".animate-on-scroll")
const observer = new IntersectionObserver((entries) => {
    entries.forEach(function(entry){
    if (entry.isIntersecting)
    {
    entry.target.classList.add('animate');
    }
    })
}
)
for (i = 0; i < animationElements.length; i++)
{
    const el = animationElements[i];
    observer.observe(el);
}
}
//subtitlewipe
setTimeout(function(){

    i=1;

    subtitle.addEventListener("click", function(){
    

        activeState = true;
        setTimeout(() => {
        activeState = false;
        }, 100);

        console.log("subtitle click registered");
        console.log(colorGlobal);
        if ((color.indexOf(colorGlobal)+1) > 2)
        {
        colorPicked = color[0]
        }
        else{
        colorPicked = color[(color.indexOf(colorGlobal)+1)];
        }
        console.log(colorPicked);
        
        if (i > (titles.length-1))
        {
            i = 0
        }   

        if (titleState === false)
        {
        coverbox.style.display = "block";
        coverbox.style.width = (titles[i].length)*0.90 +"em";
        titleState = true
        coverbox.style.animation = "titlewipe 1s cubic-bezier(.84,-0.01,.22,.99)";
        
        coverbox.style.backgroundColor = colorPicked; 

        console.log("code ran")
        setTimeout(function(){
        titleState = false;
        coverbox.style.animation = "none";
        coverbox.style.display = "none";
        },1000)

        setTimeout(function(){
        
        subtitle.innerHTML = titles[i]
        i++
        }, 500)
        } 

        else{
        console.log("Please wait...")
        }

    })

}, 2000)

//navigation tabs 

navButtons.forEach(function(navButton){
    navButton.addEventListener("click", function(){ 
        activeState = true;
        navButton.style.boxShadow = "3px 3px"
        navButton.style.transform = "translateY(3px)"
        console.log("navbutton triggered");
        setTimeout(() => {
        activeState = false;
        }, 100);
    })
})


let spark = document.createElement("div");
spark.style.width = "100px";
spark.style.height = "100px";
spark.style.backgroundColor = "black";
spark.style.position ="absolute";
document.body.appendChild(spark);
spark.classList.add('animate-on-scroll');



document.querySelectorAll('.link').forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');
        const delayInMilliseconds = 990;

        setTimeout(function() {
            window.location.href = targetUrl;

        
        document.getElementById("boxup").style.animationName = "none"


        
        document.getElementById("boxbottom").style.animationName = "none"


        }, delayInMilliseconds);

        document.getElementById("boxup").style.display = "block"
        document.getElementById("boxup").style.animationName = "page-transition-top"

        document.getElementById("boxbottom").style.display = "block"
        document.getElementById("boxbottom").style.animationName = "page-transition-bottom"

        
    });
});





















//Problems


//theme throughout 
    //originally blank
    //
        //Music and Hobbies
            //P-muse
                //music note effect on click 
            //Uke 
            //video games 
                //
        //Interests


//to-do list 

//tuesday
    // X subtitle cycle 
        //  diff transition types
    // X design page layout
    // X Navbar buttons & pages
   

//wednesday
    //Scrollable carousel 
        // on click, expand image + captions
    //pages & shit 
        //projects: beginning page of project, camile mormal effect
        // (Begun) About me: 
       


//thursday
    
    // X at catapult: finish About me page 
    

//friday
    //Mobile Compatible (never)
    //style 
    //start on designing skills site
    //projects 
    //do skills site;

//saturday

//script 
    //excuse for no boostrap 
    //unfortunately I could find what I rlly wanted on boostrap so I just made my own.

//fireworks 
    //physics engine
    //no