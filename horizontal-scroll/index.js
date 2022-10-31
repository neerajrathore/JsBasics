console.log("Starting");

const slides = document.querySelectorAll('div')

const thumbnailContainer = document.querySelector(".thumbnails");

thumbnailContainer.innerHTML += [...slides].map((slide, i) => 
    {
        console.log("slide data", slide);
        `<div data-id="${i}" ></div>`
    }
).join("");

console.log(thumbnailContainer.innerHTML);

