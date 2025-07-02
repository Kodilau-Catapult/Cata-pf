let govButton = document.querySelector('.gov-button');
let mathButton = document.querySelector('.math-button');
let buisnessButton = document.querySelector('.buisness-button');

let weightButton = document.querySelector('.weight-button');
let gamesButton = document.querySelector('.games-button');
let musicButton = document.querySelector('.music-button');

let textbox = document.querySelectorAll('.textbox');

let buttons = document.querySelectorAll(".selection-button");
let existingBox = document.querySelector(".default-me");
let active = false;

let stackcount = 9;

// intro transition 
     
        const delayInMilliseconds = 990;

        setTimeout(function() {
            
            document.getElementById("boxup").style.display = "none";
            document.getElementById("boxup").style.animationName = "none";

            document.getElementById("boxbottom").style.display = "none";
            document.getElementById("boxbottom").style.animationName = "none";
        }, delayInMilliseconds);

        document.getElementById("boxup").style.display = "block";
        document.getElementById("boxbottom").style.display = "block";


        document.getElementById("boxup").style.animationName = "page-transition-top";
        document.getElementById("boxbottom").style.animationName = "page-transition-bottom";

        
  


//pre-requisites
// .link, boxup, boxbottom, page-tranisition-top, page-transition-bottom
//#end-region

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Prevent double-clicks during transition
        if (active) {
            console.log("please wait...");
            return;
        }

        // Find the target box

        let className = button.classList[1].replace('-button', '-me');
        let selectedBox = document.querySelector(`.${className}`);
        
        if (!selectedBox || selectedBox === existingBox) {
            console.log("same page or box not found");
            return;
        }

        active = true;

        // Reset all button styles

        document.querySelectorAll(".selection-button").forEach(btn => {
            btn.style.boxShadow = "5px 5px black";
            btn.style.transform = "translateY(-1px)";
            btn.style.backgroundColor = "white";
        });

        // Button press down effect
        button.style.boxShadow = "1px 1px black";
        button.style.transform = "translateY(1px)";
        button.style.backgroundColor = "#e4dcf5";

        // Prepare new box (incoming)
        selectedBox.style.display = "block";
        selectedBox.style.zIndex = "1";
        
        // Animate old box (outgoing)
        console.log(existingBox)
        existingBox.style.animation = "flip-card 1.2s ease 1";
        existingBox.style.zIndex = "5";

        setTimeout(() => {
            // Hide all boxes except the new one
            document.querySelectorAll('.textbox').forEach(tb => {
                if (tb !== selectedBox) {
                    tb.style.display = "none";
                    tb.style.zIndex = "1";
                    tb.style.animation = "none";
                }
            });
            // Bring new box to front
            selectedBox.style.zIndex = "5";
            selectedBox.style.animation = "none";
            existingBox = selectedBox;
            active = false;
        }, 1000);
    });
});

// #region Go back arrow 
let turnArrow = document.querySelector(".return");
setTimeout(() => {

    turnArrow.style.display = "block";
    turnArrow.style.animation = "fade 2s ease 1";

    turnArrow.addEventListener("click", function(){
        console.log("returned")

        document.getElementById("boxup").style.display = "block"
        document.getElementById("boxup").style.animationName = "page-transition-top"
        document.getElementById("boxup").style.animationDirection = "reverse"

        document.getElementById("boxbottom").style.display = "block"
        document.getElementById("boxbottom").style.animationName = "page-transition-bottom"
        document.getElementById("boxbottom").style.animationDirection = "reverse"

        setTimeout(() => {

            document.getElementById("boxup").style.animationName = "none"
            document.getElementById("boxbottom").style.animationName = "none"

            if (getFileName() === ("ch-abtme.html"))
            {
            window.location.href = "ch-index.html";
            }
            else
            {
            window.location.href = "index.html";
            }
        }, 1200);

    function getFileName() {
    let path = window.location.pathname;
    let filename = path.substring(path.lastIndexOf('/') + 1);
    return filename;
    }
    console.log(getFileName());
    
    //Chinese transition/normal too
    



    })
}, 1000);
//#endregion

// #region Appear when scroll

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
//#endregion



document.addEventListener("DOMContentLoaded", function(){
    setTimeout(() => {
        document.querySelector(".c1").classList.remove('intro');
        document.querySelector(".c2").classList.remove('intro');


        document.querySelector(".c1").style.pointerEvents ="auto";
        document.querySelector(".c2").style.pointerEvents ="auto";

    }, 1000); // 1s matches your animation duration

        document.querySelector(".c1").style.pointerEvents ="none";
        document.querySelector(".c2").style.pointerEvents ="none";

});

function loadVideo(img) {
  const wrapper = img.parentNode;
  wrapper.innerHTML = `<iframe width="360" height="215" src="https://www.youtube.com/embed/le1gN2tK3iQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}
