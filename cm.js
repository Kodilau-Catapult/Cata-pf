
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

            if ((getFileName().includes("ch-abtme.html")) === true)
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

