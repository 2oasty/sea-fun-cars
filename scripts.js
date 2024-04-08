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
const KONG = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const REVERSE = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const REVERSESAFETY = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";

// This is an array of strings (TV show titles)
let moves = [

    { name: "Lache", desc: "Fundamental bar skill leading to lache to precision, lache to cat hang, and flyaways.", type: "Bar", difficulty: 2, image: FRESH_PRINCE_URL },
    { name: "Devil Drop", desc: "Frontflip from a cat hang. Can be done on walls or vertical bars.", type: "Wall", difficulty: 5, image: CURB_POSTER_URL },
    { name: "Cat Hang", desc: "Fundamental wall skill involving holding onto a wall's edge while feet pressed into wall.", type: "Wall", difficulty: 1, image: EAST_LOS_HIGH_POSTER_URL },
    { name: "Wall Flip", desc: "Running up a wall and doing a backflip off of it. Often portayed in movie stunts.", type: "Wall", difficulty: 4, image: KONG },
    { name: "Thief Vault", desc: "Variation of lazy vault in which outer leg swings over first.", type: "Vault", difficulty: 2, image: REVERSE },
    { name: "Pimp Flip", desc: "From sitting on the edge of something, swinging body down, and backflipping.", type: "Wall", difficulty: 4, image: REVERSESAFETY },
    { name: "Inward Front", desc: "Running at a wall, pressing foot against all, and fronflipping off wall.", type: "Wall", difficulty: 5, image: KONG },
    { name: "Dive Roll", desc: "Jumping and diving towards the ground into a shoulder roll.", type: "Roll", difficulty: 3, image: REVERSE },
    { name: "Crane Jump", desc: "Landing on a wall with one foot on top, the other hanging down.", type: "Jump", difficulty: 2, image: REVERSESAFETY },
    { name: "Ghost Stride", desc: "Stride variation involving switching leg midair, landing on same foot you took off of.", type: "Jump", difficulty: 3, image: REVERSESAFETY },
    { name: "Cheat Gainer", desc: "Tricking move prerequisite for corks. Involves swinging leg over shoulder in a cheated backflip.", type: "Floor", difficulty: 3, image: REVERSESAFETY },
    { name: "Wall Spin", desc: "Variation of palm spin involving placing both hands on wall and rotating body around the hands.", type: "Wall", difficulty: 3, image: REVERSESAFETY },
    { name: "Euro Step", desc: "Starting in a cat hang, stepping up the wall, and leaping to another wall behind you.", type: "Wall", difficulty: 3, image: REVERSESAFETY },
    { name: "B-Twist", desc: "Horizontal twist starting with chest facing the ground.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Raiz", desc: "A tricking move involving flipping body with chest facing sky similar to barell roll.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Reverse Vault", desc: "Fundamental vault involving placing one or both hands on object with back to object and vaulting it without feet touching.", type: "Vault", difficulty: 2, image: REVERSESAFETY },
    { name: "Double Leg", desc: "Similar setup to a raiz, but flip being a piked sideflip.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Pullover", desc: "Gymnastics move involving pulling body up and over a bar in preparation of other bar moves.", type: "Bar", difficulty: 2, image: REVERSESAFETY },
    { name: "Tunnel Flip", desc: "Similar to doing a sideflip in the direction your chest is facing.", type: "Floor", difficulty: 3, image: REVERSESAFETY },
    { name: "Backflip", desc: "A somersault involving a backwards rotation.", type: "Floor", difficulty: 3, image: REVERSESAFETY },
    { name: "Castback", desc: "Starting with hips at the bar level and hands holding body above the bar, casting legs backwards into a backflip.", type: "Wall", difficulty: 4, image: REVERSESAFETY },
    { name: "Scoot", desc: "Tricking move to gain power for leg swings. Involves placing hand on floor and swinging inside leg through to generate power for outside leg.", type: "Floor", difficulty: 1, image: REVERSESAFETY },
    { name: "360 Precision", desc: "A precision involving a 360 degree jump from platform to platform.", type: "Jump", difficulty: 4, image: REVERSESAFETY },
    { name: "Angel Drop", desc: "Starting from a cat hang, involves steping up with one leg into a backflip off the wall.", type: "Wall", difficulty: 5, image: REVERSESAFETY },
    { name: "Speed Vault", desc: "Fundamental vault. Essentially a safety vault without the placement of legs on the platform.", type: "Vault", difficulty: 1, image: REVERSESAFETY },
    { name: "Arabian", desc: "A flip starting out as a backflip and finishing as a front flip.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Shoulder Roll", desc: "Fundamental movement to parkour, roll used to disperse forces from drops and continue momentum forward.", type: "Roll", difficulty: 2, image: REVERSESAFETY },
    { name: "Buddha Drop", desc: "Starting from a cat hang, involves steping up with one leg into a sideflip into the wall.", type: "Wall", difficulty: 5, image: REVERSESAFETY },
    { name: "Webster", desc: "Variation of a frontflip involving a split step start and kicking one leg backwards for the momentum of the flip.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Climb Up", desc: "Fundamental movement to parkour. A technique used to get from a cat hang to the top of a wall.", type: "Wall", difficulty: 2, image: REVERSESAFETY },
    { name: "Aerial", desc: "Gymnastics move involving a no-handed cartwheel.", type: "Floor", difficulty: 2, image: REVERSESAFETY },
    { name: "Wall Run 270", desc: "Variation of a basic wall run involving stepping up one wall and doing a 270 degree turn to grab another wall.", type: "Wall", difficulty: 2, image: REVERSESAFETY },
    { name: "Barrel Roll", desc: "A sideways roll horizontally across the back.", type: "Roll", difficulty: 1, image: REVERSESAFETY },
    { name: "Lazy Vault", desc: "Fundamental vault. Involves approaching a platform from the side, placing a hand on the platform, and swinging inside, then outside leg over.", type: "Vault", difficulty: 1, image: REVERSESAFETY },
    { name: "Cork", desc: "A tricking move with the same beginning as the cheat gainer, but then twisting once in the air.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Dash Vault", desc: "Fundamental vault. Involves approaching a platform from the front, kicking both legs up and over the platform, and pushing it away as you pass it.", type: "Vault", difficulty: 2, image: REVERSESAFETY },
    { name: "Bar Kip", desc: "Gymnastics move involving bringing legs up to bar and utilizing momentum to swing body up and bring hips to the bar.", type: "Bar", difficulty: 3, image: REVERSESAFETY },
    { name: "Reverse Safety Vault", desc: "Fundamental vault involving approaching a platform, turning, and doing a safety vault in reverse.", type: "Vault", difficulty: 2, image: REVERSESAFETY },
    { name: "Forward Roll", desc: "Gymnastics move prerequisite for frontflips. Involves tucking chin to the chest and rolling forwards on the ground.", type: "Roll", difficulty: 1, image: REVERSESAFETY },
    { name: "Gainer", desc: "A backflip done both moving and facing forward.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Flyaway Full", desc: "Variation of a flyaway where instead of a backflip, a back full is performed.", type: "Bar", difficulty: 5, image: REVERSESAFETY },
    { name: "Swing Cast", desc: "Starting by swinging back and forth on a bar, on the back swing, the bar is let go of and a backflip is done.", type: "Bar", difficulty: 5, image: REVERSESAFETY },
    { name: "Wall Pounce", desc: "Fundamental movement to parkour. A technique to bounce off a wall and ensure a cat hang is safely engaged or as a safety measure.", type: "Wall", difficulty: 1, image: REVERSESAFETY },
    { name: "A-Twist", desc: "A twist involving starting with an aerial and rotating once upside down.", type: "Floor", difficulty: 4, image: REVERSESAFETY },
    { name: "Frontflip", desc: "A somersault involving a forwards rotation.", type: "Floor", difficulty: 3, image: REVERSESAFETY },
    { name: "Inward Side", desc: "Involves kicking off of a wall and doing a sideflip into the wall.", type: "Wall", difficulty: 4, image: REVERSESAFETY },
    { name: "Muscle Up", desc: "A technique utilizing the upper body to bring oneself from hanging on a bar to their hips at the bar.", type: "Bar", difficulty: 3, image: REVERSESAFETY },
    { name: "Palm Gainer", desc: "Involves tapping a wall with one hand and backflipping next to it, typically a forwards backflip.", type: "Wall", difficulty: 4, image: REVERSESAFETY },
    { name: "Precision Jump", desc: "Fundamental movement to parkour. Involves jumping from one thin platform to another.", type: "Jump", difficulty: 1, image: REVERSESAFETY },
    { name: "Kumquat", desc: "Flip performed by sitting on the top of a bar, leaning back, and backflipping off.", type: "Bar", difficulty: 4, image: REVERSESAFETY },
    { name: "Backward Roll", desc: "Gymnastics move prerequisite for backflips. Involves sitting on the ground, bringing knees to chest, and rolling backwards.", type: "Roll", difficulty: 1, image: REVERSESAFETY },
    { name: "Palm Spin", desc: "A movement involving placing hands on a platform, and rotating body around arms above the platform.", type: "Wall", difficulty: 2, image: REVERSESAFETY },
    { name: "Back Handspring", desc: "Gymnastics move involving lunging back, placing hands on ground, rotating body, and pushing off floor to feet.", type: "Floor", difficulty: 3, image: REVERSESAFETY },
    { name: "360 Dive Roll", desc: "A dive roll involving a horizontal 360 degree rotation before making contact with the ground", type: "Roll", difficulty: 4, image: REVERSESAFETY },
    { name: "Underbar", desc: "Fundamental movement to parkour. A technique involving jumping through vertical gap legs first, and using hands to grab top and guide body through.", type: "Bar", difficulty: 1, image: REVERSESAFETY },
    { name: "Sideflip", desc: "Flip done sideways.", type: "Floor", difficulty: 3, image: REVERSESAFETY },
    { name: "Reverse Shoulder Roll", desc: "Shoulder roll done in reverse. Used to keep momentum going backwards and avoid injury.", type: "Roll", difficulty: 2, image: REVERSESAFETY },
    { name: "Flyaway", desc: "Movement involving swinging back and forth on a bar and on the forward swing, letting go and doing a backflip.", type: "Bar", difficulty: 4, image: REVERSESAFETY },
    { name: "Butterfly Kick", desc: "A tricking move involving swinging chest down and back up and bringing legs off ground. Prerequisite for B-twist.", type: "Floor", difficulty: 2, image: REVERSESAFETY },
    { name: "Round Off", desc: "Gymnastics move involving a similar movement to a cartwheel, but snapping legs down at the end to face backwards.", type: "Floor", difficulty: 2, image: REVERSESAFETY },
    { name: "Wall Run", desc: "Fundamental movement to parkour. Involves using momentum to either run up or alongside a vertical surface.", type: "Wall", difficulty: 2, image: REVERSESAFETY },
    { name: "Cartwheel", desc: "Gymnastics move involving a sideways rotation of the body, placing hands on floor one at a time and bringing legs over.", type: "Floor", difficulty: 1, image: REVERSESAFETY },
    { name: "Tic Tac", desc: "Fundamental movement to parkour. Involves pushing off a wall with foot and launching in another direction.", type: "Wall", difficulty: 1, image: REVERSESAFETY },
    { name: "Safety Vault", desc: "Fundamental vault. Involves placing hand and outside leg on platform and passing inside leg through to other side.", type: "Vault", difficulty: 1, image: REVERSESAFETY },
    { name: "Stride", desc: "Fundamental movement to parkour. As the name implies, involves taking long strides from platform to platform.", type: "Jump", difficulty: 1, image: REVERSESAFETY },
    { name: "Wall Full", desc: "Involves running up wall and doing a backfull off.", type: "Wall", difficulty: 5, image: REVERSESAFETY },
    { name: "Kong Vault", desc: "Fundamental vault. Involves approaching platform from front, placing both hands on it, and passing both legs through hands.", type: "Vault", difficulty: 2, image: REVERSESAFETY },
    { name: "Trinity Flip", desc: "Involves placing a foot on a wall and sideflipping away from the wall. Flip as seen in The Matrix.", type: "Wall", difficulty: 4, image: REVERSESAFETY },
    { name: "Palm Flip", desc: "Movement involving placing both hands on a vertical surface, jumping, pushing off wall, and doing a backflip.", type: "Wall", difficulty: 4, image: REVERSESAFETY },
    { name: "Back Full", desc: "A twist done flipping backwards and twisting. Also known as a backflip 360.", type: "Floor", difficulty: 4, image: REVERSESAFETY }
    
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

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, header, imageURL, description, type, difficulty); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newHeader, newImageURL, newCardDesc, newCardType, newCardDifficulty) {
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
   
    let sliderElement = document.getElementById("slider");
    sliderElement.value = 3;
    let rangeVal = document.getElementById("rangeValue");
    rangeVal.innerHTML = 3;
    sliderDifficulty = 3;

    dropdownBtnLabel = document.querySelector(".sortText");
    dropdownBtnLabel.innerHTML = "Sort By:";
    dropdownBtn = document.getElementById("droppedBtns");
    dropdownBtn.style.display = "none";

    let searchBarInput = document.getElementById("searchBar");
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
    dropdownBtnLabel = document.querySelector(".sortText");
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
    dropdownBtnLabel = document.querySelector(".sortText");
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
    dropdownBtnLabel = document.querySelector(".sortText");
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
    if (searchBarInput.value == "" && moves.length == movesCopy.length) {
        numResults.style.display = 'none';
    }

    showCards();

    moves = filteredMoves;

}