// Greetings
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting = "Salutations my good fellow!";
    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("greeting").innerText = greeting;
}
displayGreeting();

//A button to show more information
function toggleInfo() {
    const info = document.getElementById("more-info");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

//Highlights upon hovering
function highlight(element) {
    element.style.backgroundColor = "lightblue";
}

function removeHighlight(element) {
    element.style.backgroundColor = "";
}



//Slideshow for pictures
const images = ["assets/1ProjectA.jpg", "assets/1ProjectB.jpg", "assets/1ProjectC.jpg", "assets/1ProjectD.jpg"];
let currentIndex = 0;

function updateImage() {
    document.getElementById("project-image").src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

