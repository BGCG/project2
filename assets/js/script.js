const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
let questionBox = document.getElementById('question-container');
const restartBtn = document.getElementById('restart-game-div');
let questionText = document.getElementById('question-text');
let explaination = document.getElementById('explaination');
let scoreArea = document.getElementById('score-area');
let optionsBtn = document.querySelectorAll('.option');

// Assignment of currentQuestionIndex 

let currentQuestionIndex = 0;

// Assignment of score 

let score = 0;

// Questions array storing all questions used in the quiz

let questions =

    [

        {
            question: 'Who was believed to be the first European to travel to North America?',
            options: ['Christopher Columbus', 'James Cook', 'Leif Eriksson', 'Robert Livingston'],
            answer: 2,
            answerExplaination: 'The Viking explorer, Leif Eriksson is believed to be the first European man to travel to North America.'
        },

        {
            question: 'In Scottish history what was the name of Braveheart?',
            options: ['Robert Burns', 'William Wallace', 'Benjamin Bland', 'Robert the Bruce'],
            answer: 1,
            answerExplaination: 'Braveheart was named William Wallace. He was famously hung, drawn and quartered by the English and his statue is outside Edinburgh Castle.'
        },

        {
            question: 'Who killed John F Kennedy?',
            options: ['Lee Harvery Oswald', 'Mark Chapman', 'John Wilkes Booth', 'Gavrilo Princip'],
            answer: 0,
            answerExplaination: 'Lee Harvey Oswalk killed John F Kennedy with a sniper rifle in Dallas, Texas. Days later he himself was killed by Jack Ruby.'
        },

        {
            question: 'Who was the British prime minister which served during World War 2?',
            options: ['John Major', 'Clement Attlee', 'Winston Churchill', 'David LLoyd George'],
            answer: 2,
            answerExplaination: 'Winston Churchill served as British prime minister from 1940-1945'
        },

        {
            question: 'What Roman holiday was Julius Caesar killed on?',
            options: ['Christmas', 'The ides of March', 'Easter', 'Liberalia'],
            answer: 1,
            answerExplaination: 'Julius Caesar was assassinated on the Roman holiday called the Ides of March. He was killed by his senators including one which he viewed as a son - Brutus - because he declared himself dictator for life.'
        },

        {
            question: 'Which country did the Romans never invade due to some fierce resistance and therefore turned back.',
            options: ['Germany', 'France', 'Scotland', 'England'],
            answer: 2,
            answerExplaination: 'When the Romans tried to invade Scotland they were challenged by some fierce Scottish warriors and decided it would be best to turn back and invade somewhere else.'
        },

        {
            question: 'Which Soviet leader famously photoshopped himself with another Soviet leader?',
            options: ['Lenin', 'Stalin', 'Boris Yeltsin', 'Nikita Khrushchev'],
            answer: 1,
            answerExplaination: 'Stalin famously photoshopped himself with Lenin to give the false impression of companionship between them.'

        },

        {
            question: 'What was quote was famously attributed to Marie Antoinette?',
            options: ['"Let them drink blood"', '"Let them eat mud"', '"Let them eat cake"', '"Let them eat soup"'],
            answer: 2,
            answerExplaination: 'Marie Antionete was famously quoted to say "Let them eat cake" when France was experiencing widespread famine. However, it has been disputed by Historians whether she actually said this or if it was simply a mistranslation.'
        },

        {
            question: 'What year did the Battle of Hastings occur?',
            options: ['1540', '1155', '1066', '984'],
            answer: 2,
            answerExplaination: 'The Battle of Hastings occuring in 1066 in, you guessed it, Hastings!'
        },

        {
            question: 'Who of the following did Cleopatra have a romantic relationship with?',
            options: ['Pompey', 'Brutus', 'Julius Caesar', 'Cicero'],
            answer: 2,
            answerExplaination: 'Cleopatra had a romantic relationship with Julius Caesar, for which they had a child together.'
        },

        {
            question: 'Who discovered Penicillin?',
            options: ['Alexander Fleming', 'Richard Cooper', 'Dorothy Hodgkin', 'Cecil Paine'],
            answer: 0,
            answerExplaination: 'Alexander Fleming discovered Penicillin from extracts of a species of fungus, Penicillium rubens.'
        },

        {
            question: 'Why did Henry VIII create the Church of England?',
            options: ['To kill more people', 'To get a divorce', 'For a bet', 'Sunday drinking'],
            answer: 1,
            answerExplaination: 'Henry VII wanted to divorce his wife so created the Church of England as divorce was forbidden by the Catholic Church. He then went on to marry multiple wifes.'
        },

        {
            question: 'Who wrote the "Origin of species?"',
            options: ['Sigmund Freud', 'Mark Chapman', 'John Wilkes Booth', 'Charles Darwin'],
            answer: 3,
            answerExplaination: 'Charles Darwin wrote the Origin of Species in 1859 which expressed his theory on evolution of species via natural selection.'
        },

        {
            question: 'Who was is known to be the father of psychoanalysis?',
            options: ['Charles Darwin', 'Sigmund Freud', 'Carl Jung', 'David LLoyd George'],
            answer: 1,
            answerExplaination: 'Sigmund Freud is considered to be the father of psychoanalysis.'
        },

        {
            question: 'What was the Circus Maximus used for in Rome?',
            options: ['A park', 'A market place', 'Gladiator fights', 'Chariot racing'],
            answer: 3,
            answerExplaination: 'The Circus Maximus was used for Chariot racing. Fun fact it held around 300,000 people which is larger than most stadiums today.'
        },

        {
            question: 'When did the fall of the Berlin wall happen?',
            options: ['1985', '1995', '1989', '1990'],
            answer: 2,
            answerExplaination: 'The Berlin wall was pulled down in 1989 reuniting East and West Germany.'
        },

        {
            question: 'The Egyptians mummified which animal which they considered to be sacred?',
            options: ['Dogs', 'Mice', 'Cats', 'Horses'],
            answer: 2,
            answerExplaination: 'Egyptians considered cats sacred and there is evidence that cats were mummified with their owners.'

        },

        {
            question: 'What year was the first moon landing?',
            options: ['1960', '1959', '1955', '1969'],
            answer: 3,
            answerExplaination: 'Three astronauts went to the moon in 1969 in the Apollo 11 - with Neil Armstrong and Buzz Aldrin being the first men to step on the moon"s surface. Fun fact - Apollo 11 had the same amount of computing power as a modern day calculator.'
        },

        {
            question: 'Which country had the first man in space?',
            options: ['US', 'China', 'USSR', 'India'],
            answer: 2,
            answerExplaination: 'USSR sent Yuri Gagarin to space in 1961.'
        },

        {
            question: 'What were the pyramids of Egypt used for?',
            options: ['Astrology', 'Prayer area', 'Houses', 'Tombs'],
            answer: 3,
            answerExplaination: 'Pyramids were used as tombs. Many of the pyramids are around 4000 years old - Cleopatra actually lived closer to us now than when they were built.'
        }


    ];

