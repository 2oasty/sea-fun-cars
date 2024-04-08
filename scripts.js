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






const LACHE_URL = "https://i.ytimg.com/vi/FuNZG4yF1jo/hqdefault.jpg";
const DEVIL_DROP_URL = "https://i.ytimg.com/vi/sPtaINcJ56Q/sddefault.jpg";
const CAT_HANG_URL = "https://i.ytimg.com/vi/hARvGWWcPZA/hqdefault.jpg";
const WALL_FLIP_URL = "https://i.ytimg.com/vi/MmLypsvVBqQ/sddefault.jpg";
const THIEF_VAULT_URL = "https://i.ytimg.com/vi/JOhEQwVpAEk/hqdefault.jpg";
const PIMP_FLIP_URL = "https://i.ytimg.com/vi/PF4ITQIAFhE/sddefault.jpg";
const INWARD_FRONT_URL = "https://i.ytimg.com/vi/Z0JH4q29Zuw/sddefault.jpg";
const DIVE_ROLL_URL = "https://i.ytimg.com/vi/GHGUNOrW9RE/sddefault.jpg";
const CRANE_JUMP_URL = "https://i.ytimg.com/vi/HtZij4BnxM4/hqdefault.jpg";
const GHOST_STRIDE_URL = "https://i.ytimg.com/vi/TL2jEYBruSg/sddefault.jpg?v=5ebf5a2a";
const CHEAT_GAINER_URL = "https://i.ytimg.com/vi/aNy4JpNBa58/hqdefault.jpg";
const WALL_SPIN_URL = "https://i.ytimg.com/vi/3y3U6jAjpaM/hqdefault.jpg";
const EURO_STEP_URL = "https://i.ytimg.com/vi/qOduMtzjgXE/sddefault.jpg";
const BTWIST_URL = "https://i.ytimg.com/vi/1C4l50GowkU/sddefault.jpg";
const RAIZ_URL = "https://i.ytimg.com/vi/fp8_fq97P6w/hqdefault.jpg";
const REVERSE_VAULT_URL = "https://i.ytimg.com/vi/sXyyi4q1Jp4/sddefault.jpg";
const DOUBLE_LEG_URL = "https://i.ytimg.com/vi/QYFvMaHK26o/hqdefault.jpg";
const PULLOVER_URL = "https://i.ytimg.com/vi/nOA5qe73lkY/sddefault.jpg";
const TUNNEL_URL = "https://i.ytimg.com/vi/YtqYma6Nr8I/hqdefault.jpg";
const BACKFLIP_URL = "https://i.ytimg.com/vi/SJUqEy0mpSo/hqdefault.jpg";
const CASTAWAY_URL = "https://i.ytimg.com/vi/PFiOA_jGMeU/hqdefault.jpg";
const SCOOT_URL = "https://i.ytimg.com/vi/ZlseIYawXiM/sddefault.jpg";
const PRE360_URL = "https://i.ytimg.com/vi/jgkdLk_IuEQ/hqdefault.jpg";
const CAT_LEAP_URL = "https://i.ytimg.com/vi/4AEr7PB_vPs/hqdefault.jpg";
const ANGEL_DROP_URL = "https://i.ytimg.com/vi/gRhwjTf1Inc/hqdefault.jpg";
const SPEED_VAULT_URL = "https://i.ytimg.com/vi/gCoY76Mb9mI/hqdefault.jpg";
const ARABIAN_URL = "https://i.ytimg.com/vi/85g2l7UUMrc/sddefault.jpg";
const SHOULDER_ROLL_URL = "https://i.ytimg.com/vi/6x-cG9giKXY/hqdefault.jpg";
const WEBSTER_URL = "https://i.ytimg.com/vi/P0cNfRLNGBs/sddefault.jpg";
const CLIMB_UP_URL = "https://i.ytimg.com/vi/QhrRKTZSY5U/hqdefault.jpg";
const AERIAL_URL = "https://i.ytimg.com/vi/SxppmrQJhEc/hqdefault.jpg";
const BARREL_ROLL_URL = "https://i.ytimg.com/vi/wEuaTr8WACk/hqdefault.jpg";
const LAZY_VAULT_URL = "https://i.ytimg.com/vi/3bLX2VJZMgk/hqdefault.jpg";
const CORK_URL = "https://i.ytimg.com/vi/QB9mUIY_beg/sddefault.jpg";
const DASH_VAULT_URL = "https://i.ytimg.com/vi/9E-QcfGC0rQ/hqdefault.jpg";
const BAR_KIP_URL = "https://i.ytimg.com/vi/6Md3KrO6IzE/hqdefault.jpg";
const REVERSE_SAFETY_VAULT_URL = "https://breakingmuscle.com//wp-content/uploads/2013/05/stepvault2.jpg";
const FORWARD_ROLL_URL = "https://i.ytimg.com/vi/XPlsmgMLf8E/sddefault.jpg";
const GAINER_URL = "https://i.ytimg.com/vi/0I-ue65NaOc/sddefault.jpg";
const FLYAWAY_FULL_URL = "https://i.ytimg.com/vi/rLaCPL4KJKQ/hqdefault.jpg";
const SWING_CAST_URL = "https://i.ytimg.com/vi/1lr-rKwS8rc/hqdefault.jpg";
const WALL_POUNCE_URL = "https://i.ytimg.com/vi/3pLcRZHEUIA/hqdefault.jpg";
const ATWIST_URL = "https://i.ytimg.com/vi/xyHTfY33k8g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDVF7VB-46s7QBQXH89N55BYj3jKA";
const FRONTFLIP_URL = "https://i.ytimg.com/vi/vY5Wta8KFrM/hqdefault.jpg";
const INWARD_SIDE_URL = "https://i.ytimg.com/vi/ZwxCY953I6I/hqdefault.jpg";
const MUSCLE_UP_URL = "https://i.ytimg.com/vi/w6nAUtBudJ0/hqdefault.jpg";
const DOUBLE_KONG_URL = "https://i.ytimg.com/vi/9pCTmdbggsE/hqdefault.jpg";
const PRECISION_URL = "https://i.ytimg.com/vi/9sb4TYNHGio/sddefault.jpg";
const KUMQUAT_URL = "https://i.ytimg.com/vi/S68cs3jheFw/sddefault.jpg";
const BACKWARD_ROLL_URL = "https://www.wikihow.com/images/thumb/9/9b/Do-a-Backward-Roll-Step-9-Version-5.jpg/550px-nowatermark-Do-a-Backward-Roll-Step-9-Version-5.jpg";
const PALM_SPIN_URL = "https://i.ytimg.com/vi/h0_oyA7FC_o/hqdefault.jpg";
const BACK_HANDSPRING_URL = "https://i.ytimg.com/vi/pDefBB6Vc4o/hqdefault.jpg";
const DIVE_ROLL_360_URL = "https://i.ytimg.com/vi/7OaPBbDE1OA/sddefault.jpg";
const UNDERBAR_URL = "https://i.ytimg.com/vi/ZKSaCLPsYj0/sddefault.jpg";
const SIDEFLIP_URL = "https://i.ytimg.com/vi/8I7fHSGHrM8/hqdefault.jpg";
const REVERSE_SHOULDER_ROLL_URL = "https://i.ytimg.com/vi/Xpq20Bizkdg/sddefault.jpg";
const FLYAWAY_URL = "https://i.ytimg.com/vi/zfh_LvFuHXo/hqdefault.jpg";
const BUTTERFLY_KICK_URL = "https://i.ytimg.com/vi/Fj2Vhv-TFcA/sddefault.jpg";
const ROUND_OFF_URL = "https://www.wikihow.com/images/thumb/e/e2/Do-a-Round-Off-in-Gymnastics-Step-9-Version-2.jpg/550px-nowatermark-Do-a-Round-Off-in-Gymnastics-Step-9-Version-2.jpg";
const WALL_RUN_URL = "https://i.ytimg.com/vi/iZo1t0c__eU/hqdefault.jpg";
const CARTWHEEL_URL = "https://i0.wp.com/christiantkd.com/wp-content/uploads/2014/06/cartwheel.jpg?ssl=1";
const DASH_BOMB_URL = "https://i.ytimg.com/vi/7Xxboaid804/sddefault.jpg";
const TIC_TAC_URL = "https://i.ytimg.com/vi/8VnGI31lp0w/hqdefault.jpg";
const SAFETY_VAULT_URL = "https://i.ytimg.com/vi/OZFnbIOmmIY/hqdefault.jpg";
const STRIDE_URL = "https://i.ytimg.com/vi/oR9dWnI4tps/sddefault.jpg";
const WALL_FULL_URL = "https://i.ytimg.com/vi/7Pygik97gsI/hqdefault.jpg";
const KONG_VAULT_URL = "https://i.ytimg.com/vi/lFvqnWhi-fQ/hqdefault.jpg";
const TRINITY_FLIP_URL = "https://i.ytimg.com/vi/vInITvGS0qE/hqdefault.jpg";
const PALM_FLIP_URL = "https://i.ytimg.com/vi/KAg6ZapawIM/hqdefault.jpg";
const BACK_FULL_URL = "https://i.ytimg.com/vi/lq97QJgcz6U/hqdefault.jpg";

