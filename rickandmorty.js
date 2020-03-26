const url ="https://rickandmortyapi.com/api/character/"
let datarender ="";
let information = document.getElementById("info");
let charactersList = [];

fetch(url)
.then(response =>response.json())
.then(info=>{
        renderCharacter(info.results);
        charactersList = info.results;
})
.catch(err => console.log(err))

let renderCharacter = infocharacter=>{
    for (var i = 0; i < infocharacter.length; i++) {
        if(i === 0){
            datarender += `<div class= "row">`
        }
        else if(i % 4 === 0 ){
            datarender += "</div>";
            datarender += `<div class= "row">`       
        }
        
        datarender += `<div class= "col-lg-3 col-md-6">`
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
        datarender += "</div>";

        if(i === infocharacter.length - 1){
             
            datarender += "</div>";
        }
       
    }
        information.innerHTML = datarender; 
    }

let filterCharacter = (event) =>
{
    let name = document.getElementById("namecharacter").value.toUpperCase();
    let location = document.getElementById("location").value.toUpperCase();
    let gender = document.getElementById("gender").value.toUpperCase();
    let status = document.getElementById("status").checked?'Alive':'Dead'; //operador ternario, el ? es una condición
    console.log({name, location, gender, status})
    let newCharacterList = [];
    for (var i=0; i<charactersList.length; i++){
        let cName = charactersList[i].name.toUpperCase();
        let cLocation = charactersList[i].location.name.toUpperCase();
        let cGender = charactersList[i].gender.toUpperCase();
        let cStatus = charactersList[i].status;
        if (cName.includes(name) && cLocation.includes(location) && (cGender === gender || gender ==="NONE") && cStatus.includes(status)){
            newCharacterList.push(charactersList[i]);
        }
        datarender = ""; 
        renderCharacter(newCharacterList);
    }
}