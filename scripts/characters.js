document.addEventListener('DOMContentLoaded', () => {
    selectedCards = [];
    getCharacters()
        .catch(err => console.error(err));
    

    async function getCharacters() {
        const response = await fetch('/scripts/characters.json');
        const result = await response.json();
        allCharacters = result;
        let findCharacters = [];
        let selectedCharacters = [];
        findCharacters.push("Jon Snow", "Tyrion Lannister", "Eddard Stark", "Stannis Baratheon", "Jaime Lannister", "Varys", "Jorah Mormont", "Oberyn Nymeros Martell", "Bronn", "Petyr Baelish");
        for (i = 0; i < allCharacters.length; i++) {
            for (j = 0; j < findCharacters.length; j++) {
                if (allCharacters[i].Name === findCharacters[j]) {                    
                    selectedCharacters.push(allCharacters[i]);                    
                } 
            } 
        } 
        populateCards(selectedCharacters);        
    }
    
    let populateCards = (selectedCharacters => {
        cardContainer = document.querySelector("#cardcontainer");
        selectedCharacters.forEach(card => {            
            cardContainer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4" id="${card.Id}" onclick="selectCard(${card.Id})")" style="cursor: pointer;">
                <div class="card text-center">
                    <div class="card-body">
                        <h3 class="card-title">${card.Name}</h3>
                        <h4 class="card-subtitle">"${card.Aliases[0]}"</h4>
                        <h4 class="mt-5"><span>Titles:</span> ${card.Titles.join(", ")}</h4>
                    </div>
                </div>
            </div>         
            `           
        }); 
    });
});