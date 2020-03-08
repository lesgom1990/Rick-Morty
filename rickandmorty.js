const url ="https://rickandmortyapi.com/api/character/"
let datarenderimage ="";
let datarendername ="";
let datarenderlocation ="";
let datarendergender ="";
let datarenderstatus ="";
let datarenderspecies ="";

fetch(url)
.then(response =>response.json())
.then(info=>{
        callcharacter(info); 
})
.catch(err => console.log(err))

let callcharacter = infocharacter=>{
    let informacionimage = document.getElementById("infoimage");
    let informacionname = document.getElementById("infoname");
    let informacionlocation = document.getElementById("infolocation");
    let informaciongender = document.getElementById("infogender");
    let informacionstatus = document.getElementById("infostatus");
    let informacionspecies = document.getElementById("infospecies");
    for (var i=0; i<infocharacter.results.length; i++){
        datarenderimage += `"<img src="${infocharacter.results[i].image}" width="300px">`
        datarendername +="<p class= info>Name = "+infocharacter.results[i].name;
        datarenderlocation +="<p class= info> Location = "+infocharacter.results[i].location.name;
        datarendergender +="<p class= info>Gender = "+infocharacter.results[i].gender;
        datarenderstatus +="<p class= info>Status = "+infocharacter.results[i].status;
        datarenderspecies +="<p class= info>Specie = "+infocharacter.results[i].species;
    }
    console.log(datarenderimage);
    informacionimage.innerHTML += datarenderimage;
    informacionname.innerHTML += datarendername;
    informacionlocation.innerHTML += datarenderlocation;
    informaciongender.innerHTML += datarendergender;
    informacionstatus.innerHTML += datarenderstatus;
    informacionspecies.innerHTML += datarenderspecies;
}

/* Código anterior
let callcharacter = infocharacter=>{
    let informacion = document.getElementById("info");
    for (var i=0; i<infocharacter.results.length; i++){
        informacion.innerHTML= `"<img src="${infocharacter.results[i].image}" width="300px">`
        informacion.innerHTML+="<p class= info>Name = "+infocharacter.results[i].name;
        informacion.innerHTML+="<p class= info> Location = "+infocharacter.results[i].location.name;
        informacion.innerHTML+="<p class= info>Gender = "+infocharacter.results[i].gender;
        informacion.innerHTML+="<p class= info>Status = "+infocharacter.results[i].status;
        informacion.innerHTML+="<p class= info>Specie = "+infocharacter.results[i].species;
    }
    console.log(info);
}*/