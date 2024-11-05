
function tellFortune(num_child, partner_name, geo_loc, job_title){
    return "You will be a " + job_title + " in "+geo_loc+", and married to "+partner_name+" with "+num_child+" kids.";
}

let fortune_1 = tellFortune("23","gerry","san juan", "chef");
let fortune_2 = tellFortune("4","susan","tokyo", "accountant");
let fortune_3 = tellFortune("2","greg","moracco", "ceo");

document.getElementById("p1").innerHTML = fortune_1;
document.getElementById("p2").innerHTML = fortune_2;
document.getElementById("p3").innerHTML = fortune_3;

function calculateDogAge(pups_age){
    return "Your doggie is " +(pups_age * 7)+ " years old in dog years!";
}

let dog_1 = calculateDogAge(11);
let dog_2 = calculateDogAge(3);
let dog_3 = calculateDogAge(7);

document.getElementById("p4").innerHTML = dog_1;
document.getElementById("p5").innerHTML = dog_2;
document.getElementById("p6").innerHTML = dog_3;