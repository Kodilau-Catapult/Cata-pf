let clickX;
let clickY;
let testbox = document.querySelector(".testbox");
let coverbox = document.querySelector(".coverbox");
let activeState = false;
let titleState = false;
let colorIndex = 0;
let body = document.querySelector("div");
let subtitle = document.querySelector(".subtitle");
let colorGlobal = "paleturquoise";
let navButtons = document.querySelectorAll(".navb");
let visited = false;

const color = ["#8FEFCF","paleturquoise","#FFDF64"];
const titles = ["Catapult Intern   ", "Math Enjoyer", "Rising Entrepeneur", "Government Enthusiast",]
const blacklist = [".button", ".div"];

//Check if from original URL

const previousPageUrl = document.referrer;

if (previousPageUrl === ""||previousPageUrl ==="https://www.google.com/") {
  console.log("User arrived directly to this page.");
  console.log(previousPageUrl);
    visited = false;

} else {

    visited = true;
    console.log(`User came from: ${previousPageUrl}`);

    setTimeout(() => {

        document.querySelector(".top").style.display = "none";
        document.querySelector(".bottom").style.display = "none";
    }, 1000);
        document.getElementById("boxup").style.display = "block"
        document.getElementById("boxup").style.animationName = "page-transition-top-rev"

        document.getElementById("boxbottom").style.display = "block"
        document.getElementById("boxbottom").style.animationName = "page-transition-bottom-rev"

        navButtons.forEach(function(button){
            button.display = "none"
            button.style.animation = "fade 1s ease 1";
        }); 


}



// #region color change on click
document.addEventListener("click", function(event){

if (activeState === false)
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
colorGlobal = colorPicked
colorIndex += 1;
console.log("Index"+colorIndex);

if (Math.random()>0.5)
{
testbox.style.borderRadius = "50%";
}

//console.log(`clicked at ${clickX-50},${clickY-50}`);
testbox.style.left = ((clickX-50)+ "px");
testbox.style.top = ((clickY-50) + "px");

//testbox.style.transform = `translate(${clickX - 50}px, ${clickY - 50}px)`;
//console.log (((clickX-50)+ "px")+","+((clickY-50) + "px"));
testbox.style.backgroundColor = colorPicked;
testbox.style.display = "block";
testbox.style.animation = "grow 2s ease-in";
console.log("textbox color =" + colorPicked);

setTimeout(function(){
console.log("background changed to " + colorPicked)

document.body.style.background = colorPicked;
testbox.style.animation = "none";
testbox.style.display = "none";
testbox.style.borderRadius = "5%"
activeState = false;
}, 750)
}
else{
    console.log("colorwipe active.")
}
})




//#endregion
// #region color change on open
if(visited === true)
{
document.body.style.background = "paleturquoise";
}

setTimeout(function(){

if(visited === true)
{
}
else if (visited === false)
{
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
}
}, 500)
//#endregion 
// #region create on scroll thru
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
//#endregion 

// #region subtitlewipe
setTimeout(function(){

    let i = 1;

    setInterval(() => {
        
        console.log("subtitle click registered");
        console.log("color Global before:" + colorGlobal);
        
        if ((color.indexOf(colorGlobal)) > 2)
        {
            colorLocal = color[0];
        }
        else{
            colorLocal = color[(color.indexOf(colorGlobal))];
            console.log("colorPicked after: "+ colorLocal)
        }

        console.log("color Picked:" + colorLocal);
        
        if (i > (titles.length-1))
        {
            i = 0
        }   
        
        if (titleState === false)
        {
            coverbox.style.display = "block";
            titleState = true;
            coverbox.style.width = (titles[i].length)*0.90 +"em";
            coverbox.style.animation = "titlewipe 1s cubic-bezier(.84,-0.01,.22,.99)";
            
            coverbox.style.backgroundColor = colorLocal; 

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

    }, 1000);
}, 2000)
//#endregion

// #region navigation tabs 

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

//#endregion















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
        // Xon click, expand image + captions
    //pages & shit 
        // Xprojects: beginning page of project, camile mormal effect
        // X(Begun) About me: 
       


//thursday
    // X at catapult: finish About me page


//friday


//sunday


//monday
    //at cata
        //ask TA abt publishing sites X
        //finish designing Skills page & contact me 
        //fill in About Me page 
       

    //at home
        //finish skills page
        //finish Contact me page

//tuesday
    //at cata
        // practice speech (is it good?)
        // if extra time: spruce up Contact Me page

    //at home 
        //accessibility
            //tab behavior 
            //translations 
            //tags
        //finish skills + resume page
            //Fill in About Me page

    // work on speech
    
//wednesday XXXX
    //PRESENTATION TIME


//script 
    //excuse for no boostrap 
    //unfortunately I could find what I rlly wanted on boostrap so I just made my own.
