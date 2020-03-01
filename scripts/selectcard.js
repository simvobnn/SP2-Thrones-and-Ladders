async function selectCard(selectedCard) {
    selectedCards.push(selectedCard);
    let selected = document.getElementById(selectedCard);
    selected.classList.add("selected")
    if (selectedCards.length >= 2) {
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
        window.location.href = "game.html";
    }              
}