/** Show question from questions array and options. Hide start button. Function will also show explaination with a click event. 
 * Click event will also change color and text to provide feedback to user. Activate resetState function. 
 * Additionally, the option buttons will be disabled after one of the options is clicked on. */

function showQuestion() {
    startBtn.classList.add('hide');
    questionBox.classList.remove('hide');

    questionText.innerText = questions[currentQuestionIndex].question;
    // Lines 179 to 184 are inspired by the teachings of Zenva - https://www.youtube.com/watch?v=RswgVWKJRLM
    optionsBtn.forEach(function (element, index) {

        element.textContent = questions[currentQuestionIndex].options[index];

        element.addEventListener('click', function () {
            if (questions[currentQuestionIndex].answer === index) {
                element.style.backgroundColor = 'green';
                element.textContent = 'Correct!';
            } else {
                element.style.backgroundColor = 'red';
                element.textContent = 'Wrong!';
            }

            optionsBtn[0].disabled = true;
            optionsBtn[1].disabled = true;
            optionsBtn[2].disabled = true;
            optionsBtn[3].disabled = true;

            explaination.classList.remove('hide');
            explaination.innerText = questions[currentQuestionIndex].answerExplaination;

        });
    });

    resetState();
}

// Add to score when used clicks a correct answer 

optionsBtn.forEach(function (element, index) {
    element.addEventListener('click', function () {
        if (questions[currentQuestionIndex].answer === index) {
            score++;
        }
    });
});

/** Show next button and iterate to next question in questions array. */

function resetState() {
    nextBtn.classList.remove('hide');
}

// Activate resetButton and showNextQuestion function.

nextBtn.addEventListener('click', function () {
    if (optionsBtn[0].disabled) {
        showNextQuestion();
    } else {
        alert('Please select an option!');
    }

    resetButton();
});

/** Reset button color back to white, enable buttons and hide explaination */

function resetButton() {
    optionsBtn.forEach(function (element, index) {
        if (optionsBtn) {
            element.style.backgroundColor = 'white';
            element.disabled = false;
        }
    });
    explaination.classList.add('hide');
}

/** Conditional deciding to startGame if iterations are below questions array length or else activate restartGame function */

function showNextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        restartGame();
        scoreArea.classList.remove('hide');
        scoreArea.textContent = `You answered ${score} correct questions out of 20 questions`;
    }
}

/** Restart Game function which will unhide restart button which has a click event so when user clicks it will cause a page reload which will show start button */

function restartGame() {
    questionBox.classList.add('hide');
    nextBtn.classList.add('hide');
    restartBtn.classList.remove('hide');
    restartBtn.addEventListener('click', function onclick() {
        window.location.reload();
    });
}