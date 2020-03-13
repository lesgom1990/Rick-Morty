const url ="https://rickandmortyapi.com/api/character/"
let datarender ="";
let informacion = document.getElementById("info");

fetch(url)
.then(response =>response.json())
.then(info=>{
        callcharacter(info);
})
.catch(err => console.log(err))

let callcharacter = infocharacter=>{
    
    for (var i=0; i<infocharacter.results.length; i++){
        datarender += `<div class= "character">`;
        datarender += `"<img src="${infocharacter.results[i].image}" width="300px">`;
        datarender += `"<p class= "name info"> Name = "`+infocharacter.results[i].name;
        datarender += `"<p class= "location info"> Location = "`+infocharacter.results[i].location.name;
        datarender += `"<p class= "gender info"> Gender = "`+infocharacter.results[i].gender;
        datarender += `"<p class= "status info"> Status = "`+infocharacter.results[i].status;
        datarender += `"<p class= "species info"> Specie = "`+infocharacter.results[i].species;
        datarender += "</div>";
    }
    informacion.innerHTML = datarender;
    console.log(informacion);
    console.log(datarender);
}
