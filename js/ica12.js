let myObject = {};

function fetchData(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(res => {
        if (res.ok){
            return res.json()
        }
        else{
            console.log(res);
        }
    })
    .then(res => {
        myObject = res;
        console.log(myObject);
        document.getElementById("jokes").innerHTML = myObject.joke;
    })
    .catch(error => console.log(error))
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})
