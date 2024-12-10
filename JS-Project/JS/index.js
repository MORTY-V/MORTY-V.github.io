let proj;
fetch('../JS-Project/projects.json')
.then(response => {
    return response.json();
}).then(projects => {
    proj = projects;
    sortData(projects);
}).catch(err => {
    console.log(`error ${err}`);
})

function sortData(data){       //still need to add image source and location //also need href link to projects
    for(let i = 0 ; i < data.projects.length ; i++){
        document.getElementById("projects").innerHTML += `<a href="../JS-Project/${data.projects[i].subdomain}.html">
        <div class="row project" id="${data.projects[i].subdomain}">
        <div class="project_image"><img src="../JS-Project/project_images/${data.projects[i].catagory[0]}/${data.projects[i].subdomain}/${data.projects[i].subdomain}(0).png"></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class= "subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].description}</p></div></div></a>`;
        data.projects[i].name;
    }
}

for(b of document.querySelectorAll("#filter button")){
    b.addEventListener("click", e =>{
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "Clear"){
        for(let i = 0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }
    else if(button != undefined){
        for(let i = 0; i<proj.projects.length; i++){
            if(proj.projects[i].catagory.includes(button) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }
            else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }
    else{
        console.log("error, button value")
    }
}