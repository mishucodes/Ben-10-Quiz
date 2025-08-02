//MEDIA RESOURCES:
let clickSound = document.querySelector('#gameBackground audio');
let introVideo = document.createElement('video');
    introVideo.src = './Game Resources/ben10AlienForceIntroVideo.mp4';
let backgroundImage = document.createElement('img');
    backgroundImage.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41611b21-a7ce-419b-bc77-4644f8105930/ddqw56x-b1ef02a0-ebb3-4a47-ab87-e4c4b8f3020c.jpg/v1/fill/w_1600,h_901,q_75,strp/ben_10__2005__title_card_background_by_therprtnetwork_ddqw56x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAxIiwicGF0aCI6IlwvZlwvNDE2MTFiMjEtYTdjZS00MTliLWJjNzctNDY0NGY4MTA1OTMwXC9kZHF3NTZ4LWIxZWYwMmEwLWViYjMtNGE0Ny1hYjg3LWU0YzRiOGYzMDIwYy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.b2WIC3Nru-Gi7ATPGMW0ZdDFiAx5RyWPULe0qFA94po';
    backgroundImage.id = 'backgroundImage';
let backgroundMusic = document.createElement('audio');
    backgroundMusic.src = './Game Resources/ben10GameMusic.mp3';


//OTHER RESOURCES & GLOBAL VARIABLES:
let QUESTIONS = [
    {ques: 'What is the name of the device Ben uses to transform into aliens?', op1: 'Omnitool', op2: 'WatchX', op3: 'Omnitrix', op4: 'Alien Band', correct: 'Omnitrix'},
    {ques: 'Who created the Omnitrix?', op1: 'Vilgax', op2: 'Azmuth', op3: 'Max Tennyson', op4: 'Professor Paradox', correct: 'Azmuth'},
    {ques: 'What species is Grey Matter?', op1: 'Galvan', op2: 'Methanosian', op3: 'Tetramand', op4: 'Lepidopterran', correct: 'Galvan'},
    {ques: 'Which alien form is made of fire?', op1: 'XLR8', op2: 'Upgrade', op3: 'Heatblast', op4: 'Four Arms', correct: 'Heatblast'},
    {ques: 'Which alien can split into multiple clones?', op1: 'Echo Echo', op2: 'Ditto', op3: 'Lodestar', op4: 'Ghostfreak', correct: 'Ditto'},
    {ques: 'Who is Ben’s cousin that travels with him?', op1: 'Lucy', op2: 'Gwen', op3: 'May', op4: 'Emily', correct: 'Gwen'},
    {ques: 'What was Kevin 11’s full name?', op1: 'Kevin Levin', op2: 'Kevin Eleven', op3: 'Kevin Ethan Levin', op4: 'Kevin Maxwell Levin', correct: 'Kevin Ethan Levin'},
    {ques: 'Which alien is composed of living metal?', op1: 'Upgrade', op2: 'Chromastone', op3: 'Way Big', op4: 'Goop', correct: 'Upgrade'},
    {ques: 'Which alien has the ability to manipulate gravity?', op1: 'Jetray', op2: 'Gravattack', op3: 'Cannonbolt', op4: 'Armodrillo', correct: 'Gravattack'},
    {ques: 'Who is the time-traveling character that often helps Ben?', op1: 'Azmuth', op2: 'Rook', op3: 'Paradox', op4: 'Khyber', correct: 'Paradox'},
    {ques: 'Which alien is known as the "ghost" alien?', op1: 'Wildvine', op2: 'Ghostfreak', op3: 'Snare-oh', op4: 'Big Chill', correct: 'Ghostfreak'},
    {ques: 'Why did Ben stop using Ghostfreak in the original series?', op1: 'It scared him', op2: 'It malfunctioned', op3: 'The alien tried to escape', op4: 'He lost the DNA', correct: 'The alien tried to escape'},
    {ques: 'What happens when the Omnitrix times out?', op1: 'Ben loses memory', op2: 'Ben transforms into a random alien', op3: 'Ben returns to normal', op4: 'The Omnitrix explodes', correct: 'Ben returns to normal'},
    {ques: 'Which alien of Ben can manipulate electricity?', op1: 'Shock Rock', op2: 'Feedback', op3: 'Chromastone', op4: 'Echo Echo', correct: 'Feedback'},
    {ques: 'What is the name of the Omnitrix’s evil counterpart?', op1: 'Antitrix', op2: 'Darktrix', op3: 'Negatrix', op4: 'Reversetrix', correct: 'Antitrix'},
    {ques: 'Which alien has diamond-hard skin?', op1: 'Four Arms', op2: 'Ripjaws', op3: 'Diamondhead', op4: 'Stinkfly', correct: 'Diamondhead'},
    {ques: 'Who was the creator of the Antitrix?', op1: 'Khyber', op2: 'Kevin Levin', op3: 'Albedo', op4: 'Paradox', correct: 'Kevin Levin'},
    {ques: 'What planet is Diamondhead from?', op1: 'Petropia', op2: 'Galvan B', op3: 'Pyros', op4: 'Kinet', correct: 'Petropia'},
    {ques: 'What alien has a tail with a giant stinger?', op1: 'Stinkfly', op2: 'Ripjaws', op3: 'Wildmutt', op4: 'Rath', correct: 'Stinkfly'},
    {ques: 'Which species is Eon, the villain who manipulates time?', op1: 'Chronosapien', op2: 'Polymorph', op3: 'Necrofriggian', op4: 'Yamato Alien', correct: 'Chronosapien'},
    {ques: 'Who is Ben’s doppelgänger from an alternate timeline?', op1: 'Kevin 11', op2: 'Albedo', op3: 'Dark Ben', op4: 'Ben Prime', correct: 'Albedo'},
    {ques: 'What does the Codon Stream in the Omnitrix hold?', op1: 'Alien powers', op2: 'Genetic samples', op3: 'Energy reserves', op4: 'Backups of timelines', correct: 'Genetic samples'},
    {ques: 'Who is the Celestialsapien responsible for rebooting the universe?', op1: 'Alien X', op2: 'Serena', op3: 'Bellicus', op4: 'Omnitrix Core', correct: 'Alien X'},
    {ques: 'What transformation did Ben accidentally use while sleepwalking?', op1: 'Stinkfly', op2: 'Ghostfreak', op3: 'Upgrade', op4: 'Wildmutt', correct: 'Wildmutt'},
    {ques: 'What is the name of the powerful device Azmuth feared falling into the wrong hands?', op1: 'Ultimatrix', op2: 'Antitrix', op3: 'Chrono Key', op4: 'The Map of Infinity', correct: 'The Map of Infinity'}
];
let userScore, currentScore;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Welcoming the user to the Game:
document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById("startButton").addEventListener("click", welcomeUser);
    document.addEventListener("keyup", welcomeUser);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//FUNCTION 01:
function welcomeUser(event)
{
    //Making a 'click' sound:
    clickSound.play();

    //Playing the intro video to welcome the user:
    document.querySelector('#gameBackground').replaceChild(introVideo, document.getElementById('backgroundImage'));
    introVideo.addEventListener('ended', skipIntro);
    introVideo.volume = 0.5;
    introVideo.loop = false;
    introVideo.play();

    //Changing some basic text:
    document.querySelector('#mainGameMenu #welcomeToGame').textContent = 'Press "Esc" to skip the intro.'
    document.querySelector('#mainGameMenu button').textContent = 'Loading Game...'

    //Letting the user skip the intro
    document.addEventListener('keyup', skipIntro);

    //Removing event handlers like a responsible developer:
    document.getElementById("startButton").removeEventListener("click", welcomeUser);
    document.removeEventListener("keyup", welcomeUser);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//FUNCTION 02:
function skipIntro()
{
    document.querySelector('#mainGameMenu #welcomeToGame').remove();
    document.querySelector('#mainGameMenu button').remove();
    document.querySelector('#gameBackground video').remove();
    document.removeEventListener('keyup', skipIntro);
    
    //Start the Game:
    startGame();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//FUNCTION 03:
function startGame()
{
    //Setting Backgrounds:
    document.querySelector('#gameBackground').appendChild(backgroundImage);
    document.querySelector('#mainGameMenu').style.border = '5px solid green';
    document.getElementById('gameBackground').appendChild(backgroundMusic);
        backgroundMusic.loop = true;
        backgroundMusic.play();
    
    //Setting Variables up:
    userScore = document.createElement('span');
    currentScore = 0;
    userScore.textContent = `Score: ${currentScore}`;
    document.querySelector('#header').appendChild(userScore);

    //Asking Questions:
    askQuestions(QUESTIONS);
}


//FUNCTION 04:
function askQuestions(QUESTIONS)
{
    let questionIndex = 0;
    showQuestion(questionIndex);

    function showQuestion(index)
    {
        let menu = document.getElementById('mainGameMenu');
        menu.innerHTML = '';
        // Print the question
        let ques = document.createElement('h3');
        ques.textContent = QUESTIONS[index].ques;
        menu.appendChild(ques);

        // Print options
        let optionsDiv = document.createElement('div');
        menu.appendChild(optionsDiv);
        for (let i = 1; i <= 4; i++)
        {
            let btn = document.createElement('button');
            btn.textContent = QUESTIONS[index][`op${i}`];
            optionsDiv.appendChild(btn);
        }



        // Handle answer
        optionsDiv.addEventListener('click', function checkAnswer(event)
        {
            clickSound.play();
            if (event.target.tagName !== 'BUTTON')
                return;

            // Check answer
            if (event.target.textContent === QUESTIONS[index].correct)
            {
                event.target.style.backgroundColor = 'lightgreen';
                event.target.style.color = 'black';
                currentScore++;
            }
            else
            {
                event.target.style.backgroundColor = 'red';
                currentScore -= 0.25;
            }
            userScore.textContent = `Score: ${currentScore}`;

            // Clean up event listener like a responsible developer:
            optionsDiv.removeEventListener('click', checkAnswer);

            // Move to next question after ~1 seconds
            setTimeout(() =>
            {
                if (++index < QUESTIONS.length)
                    showQuestion(index);
                else
                    quizFinish();
            }, 1200);
        });
    }
}







//FUNCTION 05:
function quizFinish()
{
    let menu = document.getElementById('mainGameMenu');
    menu.innerHTML = '';

    let gameOver = document.createElement('h2');
    if(currentScore > (0.75 * QUESTIONS.length))
        gameOver.textContent = 'Congratulations! You have shown that you are a true fan!';
    else if(currentScore > (.5 * QUESTIONS.length))
        gameOver.textContent = 'You got most answers correct!';
    else if(currentScore > (.25 * QUESTIONS.length))
        gameOver.textContent = "You'll be there!";
    else
        gameOver.textContent = "You better start taking Ben 10 seriosuly!";
    menu.appendChild(gameOver);


    backgroundMusic.src = '/Day 21 - Project (Ben 10 Quiz)/Game Resources/ben10GameOver.mp3';
        backgroundMusic.loop = false;
        backgroundMusic.play();
}