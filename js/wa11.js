const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageCarousel = ["/img/wa11/pic1.jpg","/img/wa11/pic2.jpg","/img/wa11/pic3.jpg","/img/wa11/pic4.jpg","/img/wa11/pic5.jpg"];

/* Declaring the alternative text for each image file */
const picalt = ["Morty and Kate at avanti", "morty and kate easter", "impressed putin", "group photo", "weird man in a suit"];

/* Looping through images */
for(let i = 0;i<imageCarousel.length;i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageCarousel[i]);
    newImage.setAttribute('alt', picalt[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click',() => {
        displayedImage.setAttribute('src', imageCarousel[i]);
        displayedImage.setAttribute('alt', picalt[i]);
    });
};

/* Wiring up the Darken/Lighten button */
btn.addEventListener( 'click', () => {  
    if (btn.getAttribute("class") == "dark")
    {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else
    {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});