// Dataset defined by array of objects
let moves = [

    { name: "Lache", desc: "Fundamental bar skill leading to lache to precision, lache to cat hang, and flyaways.", type: "Bar", difficulty: 2, image: LACHE_URL },
    { name: "Devil Drop", desc: "Frontflip from a cat hang. Can be done on walls or vertical bars.", type: "Wall", difficulty: 5, image: DEVIL_DROP_URL },
    { name: "Cat Hang", desc: "Fundamental wall skill involving holding onto a wall's edge while feet pressed into wall.", type: "Wall", difficulty: 1, image: CAT_HANG_URL },
    { name: "Wall Flip", desc: "Running up a wall and doing a backflip off of it. Often portayed in movie stunts.", type: "Wall", difficulty: 4, image: WALL_FLIP_URL },
    { name: "Thief Vault", desc: "Variation of lazy vault in which outer leg swings over first.", type: "Vault", difficulty: 2, image: THIEF_VAULT_URL },
    { name: "Pimp Flip", desc: "From sitting on the edge of something, swinging body down, and backflipping.", type: "Wall", difficulty: 4, image: PIMP_FLIP_URL },
    { name: "Inward Front", desc: "Running at a wall, pressing foot against all, and fronflipping off wall.", type: "Wall", difficulty: 5, image: INWARD_FRONT_URL },
    { name: "Dive Roll", desc: "Jumping and diving towards the ground into a shoulder roll.", type: "Roll", difficulty: 3, image: DIVE_ROLL_URL },
    { name: "Crane Jump", desc: "Landing on a wall with one foot on top, the other hanging down.", type: "Jump", difficulty: 2, image: CRANE_JUMP_URL },
    { name: "Ghost Stride", desc: "Stride variation involving switching leg midair, landing on same foot you took off of.", type: "Jump", difficulty: 3, image: GHOST_STRIDE_URL },
    { name: "Cheat Gainer", desc: "Tricking move prerequisite for corks. Involves swinging leg over shoulder in a cheated backflip.", type: "Floor", difficulty: 3, image: CHEAT_GAINER_URL },
    { name: "Wall Spin", desc: "Variation of palm spin involving placing both hands on wall and rotating body around the hands.", type: "Wall", difficulty: 3, image: WALL_SPIN_URL },
    { name: "Euro Step", desc: "Starting in a cat hang, stepping up the wall, and leaping to another wall behind you.", type: "Wall", difficulty: 3, image: EURO_STEP_URL },
    { name: "B-Twist", desc: "Horizontal twist starting with chest facing the ground.", type: "Floor", difficulty: 4, image: BTWIST_URL },
    { name: "Raiz", desc: "A tricking move involving flipping body with chest facing sky similar to barell roll.", type: "Floor", difficulty: 4, image: RAIZ_URL },
    { name: "Reverse Vault", desc: "Fundamental vault involving placing one or both hands on object with back to object and vaulting it without feet touching.", type: "Vault", difficulty: 2, image: REVERSE_VAULT_URL },
    { name: "Double Leg", desc: "Similar setup to a raiz, but flip being a piked sideflip.", type: "Floor", difficulty: 4, image: DOUBLE_LEG_URL },
    { name: "Pullover", desc: "Gymnastics move involving pulling body up and over a bar in preparation of other bar moves.", type: "Bar", difficulty: 2, image: PULLOVER_URL },
    { name: "Tunnel Flip", desc: "Similar to doing a sideflip in the direction your chest is facing.", type: "Floor", difficulty: 3, image: TUNNEL_URL },
    { name: "Backflip", desc: "A somersault involving a backwards rotation.", type: "Floor", difficulty: 3, image: BACKFLIP_URL },
    { name: "Castaway", desc: "Starting with hips at the bar level and hands holding body above the bar, casting legs backwards into a backflip.", type: "Wall", difficulty: 4, image: CASTAWAY_URL },
    { name: "Scoot", desc: "Tricking move to gain power for leg swings. Involves placing hand on floor and swinging inside leg through to generate power for outside leg.", type: "Floor", difficulty: 1, image: SCOOT_URL },
    { name: "360 Precision", desc: "A precision involving a 360 degree jump from platform to platform.", type: "Jump", difficulty: 4, image: PRE360_URL },
    { name: "Cat Leap", desc: "Fundamental movement to parkour. Involves jumping to a wall and grabbing the wall in a cat hang.", type: "Jump", difficulty: 2, image: CAT_LEAP_URL },
    { name: "Angel Drop", desc: "Starting from a cat hang, involves steping up with one leg into a backflip off the wall.", type: "Wall", difficulty: 5, image: ANGEL_DROP_URL },
    { name: "Speed Vault", desc: "Fundamental vault. Essentially a safety vault without the placement of legs on the platform.", type: "Vault", difficulty: 1, image: SPEED_VAULT_URL },
    { name: "Arabian", desc: "A flip starting out as a backflip and finishing as a front flip.", type: "Floor", difficulty: 4, image: ARABIAN_URL },
    { name: "Shoulder Roll", desc: "Fundamental movement to parkour, roll used to disperse forces from drops and continue momentum forward.", type: "Roll", difficulty: 2, image: SHOULDER_ROLL_URL },
    { name: "Webster", desc: "Variation of a frontflip involving a split step start and kicking one leg backwards for the momentum of the flip.", type: "Floor", difficulty: 4, image: WEBSTER_URL },
    { name: "Climb Up", desc: "Fundamental movement to parkour. A technique used to get from a cat hang to the top of a wall.", type: "Wall", difficulty: 2, image: CLIMB_UP_URL },
    { name: "Aerial", desc: "Gymnastics move involving a no-handed cartwheel.", type: "Floor", difficulty: 2, image: AERIAL_URL },
    { name: "Barrel Roll", desc: "A sideways roll horizontally across the back.", type: "Roll", difficulty: 1, image: BARREL_ROLL_URL },
    { name: "Lazy Vault", desc: "Fundamental vault. Involves approaching a platform from the side, placing a hand on the platform, and swinging inside, then outside leg over.", type: "Vault", difficulty: 1, image: LAZY_VAULT_URL },
    { name: "Cork", desc: "A tricking move with the same beginning as the cheat gainer, but then twisting once in the air.", type: "Floor", difficulty: 4, image: CORK_URL },
    { name: "Dash Vault", desc: "Fundamental vault. Involves approaching a platform from the front, kicking both legs up and over the platform, and pushing it away as you pass it.", type: "Vault", difficulty: 2, image: DASH_VAULT_URL },
    { name: "Bar Kip", desc: "Gymnastics move involving bringing legs up to bar and utilizing momentum to swing body up and bring hips to the bar.", type: "Bar", difficulty: 3, image: BAR_KIP_URL },
    { name: "Reverse Safety Vault", desc: "Fundamental vault involving approaching a platform, turning, and doing a safety vault in reverse.", type: "Vault", difficulty: 2, image: REVERSE_SAFETY_VAULT_URL },
    { name: "Forward Roll", desc: "Gymnastics move prerequisite for frontflips. Involves tucking chin to the chest and rolling forwards on the ground.", type: "Roll", difficulty: 1, image: FORWARD_ROLL_URL },
    { name: "Gainer", desc: "A backflip done both moving and facing forward.", type: "Floor", difficulty: 4, image: GAINER_URL },
    { name: "Flyaway Full", desc: "Variation of a flyaway where instead of a backflip, a back full is performed.", type: "Bar", difficulty: 5, image: FLYAWAY_FULL_URL },
    { name: "Swing Cast", desc: "Starting by swinging back and forth on a bar, on the back swing, the bar is let go of and a backflip is done.", type: "Bar", difficulty: 5, image: SWING_CAST_URL },
    { name: "Wall Pounce", desc: "Fundamental movement to parkour. A technique to bounce off a wall and ensure a cat hang is safely engaged or as a safety measure.", type: "Wall", difficulty: 1, image: WALL_POUNCE_URL },
    { name: "A-Twist", desc: "A twist involving starting with an aerial and rotating once upside down.", type: "Floor", difficulty: 4, image: ATWIST_URL },
    { name: "Frontflip", desc: "A somersault involving a forwards rotation.", type: "Floor", difficulty: 3, image: FRONTFLIP_URL },
    { name: "Inward Side", desc: "Involves kicking off of a wall and doing a sideflip into the wall.", type: "Wall", difficulty: 4, image: INWARD_SIDE_URL },
    { name: "Muscle Up", desc: "A technique utilizing the upper body to bring oneself from hanging on a bar to their hips at the bar.", type: "Bar", difficulty: 3, image: MUSCLE_UP_URL },
    { name: "Double Kong", desc: "As the name implies, the movement is a kong followed by another kong without touching your feet to the ground.", type: "Vault", difficulty: 3, image: DOUBLE_KONG_URL },
    { name: "Precision Jump", desc: "Fundamental movement to parkour. Involves jumping from one thin platform to another.", type: "Jump", difficulty: 1, image: PRECISION_URL },
    { name: "Kumquat", desc: "Flip performed by sitting on the top of a bar, leaning back, and backflipping off.", type: "Bar", difficulty: 4, image: KUMQUAT_URL },
    { name: "Backward Roll", desc: "Gymnastics move prerequisite for backflips. Involves sitting on the ground, bringing knees to chest, and rolling backwards.", type: "Roll", difficulty: 1, image: BACKWARD_ROLL_URL },
    { name: "Palm Spin", desc: "A movement involving placing hands on a platform, and rotating body around arms above the platform.", type: "Wall", difficulty: 2, image: PALM_SPIN_URL },
    { name: "Back Handspring", desc: "Gymnastics move involving lunging back, placing hands on ground, rotating body, and pushing off floor to feet.", type: "Floor", difficulty: 3, image: BACK_HANDSPRING_URL },
    { name: "360 Dive Roll", desc: "A dive roll involving a horizontal 360 degree rotation before making contact with the ground", type: "Roll", difficulty: 4, image: DIVE_ROLL_360_URL },
    { name: "Underbar", desc: "Fundamental movement to parkour. A technique involving jumping through vertical gap legs first, and using hands to grab top and guide body through.", type: "Bar", difficulty: 1, image: UNDERBAR_URL },
    { name: "Sideflip", desc: "Flip done sideways.", type: "Floor", difficulty: 3, image: SIDEFLIP_URL },
    { name: "Reverse Shoulder Roll", desc: "Shoulder roll done in reverse. Used to keep momentum going backwards and avoid injury.", type: "Roll", difficulty: 2, image: REVERSE_SHOULDER_ROLL_URL },
    { name: "Flyaway", desc: "Movement involving swinging back and forth on a bar and on the forward swing, letting go and doing a backflip.", type: "Bar", difficulty: 4, image: FLYAWAY_URL },
    { name: "Butterfly Kick", desc: "A tricking move involving swinging chest down and back up and bringing legs off ground. Prerequisite for B-twist.", type: "Floor", difficulty: 2, image: BUTTERFLY_KICK_URL },
    { name: "Round Off", desc: "Gymnastics move involving a similar movement to a cartwheel, but snapping legs down at the end to face backwards.", type: "Floor", difficulty: 2, image: ROUND_OFF_URL },
    { name: "Wall Run", desc: "Fundamental movement to parkour. Involves using momentum to either run up or alongside a vertical surface.", type: "Wall", difficulty: 2, image: WALL_RUN_URL },
    { name: "Cartwheel", desc: "Gymnastics move involving a sideways rotation of the body, placing hands on floor one at a time and bringing legs over.", type: "Floor", difficulty: 1, image: CARTWHEEL_URL },
    { name: "Dash Bomb", desc: "Advanced movement based off the dash vault. A dash vault into a front flip.", type: "Vault", difficulty: 5, image: DASH_BOMB_URL },
    { name: "Tic Tac", desc: "Fundamental movement to parkour. Involves pushing off a wall with foot and launching in another direction.", type: "Wall", difficulty: 1, image: TIC_TAC_URL },
    { name: "Safety Vault", desc: "Fundamental vault. Involves placing hand and outside leg on platform and passing inside leg through to other side.", type: "Vault", difficulty: 1, image: SAFETY_VAULT_URL },
    { name: "Stride", desc: "Fundamental movement to parkour. As the name implies, involves taking long strides from platform to platform.", type: "Jump", difficulty: 1, image: STRIDE_URL },
    { name: "Wall Full", desc: "Involves running up wall and doing a backfull off.", type: "Wall", difficulty: 5, image: WALL_FULL_URL },
    { name: "Kong Vault", desc: "Fundamental vault. Involves approaching platform from front, placing both hands on it, and passing both legs through hands.", type: "Vault", difficulty: 2, image: KONG_VAULT_URL },
    { name: "Trinity Flip", desc: "Involves placing a foot on a wall and sideflipping away from the wall. Flip as seen in The Matrix.", type: "Wall", difficulty: 4, image: TRINITY_FLIP_URL },
    { name: "Palm Flip", desc: "Movement involving placing both hands on a vertical surface, jumping, pushing off wall, and doing a backflip.", type: "Wall", difficulty: 4, image: PALM_FLIP_URL },
    { name: "Back Full", desc: "A twist done flipping backwards and twisting. Also known as a backflip 360.", type: "Floor", difficulty: 4, image: BACK_FULL_URL }
    
];

