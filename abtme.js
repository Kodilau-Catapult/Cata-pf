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

        
        document.getElementById("boxup").style.animationName = "page-transition-top";

       
        document.getElementById("boxbottom").style.animationName = "page-transition-bottom";

        
  


//pre-requisites
// .link, boxup, boxbottom, page-tranisition-top, page-transition-bottom


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

        //button press down effect
        button.style.boxShadow = "1px 1px black";
        button.style.transform = "translateY(1px)";
        button.style.backgroundColor = "#e4dcf5";

        //prepare new box below old one
        selectedBox.style.display = "block";
        selectedBox.style.zIndex = "1";
        selectedBox.style.animation = "none";

        //animate old box on top
        existingBox.style.animation = "flip-card 1.2s ease 1";
        existingBox.style.zIndex = "5";

        setTimeout(() => {
            //hide all boxes except the new one
            document.querySelectorAll('.textbox').forEach(tb => {
                if (tb !== selectedBox) {
                    tb.style.display = "none";
                    tb.style.zIndex = "1";
                    tb.style.animation = "none";
                }
            });
            //bring new box to front
            selectedBox.style.zIndex = "5";
            existingBox = selectedBox;
            active = false;
        }, 1200);
    });
});





