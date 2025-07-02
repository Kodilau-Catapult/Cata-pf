let htmlButton = document.querySelector('.html-button');
let cssButton = document.querySelector('.css-button');
let jsButton = document.querySelector('.js-button');

let lsButton = document.querySelector('.ls-button');
//let psButton = document.querySelector('.ps-button');
//let volmusicButton = document.querySelector('.vol-button');

let textbox = document.querySelectorAll('.textbox');

let buttons = document.querySelectorAll(".selection-button");
let existingBox = document.querySelector(".default-me");
let active = false;
let buttonsEnabled = false; // Initially set to false

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!buttonsEnabled) return; // Prevent use before title click
        if (active) return;

        // Map button id (e.g. "html-button") to textbox class (e.g. "html-me")
        let id = button.id.replace('-button', '-me');
        let selectedBox = document.querySelector(`.${id}`);

        if (!selectedBox || selectedBox === existingBox) return;

        active = true;

        // Slide out the existing box to the left
        existingBox.style.animation = "slide-out-left 0.8s cubic-bezier(.77,0,.18,1) forwards";
        existingBox.style.zIndex = "5";

        // Prepare and slide in the new box from the right
        selectedBox.style.display = "block";
        selectedBox.style.zIndex = "1";
        selectedBox.style.animation = "slide-in-right 0.8s cubic-bezier(.77,0,.18,1) forwards";
        selectedBox.style.opacity = "1";

        setTimeout(() => {
            // Hide all boxes except the new one
            document.querySelectorAll('.textbox').forEach(tb => {
                if (tb !== selectedBox) {
                    tb.style.display = "none";
                    tb.style.zIndex = "1";
                    tb.style.animation = "none";
                    tb.style.opacity = "0";
                }
            });
            // Bring new box to front
            selectedBox.style.zIndex = "5";
            selectedBox.style.animation = "none";
            selectedBox.style.opacity = "1";
            existingBox = selectedBox;
            active = false;
        }, 800);
    });
});

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

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.bar1')?.classList.add('animate-in');
    document.querySelector('.bar2')?.classList.add('animate-in');

    const skillsTitle = document.getElementById('skills-title');
    const defaultBox = document.querySelector('.default-me');
    let defaultShown = false;

    // Hide default-me initially
    defaultBox.style.display = "none";

    // Enable grow-on-hover at start
    skillsTitle.classList.add('can-grow');

    skillsTitle.addEventListener('click', () => {
        if (!defaultShown) {
            // Remove grow-on-hover after click
            skillsTitle.classList.remove('can-grow');
            skillsTitle.classList.add('shrink-move');
            setTimeout(() => {
                defaultBox.style.display = "block";
                defaultBox.style.animation = "slide-up 0.8s cubic-bezier(.77,0,.18,1) forwards";
                buttonsEnabled = true;
            }, 500); // Wait for most of the shrink-move animation before showing the box
            defaultShown = true;
        }
    });
});



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


            function getFileName() {
            let path = window.location.pathname;
            let filename = path.substring(path.lastIndexOf('/') + 1);
            return filename;
            }

            console.log(getFileName());

            if (getFileName().includes("abtme-ch.js") === true)
            {
            console.log("success")
            window.location.href = "index-ch.html";
            }
            else
            {
            console.log("fail")
            window.location.href = "index.html";
            }
            
        }, 1200);
    })
}, 1000);