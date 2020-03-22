const url ="https://rickandmortyapi.com/api/character/"
let datarender ="";
let informacion = document.getElementById("info");
let charactersList = [];

fetch(url)
.then(response =>response.json())
.then(info=>{
        renderCharacter(info.results);
        charactersList = info.results;
})
.catch(err => console.log(err))

let renderCharacter = infocharacter=>{
    
    for (var i=0; i<infocharacter.length; i++){
        datarender += `<div class= "character">`;
        datarender += `<div class= "characterpicture">`;
        datarender += `<img src="${infocharacter[i].image}" width="300px">`;
        datarender += "</div>";
        datarender += `<div class= "generalinfo">`;
        datarender += `<p class= "name info"> Name: `+infocharacter[i].name;
        datarender += `<p class= "location info"> Location: `+infocharacter[i].location.name;
        datarender += `<p class= "gender info"> Gender: `+infocharacter[i].gender;
        datarender += `<p class= "status info"> Status: `+infocharacter[i].status;
        datarender += `<p class= "species info"> Specie: `+infocharacter[i].species;
        datarender += "</div>";
        datarender += "</div>";
    }
    informacion.innerHTML = datarender; 
}

let filterCharacter = (event) =>
{
    // let filteredCharacter = document.getElementById("namecharacter");
    let filteredCharacter = event.target.value;
    let charactername = filteredCharacter;
    let name1 = charactername.toUpperCase();
    let newCharacterList = [];
    for (var i=0; i<charactersList.length; i++){
        let name2 = charactersList[i].name.toUpperCase();
        if (name2.includes(name1)){
            newCharacterList.push(charactersList[i]);
        }
        datarender = ""; 
        renderCharacter(newCharacterList);
    } 
}
