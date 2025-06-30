
const track = document.getElementById("track");

let isMouseDown = false;
let mouseDownAt = 0;
let prevPercentage = 0;

// smooth movement preset
track.style.transition = "transform 0.3s cubic-bezier(.25,.8,.25,1)";

window.onmousedown = pos => {
    isMouseDown = true;
    mouseDownAt = pos.clientX;
   //update cycle 
    // Do NOT remove transition here!
};

window.onmouseup = pos => {
    if (!isMouseDown) return;
    isMouseDown = false;
    prevPercentage = getCurrentPercentage();

    // No need to set transition again
    const percentage = prevPercentage;
    track.style.transform = `translate(${percentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + percentage}% center`;
    }
};

window.onmousemove = pos => {
    if (!isMouseDown) return;

    const mouseDelta = pos.clientX - mouseDownAt;
    const maxDelta = window.innerWidth / 2;
    let percentage = prevPercentage + (mouseDelta / maxDelta) * 100;

    // Clamp percentage
    percentage = Math.max(Math.min(percentage, 0), -100);

    track.style.transform = `translate(${percentage}%, -50%)`;
    track.dataset.percentage = percentage;

    // Update image objectPosition while dragging
    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + percentage}% center`;
    }
};

function getCurrentPercentage() {
    return parseFloat(track.dataset.percentage) || 0;
}



