let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));

fetch('../JS-Project/projects.json')
.then(response => response.json())
.then(projects => {
    siftJson(projects);
}).catch(err => {
    console.log(`error ${err}`);
});

function siftJson(listItem){
    for(let i = 0; i < listItem.projects.length; i++){
        if(listItem.projects[i].subdomain == subdomain){
            buildPage(listItem.projects[i]);
            break;
        }
    }
}

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
let imageCarousel = [];
let picalt = [];

function buildPage(project){
    makeImageArray(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;

    // Set the first image as the displayed image
    if (imageCarousel.length > 0) {
        displayedImage.src = imageCarousel[0];
        displayedImage.alt = picalt[0];
    }

    for(let i = 0; i < imageCarousel.length; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', imageCarousel[i]);
        newImage.setAttribute('alt', picalt[i]);
        thumbBar.appendChild(newImage);
    
        newImage.addEventListener('click', () => {
            displayedImage.src = imageCarousel[i];
            displayedImage.alt = picalt[i];
        });
    }

    document.getElementById("description").innerHTML += `<p>${project.description}</p>`;

}

function makeImageArray(project){
    imageCarousel = project.Images;
    picalt = project.alt;
}
