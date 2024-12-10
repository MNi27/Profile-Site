// Greetings
document.addEventListener("DOMContentLoaded", () => {
    function displayGreeting() {
        const hours = new Date().getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good morning!";
        } else if (hours < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        const greetingElement = document.getElementById("greeting");
        if (greetingElement) {
            greetingElement.textContent = greeting;
        } else {
            console.error("Element with ID 'greeting' not found.");
        }
    }

    displayGreeting();
});


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

document.addEventListener("DOMContentLoaded", () => {
    //Project 1 Slideshow
    const images1 = ["assets/1ProjectA.jpg", "assets/1ProjectB.jpg", "assets/1ProjectC.jpg", "assets/1ProjectD.jpg"];
    let currentIndex1 = 0;
    const imgElement1 = document.getElementById("project1-image");

    if (imgElement1) {
        const updateImage1 = () => (imgElement1.src = images1[currentIndex1]);

        document.getElementById("prev-btn1").addEventListener("click", () => {
            currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
            updateImage1();
        });

        document.getElementById("next-btn1").addEventListener("click", () => {
            currentIndex1 = (currentIndex1 + 1 + images1.length) % images1.length;
            updateImage1();
        });

        updateImage1();
    }

    //Project 2 Slideshow
    const images2 = ["assets/2ProjectA.jpg", "assets/2ProjectB.jpg", "assets/2ProjectC.jpg", "assets/2ProjectD.jpg", "assets/2ProjectE.jpg", "assets/2ProjectFjpg", "assets/2ProjectG.jpg"];
    let currentIndex2 = 0;
    const imgElement2 = document.getElementById("project2-image");

    if (imgElement2) {
        const updateImage2 = () => (imgElement2.src = images2[currentIndex2]);

        document.getElementById("prev-btn2").addEventListener("click", () => {
            currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
            updateImage2();
        });

        document.getElementById("next-btn2").addEventListener("click", () => {
            currentIndex2 = (currentIndex2 + 1 + images2.length) % images2.length;
            updateImage2();
        });

        updateImage2();
    }
});

