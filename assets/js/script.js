const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
let questionBox = document.getElementById('question-container');
const restartButton = document.getElementById('restartGameDiv');
const questionText = document.getElementById('question-text');
let explaination = document.getElementById('explaination');

let sortQuestions;

startButton.addEventListener('click', startGame);
let i = 0;


function startGame() {
    startButton.classList.add('hide');  
    restartButton.classList.add('hide');  
    showQuestion();
}

let questions = 

    [ 

        {
            question: 'Why did Henry VIII create the Church of England?',
            options: ['To kill more people', 'To get a divorce', 'For a bet', 'Sunday drinking'],
            answer: 1,
            answerExplaination: 'Henry VII wanted to divorce his wife so created the Church of England as divorce was forbinned by the Catholic Church. He then went on to marry multiple wifes.'
        },

        {
            question: 'In Scottish history what was the name of braveheart?',
            options: ['Robert Burns', 'William Wallace', 'Benjamin Bland', 'Robert the Bruce'],
            answer: 1,
            answerExplaination: 'Braveheart was named William Wallace. He was famously hung, drawn and quartered by the English and his statue is outside Edinburgh Castle'
        },

        {
            question: 'Who killed John F Kennedy?',
            options: ['Lee Harvery Oswald', 'Mark Chapman', 'John Wilkes Booth', 'Gavrilo Princip'],
            answer: 0,
            answerExplaination: 'Lee Harvey Oswalk killed John F Kennedy with sniper riffle in Dallas, Texas. Days later he himself was killed by Jack Ruby. '
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
            answerExplaination: 'Julius Caesar was assinated on the Roman holiday called the Ides of March. He was killed by his senators including one which he viewed of as a son - Brutus - because he declared himself dictator for life.'
        },

        {
            question: 'Which country did the Romans attempt to invade but were challenged by some fierce citizens and therefore turned back',
            options: ['Germany', 'France', 'Scotland', 'England'],
            answer: 2,
            answerExplaination: 'When the Romans tried to envade Scotland they were challenged by some fierce Scottish warriors and decided it would be best to turn back and invade somewhere else'
        },
    
        { 
            question: 'Which russian leader famously photoshopped himself with another russian leader?',
            options: ['Lenin', 'Stalin', 'Prince James', 'Prince Albert'],
            answer: 1,
            answerExplaination: 'Stalin famously photoshopped himself with Lenin to give the false impression of companionship between them'
    
        },
    
        {
            question: 'What was quote was famously attributed to Marie Antoinette?',
            options: ['"Let them drink blood"', '"Let them eat mud"', '"Let them eat cake"', '"Let them eat bread"'],
            answer: 2,
            answerExplaination: 'Marie antionete was famously quoted to say "Let them eat cake" when France was experiencing an economic downturn and widespread poverty. However, it has been disputed by Historians whether this is what she actually said or if it was a mistranslation'
        },
    
        {
            question: 'What year did the battle of hastings occur?',
            options: ['1540', '1155', '1066', '984'],
            answer: 2,
            answerExplaination: 'The battle of Hastings occuring in 1066 in, you guessed it, Hastings!'
        },

        {
            question: 'Who of the following did Cleopatra have a romantic relationship with?',
            options: ['Pompey', 'Brutus', 'Julius Caesar', 'Cicero'],
            answer: 2,
            answerExplaination: 'Cleopatra had a romantic relationship with Julius Caesar, for which they had a child together. This is the origin for the naming of a caesarian section.'
        },

        {
            question: 'Why did Henry VIII create the Church of England?',
            options: ['To kill more people', 'To get a divorce', 'For a bet', 'Sunday drinking'],
            answer: 1,
            answerExplaination: 'Henry VII wanted to divorce his wife so created the Church of England as divorce was forbinned by the Catholic Church. He then went on to marry multiple wifes.'
        },

        {
            question: 'In Scottish history what was the name of braveheart?',
            options: ['Robert Burns', 'William Wallace', 'Benjamin Bland', 'Robert the Bruce'],
            answer: 1,
            answerExplaination: 'Braveheart was named William Wallace. He was famously hung, drawn and quartered by the English and his statue is outside Edinburgh Castle'
        },

        {
            question: 'Who killed John F Kennedy?',
            options: ['Lee Harvery Oswald', 'Mark Chapman', 'John Wilkes Booth', 'Gavrilo Princip'],
            answer: 0,
            answerExplaination: 'Lee Harvey Oswalk killed John F Kennedy with sniper riffle in Dallas, Texas. Days later he himself was killed by Jack Ruby. '
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
            answerExplaination: 'Julius Caesar was assinated on the Roman holiday called the Ides of March. He was killed by his senators including one which he viewed of as a son - Brutus - because he declared himself dictator for life.'
        },

        {
            question: 'Which country did the Romans attempt to invade but were challenged by some fierce citizens and therefore turned back',
            options: ['Germany', 'France', 'Scotland', 'England'],
            answer: 2,
            answerExplaination: 'When the Romans tried to envade Scotland they were challenged by some fierce Scottish warriors and decided it would be best to turn back and invade somewhere else'
        },
    
        { 
            question: 'Which russian leader famously photoshopped himself with another russian leader?',
            options: ['Lenin', 'Stalin', 'Prince James', 'Prince Albert'],
            answer: 1,
            answerExplaination: 'Stalin famously photoshopped himself with Lenin to give the false impression of companionship between them'
    
        },
    
        {
            question: 'What was quote was famously attributed to Marie Antoinette?',
            options: ['"Let them drink blood"', '"Let them eat mud"', '"Let them eat cake"', '"Let them eat bread"'],
            answer: 2,
            answerExplaination: 'Marie antionete was famously quoted to say "Let them eat cake" when France was experiencing an economic downturn and widespread poverty. However, it has been disputed by Historians whether this is what she actually said or if it was a mistranslation'
        },
    
        {
            question: 'What year did the battle of hastings occur?',
            options: ['1540', '1155', '1066', '984'],
            answer: 2,
            answerExplaination: 'The battle of Hastings occuring in 1066 in, you guessed it, Hastings!'
        },

        {
            question: 'Who of the following did Cleopatra have a romantic relationship with?',
            options: ['Pompey', 'Brutus', 'Julius Caesar', 'Cicero'],
            answer: 2,
            answerExplaination: 'Cleopatra had a romantic relationship with Julius Caesar, for which they had a child together. This is the origin for the naming of a caesarian section.'
        }
    
    
    ];

    sortQuestions = questions.sort(() => Math.random() - 0.5);


    

    function showQuestion() {

  
        questionBox.classList.remove('hide');
    
        questionText.innerText = questions[i].question;
    
        
            let optionsBtn = document.querySelectorAll('.btn');
            
            optionsBtn.forEach(function(element, index) {
               
            element.textContent = questions[i].options[index];
    
            element.addEventListener('click', function() {
                if (questions[i].answer === index) {
                   element.style.backgroundColor = 'green';
                   element.textContent = 'Correct!';
                } else {
                    element.style.backgroundColor = 'red';
                    element.textContent = 'Wrong!';
                }
              
            explaination.classList.remove('hide');
            explaination.innerText = questions[i].answerExplaination;
                   
            });
            });
    
            resetState();
        }
        
    
    function resetState() {
        
            
            nextButton.classList.remove('hide');
            nextButton.addEventListener('click', function() {
                showNextQuestion(sortQuestions[i]);
                resetButton();
            });
  }

  function resetButton() {

    let optionsBtn = document.querySelectorAll('.btn');

    optionsBtn.forEach(function(element, index) {
        if (optionsBtn) {
            element.style.backgroundColor = 'white';
        }
    });
        explaination.classList.add('hide');
    }
  

  function showNextQuestion() {

    i++;

    if(i < 20) {
        startGame();
        console.log('start game reactivated');
    } else {
       restartGame();
       console.log('else activated');
        
    }
}
              
function restartGame() {
    questionBox.classList.add('hide');
    nextButton.classList.add('hide');
    restartButton.classList.remove('hide');
    restartButton.addEventListener('click', function onclick(){
        window.location.reload();
    });
}
