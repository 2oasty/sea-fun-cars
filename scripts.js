/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */



const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let moves = [

    { name: "Safety Vault", desc: "Will Smith", type: "Roll", difficulty: 1, creator: "?", image: FRESH_PRINCE_URL },
    { name: "Speed Vault", desc: "Larry?", type: "Vault", difficulty: 2, creator: "?", image: CURB_POSTER_URL },
    { name: "Dash Vault", desc: "Pink", type: "Floor", difficulty: 3, creator: "?", image: EAST_LOS_HIGH_POSTER_URL },
    //    {name: "Kong Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Reverse Safety Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Reverse Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Lazy Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Thief Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Shoulder Roll", type: "Roll", difficulty: 1, creator: ""},
    //    {name: "Reverse Shoulder Roll", type: "Roll", difficulty: 1, creator: ""},
    //    {name: "Dive Roll", type: "Roll", difficulty: 1, creator: ""},
    //    {name: "Barrel Roll", type: "Roll", difficulty: 1, creator: ""},
    //    {name: "360 Dive Roll", type: "Roll", difficulty: 1, creator: ""},
    //    {name: "Forward Roll", type: "Roll", difficulty: 1, creator: ""},
    //    {name: "Backwards Roll", type: "Roll", difficulty: 1, creator: ""},
    //    {name: "Tic Tac", type: "Wall", difficulty: 1, creator: ""},
    //    {name: "Wall Run", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Wall Run 270", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Cathang", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Wall Pounce", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Euro Step", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Climb Up", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Palm Spin", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Wall Spin", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Wall Flip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Devil Drop", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Angel Drop", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Buddha Drop", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Palm Flip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Pimp Flip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Palm Gainer", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Trinity Flip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Wall Full", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Inward Front", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Inward Side", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Precision Jump", type: "Jump", difficulty: 1, creator: ""},
    //    {name: "Stride", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Crane Jump", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Ghost Stride", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "360 Precision", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Lache", type: "Bar", difficulty: 1, creator: ""},
    //    {name: "Underbar", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Pullover", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Bar Kip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Muscle Up", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Flyaway", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Swing Cast", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Flyaway Full", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Kumquat", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Cartwheel", type: "Floor", difficulty: 1, creator: ""},
    //    {name: "Scoot", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Round Off", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Back Handspring", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Front Handspring", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Aerial", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Raiz", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Sideflip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Backflip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Frontflip", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Arabian", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Speed Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Speed Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Speed Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Speed Vault", type: "Vault", difficulty: 1, creator: ""},
    //    {name: "Speed Vault", type: "Vault", difficulty: 1, creator: ""},
];

// Create deep copy
let movesCopy = [...moves];
let filteredMoves = [...moves];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < moves.length; i++) {
        let header = moves[i].name;
        let imageURL = moves[i].image
        let description = moves[i].desc
        let type = moves[i].type
        let difficulty = moves[i].difficulty
        let creator = moves[i].creator

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, header, imageURL, description, type, difficulty, creator); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newHeader, newImageURL, newCardDesc, newCardType, newCardDifficulty, newCardCreator) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newHeader;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newHeader + " Poster";

    const cardDesc = card.querySelector("p");
    cardDesc.textContent = newCardDesc;

    const cardType = card.querySelectorAll("li")[0];
    cardType.textContent = "Move Type: " + newCardType;

    const cardDifficulty = card.querySelectorAll("li")[1];
    cardDifficulty.textContent = "Difficulty: " + newCardDifficulty;

    const cardCreator = card.querySelectorAll("li")[2];
    cardCreator.textContent = "Creator: " + newCardCreator;



    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newHeader, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", onLoad)

function onLoad(){
    showCards();

    // Adds slider listener after page loaded, obtains value of slider
    sliderDifficulty = 3;
    const sliderElement = document.getElementById("slider");
    sliderElement.addEventListener("change", (event) => {
        sliderDifficulty = event.target.value
    });

    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup", (event) => {
        searchMove(event.target.value)
    });
}

// Function to allow clicking of div to hide and show card text
function clickToShow(cardContentDiv) {
    let list = cardContentDiv.getElementsByClassName("desc")[0]; // or .querySelector(".desc")

    if (list.style.display == 'none') {
        list.style.display = 'block';
    }
    else {
        list.style.display = 'none';
    }

}

// Filter feature
const difficultyOne = moves.filter(move => move.difficulty == 1);
const difficultyTwo = moves.filter(move => move.difficulty == 2);
const difficultyThree = moves.filter(move => move.difficulty == 3);
const difficultyFour = moves.filter(move => move.difficulty == 4);
const difficultyFive = moves.filter(move => move.difficulty == 5);

