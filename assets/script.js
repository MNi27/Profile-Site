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
document.addEventListener("DOMContentLoaded", () => {
    const images = ["assets/1ProjectA.jpg", "assets/1ProjectB.jpg", "assets/1ProjectC.jpg", "assets/1ProjectD.jpg"];
    let currentIndex = 0;

    const imgElement = document.getElementById("project-image");
    const updateImage = () => (imgElement.src = images[currentIndex]);

    document.getElementById("prev-btn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    updateImage(); // Initialize with the first image
});
