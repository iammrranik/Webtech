// Step 1: Array of image URLs
const travelImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", // Beach
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", // Mountains
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", // Paris
    "https://images.unsplash.com/photo-1493246507139-91e8bef99cff?w=800"  // Lake
];

let currentIndex = 0;
const mainImage = document.getElementById("main-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image
function updateImage() {
    mainImage.src = travelImages[currentIndex];
}

// Initial load
updateImage();

// Step 4: Next Button Logic (with loop)
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= travelImages.length) {
        currentIndex = 0; // Loop back to start
    }
    updateImage();
});

// Step 4: Previous Button Logic (with loop)
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = travelImages.length - 1; // Loop to end
    }
    updateImage();
});

// Step 5: Automatic slideshow using setInterval()
setInterval(() => {
    currentIndex++;
    if (currentIndex >= travelImages.length) {
        currentIndex = 0;
    }
    updateImage();
}, 3000); // 3000ms = 3 seconds