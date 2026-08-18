let humanscore = 0;
let computerscore = 0;


// CHOIX DE L'ORDINATEUR

function getcomputerchoice() {

    let a = ["rock", "paper", "scissor"];

    let random_a = a[Math.floor(Math.random() * a.length)];

    return random_a;
}


// JOUER UNE MANCHE

function play(humanchoice) {

    let computerchoice = getcomputerchoice();

    console.log("You:", humanchoice);
    console.log("Computer:", computerchoice);


    if (humanchoice === "paper" && computerchoice === "scissor") {

        computerscore = computerscore + 1;

        document.querySelector("#result").textContent = "YOU LOST cry b*tch";

    }

    else if (humanchoice === "scissor" && computerchoice === "rock") {

        computerscore = computerscore + 1;

        document.querySelector("#result").textContent = "LOOSER";

    }

    else if (humanchoice === "rock" && computerchoice === "paper") {

        computerscore = computerscore + 1;

        document.querySelector("#result").textContent = "u ain't winnig just quit";

    }


    else if (humanchoice === "paper" && computerchoice === "rock") {

        humanscore = humanscore + 1;

        document.querySelector("#result").textContent = "YOU WON??!,cheater";

    }

    else if (humanchoice === "rock" && computerchoice === "scissor") {

        humanscore = humanscore + 1;

        document.querySelector("#result").textContent = "HOW THE F*CK DID U WON?!!";

    }

    else if (humanchoice === "scissor" && computerchoice === "paper") {

        humanscore = humanscore + 1;

        document.querySelector("#result").textContent = "shit,that kid is getting strong";
      
    }

    else {

        document.querySelector("#result").textContent = "if i dont win you won't";

    }


    document.querySelector("#humanscore").textContent = humanscore;

    document.querySelector("#computerscore").textContent = computerscore;
}


// BOUTON ROCK

let rock = document.querySelector("#rock");

rock.addEventListener("click", function() {

    play("rock");

});


// BOUTON PAPER

let paper = document.querySelector("#paper");

paper.addEventListener("click", function() {

    play("paper");

});


// BOUTON SCISSOR

let scissor = document.querySelector("#scissor");

scissor.addEventListener("click", function() {

    play("scissor");

});