function filterDifficulty(){

    console.log("Filtered cards for difficulty: ", sliderDifficulty)
    let numResults = document.getElementById("result-number");
    numResults.style.display = 'block';
    numResults.innerHTML = "Number of results: ";

    if (sliderDifficulty == 1){
        moves = difficultyOne;
    }
    else if (sliderDifficulty == 2){
        moves = difficultyTwo;
    }
    else if (sliderDifficulty == 3) {
        moves = difficultyThree;
    }
    else if (sliderDifficulty == 4) {
        moves = difficultyFour;
    }
    else {
        moves = difficultyFive;
    }

    if (moves.length == 0){
        console.log("No results found")
        numResults.innerHTML = "No results found";
    }
    else {
        console.log("Number of results: ", moves.length)
        numResults.innerHTML = numResults.innerHTML + moves.length;
    }

    // switch(sliderDifficulty){
    //     case 1:
    //         console.log("ONE")
    //         break;
    //     case 2:
    //         moves = difficultyTwo;
    //         break;
    //     case 3:
    //         moves = difficultyThree;
    //         break;
    //     case 4:
    //         moves = difficultyFour;
    //         break;
    //     case 5:
    //         moves = difficultyFive;
    //         break;
    //     default:
    //         moves = movesCopy;
    // }

    filteredMoves = [...moves];

    showCards();

}


function resetFilter(){
    moves = [...movesCopy];
    filteredMoves = [...movesCopy];
   
    let numResults = document.getElementById("result-number");
    numResults.style.display = 'none';
   
    const sliderElement = document.getElementById("slider");
    sliderElement.value = 3;
    const rangeVal = document.getElementById("rangeValue");
    rangeVal.innerHTML = 3;
    sliderDifficulty = 3;

    dropdownBtnLabel = document.getElementById("dropBtn");
    dropdownBtnLabel.innerHTML = "Sort By:";
    dropdownBtn = document.getElementById("droppedBtns");
    dropdownBtn.style.display = "none";

    const searchBarInput = document.getElementById("searchBar");
    searchBarInput.value = "";

    console.log("Cards Reset")
   
    showCards();
}

// Sort feature
function sortDropdownMenu(){
    dropdownBtn = document.getElementById("droppedBtns");
    
    if (dropdownBtn.style.display == "none"){
        dropdownBtn.style.display = "block";
        console.log("Dropdown Menu Shown")
    }
    else {
        dropdownBtn.style.display = "none";
        console.log("Dropdown Menu Hidden")
    }
}

function sortByName(){
    dropdownBtnLabel = document.getElementById("dropBtn");
    dropdownBtnLabel.innerHTML = "Sort By:";

    moves.sort(function(a, b){
        const moveA = a.name.toUpperCase();
        const moveB = b.name.toUpperCase();

        if (moveA > moveB) {
            return 1;
        }
        else if (moveA < moveB) {
            return -1;
        }
        else {
            return 0;
        }
    });

    dropdownBtnLabel.innerHTML = dropdownBtnLabel.innerHTML + " Name";

    console.log("Sorted cards by move name")
    showCards();

}

function sortByType(){
    dropdownBtnLabel = document.getElementById("dropBtn");
    dropdownBtnLabel.innerHTML = "Sort By:";

    moves.sort(function(a, b){
        const moveA = a.type.toUpperCase();
        const moveB = b.type.toUpperCase();

        if (moveA > moveB) {
            return 1;
        }
        else if (moveA < moveB) {
            return -1;
        }
        else {
            return 0;
        }
    });

    dropdownBtnLabel.innerHTML = dropdownBtnLabel.innerHTML + " Type";

    console.log("Sorted cards by move type")
    showCards();

}

function sortByDifficulty(){
    dropdownBtnLabel = document.getElementById("dropBtn");
    dropdownBtnLabel.innerHTML = "Sort By:";

    moves.sort(function(a, b){
        const moveA = a.difficulty
        const moveB = b.difficulty

        if (moveA > moveB) {
            return 1;
        }
        else if (moveA < moveB) {
            return -1;
        }
        else {
            return 0;
        }
    });

    dropdownBtnLabel.innerHTML = dropdownBtnLabel.innerHTML + " Difficulty";

    console.log("Sorted cards by move difficulty")
    showCards();

}

function sortByCreator(){
    dropdownBtnLabel = document.getElementById("dropBtn");
    dropdownBtnLabel.innerHTML = "Sort By:";

    moves.sort(function(a, b){
        const moveA = a.creator.toUpperCase();
        const moveB = b.creator.toUpperCase();

        if (moveA > moveB) {
            return 1;
        }
        else if (moveA < moveB) {
            return -1;
        }
        else {
            return 0;
        }
    });

    dropdownBtnLabel.innerHTML = dropdownBtnLabel.innerHTML + " Creator";

    console.log("Sorted cards by move creator")
    showCards();

}


function searchMove(searchValue){

    console.log("Searching for moves including:", searchValue)

    const searchedMove = moves.filter(move => {
        return(move.name.toUpperCase().includes(searchValue.toUpperCase()))
    });

    moves = searchedMove;

    let numResults = document.getElementById("result-number");
    numResults.style.display = 'block';
    numResults.innerHTML = "Number of results: ";

    if (moves.length == 0){
        console.log("No results found")
        numResults.innerHTML = "No results found";
    }
    else {
        console.log("Number of results: ", moves.length)
        numResults.innerHTML = numResults.innerHTML + moves.length;
    }

    const searchBarInput = document.getElementById("searchBar");
    if (searchBarInput.value == "") {
        numResults.style.display = 'none';
    }

    showCards();

    moves = filteredMoves;

}