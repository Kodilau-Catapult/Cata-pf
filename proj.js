const track = document.getElementById("track");
const images = document.querySelectorAll(".image");

let isMouseDown = false;
let mouseDownAt = 0;
let prevPercentage = 0;

// Smooth movement preset
track.style.transition = "transform 0.3s cubic-bezier(.25,.8,.25,1)";

// Drag events
window.onmousedown = function(e) {
    isMouseDown = true;
    mouseDownAt = e.clientX;
};

window.onmouseup = function() {
    if (!isMouseDown) return;
    isMouseDown = false;
    prevPercentage = getPercentage();
};

window.onmousemove = function(e) {
    if (!isMouseDown) return;

    const mouseDelta = e.clientX - mouseDownAt;
    const maxDelta = window.innerWidth / 2;
    let percentage = prevPercentage + (mouseDelta / maxDelta) * 100;

    //floor and ceiling function
    percentage = Math.max(Math.min(percentage, 0), -100);

    update(percentage);
};

// Scroll events
track.addEventListener('wheel', function(e) {
    e.preventDefault();

    // synchronize vert and horz movement
    const delta = (Math.abs(e.deltaX) > Math.abs(e.deltaY)) ? e.deltaX : e.deltaY;

    //simplified if else statement
    const scrollFactor = 0.3;

    let percentage = getPercentage() - delta * scrollFactor;
    percentage = Math.max(Math.min(percentage, 0), -100);

    prevPercentage = percentage; // Keep scroll and drag in sync
    update(percentage);

}, { passive: false });

// function to update track and images

function update(percentage) {
    track.style.transform = `translate(${percentage}%, -50%)`;
    track.dataset.percentage = percentage;
    for (const image of images) {
        image.style.objectPosition = `${100 + percentage}% center`;
    }
}

// function to get current percentage
function getPercentage() {
    return parseFloat(track.dataset.percentage) || 0;
}

let turnArrow = document.querySelector(".return");
setTimeout(() => {

    turnArrow.style.display = "block";
    turnArrow.style.animation = "fade 2s ease 1";

    turnArrow.addEventListener("click", function(){
        console.log("returned")
    
        document.querySelector(".introbox").style.display = "block";
        document.querySelector(".introbox").style.animation = "slide-back 1s ease 1";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 950);
    })
}, 1000);
