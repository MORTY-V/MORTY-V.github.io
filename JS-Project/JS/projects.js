let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));

fetch('../JS-Project/projects.json')
.then(response => {
    return response.json();
}).then(projects => {
    proj = projects;
    siftJson(projects);
}).catch(err => {
    console.log(`error ${err}`);
})

function siftJson(listItem){
    for(let i = 0; i<listItem.projects.length; i++){
        if(listItem.projects[i].subdomain == subdomain){
            buildPage(listItem.projects[i]);
            break;
        }
        else{
            continue;
        }
    }
}

function buildPage(project){
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
}