// Create copies of dataset
let movesCopy = [...moves];
let filteredMoves = [...moves];

// Initialize variables
let sliderDifficulty = 3;
let sliderDifficultyCopy = sliderDifficulty;
let searchedValue = "";
let isChecked = false;
const difficultyOne = moves.filter(move => move.difficulty == 1);
const difficultyTwo = moves.filter(move => move.difficulty == 2);
const difficultyThree = moves.filter(move => move.difficulty == 3);
const difficultyFour = moves.filter(move => move.difficulty == 4);
const difficultyFive = moves.filter(move => move.difficulty == 5);

// This function adds cards to the page to display the data in the array
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
    const sliderElement = document.getElementById("slider");
    sliderElement.addEventListener("change", (event) => {
        sliderDifficulty = event.target.value;
        sliderDifficultyCopy = sliderDifficulty
    });

    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup", (event) => {
        searchedValue = event.target.value
    });

    const checkboxValue = document.getElementById("difficultyCheck");
    checkboxValue.addEventListener("change", (event) => {
        isChecked = event.target.checked
    })
}

// Function to allow clicking of div to hide and show card text
function clickToShow(cardContentDiv) {
    const list = cardContentDiv.querySelector(".desc");

    if (list.style.display == 'none') {
        list.style.display = 'block';
    }
    else {
        list.style.display = 'none';
    }
}

