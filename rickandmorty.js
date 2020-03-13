const url ="https://rickandmortyapi.com/api/character/"
let datarenderimage ="";
let datarendername ="";
let datarenderlocation ="";
let datarendergender ="";
let datarenderstatus ="";
let datarenderspecies ="";
let arrayimage;
let arrayname;
let arraylocation;
let arraygender;
let arraystatus;
let arrayspecies;
let informacionimage = document.getElementById("infoimage");
let informacionname = document.getElementById("infoname");
let informacionlocation = document.getElementById("infolocation");
let informaciongender = document.getElementById("infogender");
let informacionstatus = document.getElementById("infostatus");
let informacionspecies = document.getElementById("infospecies");

fetch(url)
.then(response =>response.json())
.then(info=>{
        callcharacter(info);
})
.catch(err => console.log(err))

let callcharacter = infocharacter=>{
    
    for (var i=0; i<infocharacter.results.length; i++){
        datarenderimage += `"<img src="${infocharacter.results[i].image}" width="300px">`
        datarendername +="<p class= info>Name = "+infocharacter.results[i].name;
        datarenderlocation +="<p class= info> Location = "+infocharacter.results[i].location.name;
        datarendergender +="<p class= info>Gender = "+infocharacter.results[i].gender;
        datarenderstatus +="<p class= info>Status = "+infocharacter.results[i].status;
        datarenderspecies +="<p class= info>Specie = "+infocharacter.results[i].species;
    }
    informacionimage.innerHTML += datarenderimage;
    informacionname.innerHTML += datarendername;
    informacionlocation.innerHTML += datarenderlocation;
    informaciongender.innerHTML += datarendergender;
    informacionstatus.innerHTML += datarenderstatus;
    informacionspecies.innerHTML += datarenderspecies;
    console.log(informacionname);
    var separador = "<p class= info>";
    cambioStringToArray(datarendername, separador);
}

function cambioStringToArray(str, expresion){
var array = str.split(expresion);
console.log(array);
}