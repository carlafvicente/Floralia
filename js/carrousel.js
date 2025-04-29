var carrousel = document.querySelector("#carrousel");
var cards = carrousel.querySelectorAll("div.card");

var currentCardIndex = 0;

function showCurrentCard(index) {
    if (index !== currentCardIndex) {
        cards[currentCardIndex].style.display = "none";
    };
    cards[index].style.display = "flex";
    currentCardIndex = index;
};

function showPrevious() {
    index =
        currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
    showCurrentCard(index);
};

function showNext() {
    index =
        currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;
    showCurrentCard(index);
};

showCurrentCard(currentCardIndex);