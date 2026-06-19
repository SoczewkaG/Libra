const button = document.getElementById("showMoreBtn");
const images = document.querySelectorAll(".gallery-grid img");

const perClick = 6;
let visibleCount = 6;

// ukryj wszystkie
images.forEach((img, index) => {

    if(index < visibleCount) {

        img.classList.add("visible");

    } else {

        img.classList.add("hidden");

    }

});

button.addEventListener("click", () => {

    const nextImages = [];

    for(
        let i = visibleCount;
        i < visibleCount + perClick && i < images.length;
        i++
    ){
        nextImages.push(images[i]);
    }

    nextImages.forEach((img, index) => {

        setTimeout(() => {

            img.classList.remove("hidden");

            requestAnimationFrame(() => {
                img.classList.add("visible");
            });

        }, index * 100);

    });

    visibleCount += perClick;

    if(visibleCount >= images.length){
        button.style.display = "none";
    }

});