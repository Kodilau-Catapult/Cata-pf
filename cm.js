
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

        
  