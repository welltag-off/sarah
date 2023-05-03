//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let ctn = document.getElementById("continue");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 16;
let countdown;


const quizArray = [
    {
        id: "0",
        question: "Sous quel nom Akihiko Kayaba était-il connu dans le monde de S.A.O ?",
        options: ["Heathcliff", "Ahiki", "Kayaba", "Ratcliff"],
        correct: "Heathcliff",
    },
    {
        id: "1",
        question: "Pourquoi Asuna ne se réveille-t-elle pas une fois le jeu fini ?",
        options: ["Elle est morte.", "Elle est dans un coma grave.", "Elle est restée dans S.A.O.", "Elle est prisonnière d'un autre jeu."],
        correct: "Elle est prisonnière d'un autre jeu.",
    },
    {
        id: "2",
        question: "Quelle race choisit Kirito dans Alfheim Online ?",
        options: ["Il choisit la race des Gnomes.", "Il choisit la race des Spriggans.", "Il choisit la race des Cait Siths.", "Il choisit la race des Sylphs."],
        correct: "Il choisit la race des Spriggans.",
    },
    {
        id: "3",
        question: "Qui est le roi de ce nouveau jeu ?",
        options: ["Omelon", "Le King", "Elfman", "Oberon"],
        correct: "Oberon",
    },
    {
        id: "4",
        question: "Quelle est sa réelle identité ?",
        options: ["Nobuyuki Sugo", "Bobyuki Chuga", "Kotetsu Omuro", "Il ne le dit pas."],
        correct: "Nobuyuki Sugo",
    },
    {
        id: "5",
        question: "Suguha est-elle réellement la sœur de Kirito ?",
        options: ["Oui, ils ont la même mère.", "C'est personnel.", "Non, malheureusement.", "Suguha est la mère de Kirito."],
        correct: "Non, malheureusement.",
    }, {
        id: "6",
        question: "Kirito conduit dans Sao une moto, la qu'elle ?",
        options: ["Yamaha DT125R", "2015 Suzuki TU250X", "BMW G 310 GS 2023 G 310 GS", "Honda Cx. GT"],
        correct: "Yamaha DT125R",
    },
    {
        id: "7",
        question: "Le numero de la plaque d'immatriculation de cette moto est :",
        options: ["La date d'anniversaire d'Asuna", "Numero random", "Numero offert par l'etat au survivant de SAO", "Une referencance a la plaques d'immatriculation de l'AE86 de la fameuse serie Initial D"],
        correct: "La date d'anniversaire d'Asuna",
    },
    {
        id: "8",
        question: "SAO de base est :",
        options: ["Un manga", "Un roman", "Un Liht Novel", "Livre audio"],
        correct: "Un Liht Novel",
    },
    {
        id: "9",
        question: "Le chapitre 16.5 de SAO est unique car :",
        options: ["Il raconte un acte +18 entre kirito et Asuna", "Le chapitre qui raconte le 1er jour dans le chalet", "La mort de kirito mais qui reviens a la vie", "il raconte combien kirito est cheater"],
        correct: "Il raconte un acte +18 entre kirito et Asuna",
    },
];

ctn.classList.add("hide");
ctn.addEventListener("click", () => {
    initial();
    window.location.href = "./anniversaire/index.html";
});
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        questionCount += 1;
        if (questionCount == quizArray.length) {
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");

            userScore.innerHTML =
                "Ton score : " + scoreCount + " / " + questionCount;
        } else {
            countOfQuestion.innerHTML =
            "Question " + `${questionCount + 1}`+ " sur " + quizArray.length;
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();

            if(scoreCount >= questionCount) {
                ctn.classList.remove("hide");
            }
        }
    })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });

    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {

    quizArray.sort(() => Math.random() - 0.5);
    
    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        countOfQuestion.innerHTML = "Question " + 1 + " sur " + quizArray.length;
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