// Function filters card by search and/or difficulty
function filterCards() {

    if (isChecked == false) {
        sliderDifficulty = 0;
    }
    else {
        sliderDifficulty = sliderDifficultyCopy;
    }

    console.log("Filtered cards for difficulty:", sliderDifficulty, "and text:", searchedValue)
    const numResults = document.getElementById("result-number");
    numResults.style.display = "block";
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
    else if (sliderDifficulty == 5) {
        moves = difficultyFive;
    }
    else {
        moves = movesCopy;
    }

    filteredMoves = moves.filter(move => {
        return(move.name.toUpperCase().includes(searchedValue.toUpperCase()))
    });

    moves = filteredMoves;

    if (moves.length == 0){
        console.log("No results found")
        numResults.innerHTML = "No results found";
    }
    else if (moves.length == movesCopy.length){
        numResults.style.display = "none";
    }
    else {
        console.log("Number of results: ", moves.length)
        numResults.innerHTML = numResults.innerHTML + moves.length;
    }

    showCards()
}

// Function to reset cards and page to intial load
function resetFilter(){
    moves = [...movesCopy];
    filteredMoves = [...movesCopy];
   
    const numResults = document.getElementById("result-number");
    numResults.style.display = 'none';
   
    const sliderElement = document.getElementById("slider");
    sliderElement.value = 3;
    const rangeVal = document.getElementById("rangeValue");
    rangeVal.innerHTML = 3;
    sliderDifficulty = 3;

    const dropdownBtnLabel = document.querySelector(".sortText");
    dropdownBtnLabel.innerHTML = "Sort By:";
    const dropdownBtn = document.getElementById("droppedBtns");
    dropdownBtn.style.display = "none";

    const searchBarInput = document.getElementById("searchBar");
    searchBarInput.value = "";

    const checkboxValue = document.getElementById("difficultyCheck");
    checkboxValue.checked = false;
    isChecked = false;
    const diffText = document.querySelector(".difficultySection");
    diffText.style.filter = "opacity(30%)";


    console.log("Cards Reset")
   
    showCards();
}

// Function to show and hide drop down for sort button
function sortDropdownMenu(){
    const dropdownBtn = document.getElementById("droppedBtns");
    
    if (dropdownBtn.style.display == "none"){
        dropdownBtn.style.display = "block";
        console.log("Dropdown Menu Shown")
    }
    else {
        dropdownBtn.style.display = "none";
        console.log("Dropdown Menu Hidden")
    }
}

// Function to sort cards by move name
function sortByName(){
    const dropdownBtnLabel = document.querySelector(".sortText");
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

// Function to sort cards by move type
function sortByType(){
    const dropdownBtnLabel = document.querySelector(".sortText");
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

// Function to sort cards by move difficulty
function sortByDifficulty(){
    const dropdownBtnLabel = document.querySelector(".sortText");
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

function filterColorChange() {
    const diffText = document.querySelector(".difficultySection");
    if (isChecked == false) {
        // diffText.style.color = "black";
        diffText.style.filter = "opacity(100%)";
    }
    else if (isChecked == true) {
        // diffText.style.color = "#d1d1d1";
        diffText.style.filter = "opacity(30%)";
    }
}