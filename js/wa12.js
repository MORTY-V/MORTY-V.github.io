let myComic = {};

function generateRan(min,max){
   return (Math.floor(Math.random() * (max - min)) + min);
}

function fetchData(){ 
    let ranNum = generateRan(1,3000);

    fetch(`https://corsproxy.io/?https://xkcd.com/${ranNum}/info.0.json`)
    .then(res => {
        if (res.ok){
            return res.json()
        }
        else{
            console.log(res);
        }
    })
    .then(res => {
        
        myComic = res;
        console.log(myComic);
        imageDisplay = document.getElementById("comic");
        document.getElementById("header").innerHTML = myComic.safe_title;
        imageDisplay.src = myComic.img;
        imageDisplay.alt = myComic.alt;
        let day = myComic.day;
        let month = myComic.month;
        let year = myComic.year;
        document.getElementById("date").innerHTML = `${day}/${month}/${year}`;
    })
    .catch(error => console.log(error))
}
fetchData();

document.getElementById("generate").addEventListener("click", e => {fetchData();})
