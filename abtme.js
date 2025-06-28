let govButton = document.querySelector('.gov-button');
let mathButton = document.querySelector('.math-button');
let buisnessButton = document.querySelector('.business-button');

let weightButton = document.querySelector('.weight-button');
let gamesButton = document.querySelector('.games-button');
let musicButton = document.querySelector('.music-button');

let textbox = document.querySelectorAll('.textbox');

let buttons = document.querySelectorAll(".selection-button");
let existingBox = document.querySelector(".default-me");
let active = false;


/*
gamesButton.addEventListener('click', () => {

    document.querySelector("")

});
*/
let stackcount = 9;


buttons.forEach(button => {

    button.addEventListener('click', () => {

        document.querySelectorAll(".selection-button").forEach(function(btn) {
        
        btn.style.boxShadow = "5px 5px black";
        btn.style.transform = "translateY(-1px)";
        btn.style.backgroundColor = "white";
        })
        
        //change page
    if(active === false)
    {
        if(existingBox !== (document.querySelector(`.${button.classList[1].replace('-button', '-me')}`))|| existingBox === document.querySelector(".default-me")){
            console.log("changing box");
            active = true;
            let className = button.classList[1].replace('-button', '-me');
            console.log(className);
            
            selectedBox = document.querySelector(`.${className}`);
            selectedBox.style.display = "block";

            if (stackcount <= 0){
                selectedBox.style.display = "none";
                }

            //make slowly go away;

            textbox.forEach(function(text){
                text.style.boxShadow = `${stackcount}px ${stackcount}px black`;
            })
           
            //button press down
            button.style.boxShadow = "1px 1px black";
            button.style.transform = "translateY(1px)";
            button.style.backgroundColor = "#e4dcf5";

            //flipped card
            existingBox.style.animation = "flip-card 1.2s ease 1"
            existingBox.style.zIndex = "5";
    

            setTimeout(() => {
            
            
            existingBox.style.display = "none";
            selectedBox.style.display = "block";
            if (stackcount <= 0){
                selectedBox.style.display = "none";
                }
        
            existingBox = selectedBox //before this line of code, existingBox = what WAS on screen
            
                active = false;
                stackcount--;
                console.log("stackcount: " + stackcount);


            }, 1200);
        }
        else{
            console.log("running code");
        }
    }
    else{
        console.log("please wait...");
    }
    });
})






