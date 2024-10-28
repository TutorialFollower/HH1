let con = document.querySelector('#elem-container');
let img = document.querySelector("#fixed-image");

let elems = document.querySelectorAll(".elem");

con.addEventListener("mouseenter", function() {
    img.style.display = "block"; // Show the image when hovering over the container
});

con.addEventListener("mouseleave", function() {
    img.style.display = "none"; // Hide the image when leaving the container
});

// Ensure the image remains visible if hovered over
img.addEventListener("mouseenter", function() {
    img.style.display = "block"; // Keep the image visible when hovering over it
});

img.addEventListener("mouseleave", function() {
    img.style.display = "none"; // Hide the image when leaving the image area
});

elems.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        let image = e.getAttribute("data-image");
       img.style.backgroundImage = `url(${image})`
    });
});

        

        
