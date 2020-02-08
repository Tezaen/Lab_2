//Javascript here
var random_number = Math.floor(Math.random() * 99) + 1;
var guesses = document.querySelector('#guesses');
var last_result = document.querySelector('#last_result');
var low_or_hi = document.querySelector('#low_or_hi');

var guess_submit = document.querySelector('.guess_submit');
var guess_field = document.querySelector('.guess_field');

var guess_count = 1;
var reset_button = document.querySelector('#reset');
var games_lost = document.querySelector('#games_lost');
var games_won = document.querySelector('#games_won');

var games_won_no = 0;
var games_lost_no = 0;
reset_button.style.display = 'none';
guess_field.focus();

function checkGuess(){
    var user_guess = Number(guess_field.value);
    if(guess_count === 1){
        guesses.innerHTML = "Previous guesses: ";
    }
    
    
    if(user_guess === random_number){
        last_result.innerHTML = "Congratulations! You got it right!";
        last_result.style.backgroundColor = 'green';
        low_or_hi.innerHTML = '';
        games_won_no++;
        games_won.innerHTML = games_won_no;
        guesses.innerHTML += user_guess + ' ';
        setGameOver();
    }else if(guess_count === 7){
        last_result.innerHTML = "Sorry! You LOST!!!";
        games_lost_no++;
        games_lost.innerHTML = games_lost_no;
        guesses.innerHTML += user_guess + ' ';
        setGameOver();
    }else{
        if(user_guess > 99){
            last_result.innerHTML = "Too High of a guess!";
            last_result.style.background = 'yellow';
            guess_count--;
            console.log(guess_count);
        }else{
            last_result.innerHTML = "WRONG!";
            last_result.style.backgroundColor = 'red';
            if(user_guess < random_number) {
                low_or_hi.innerHTML = "Last guess was too low!";
                guesses.innerHTML += user_guess + ' ';
                console.log(guess_count);
            }else if(user_guess > random_number){
                low_or_hi.innerHTML = "Last guess was too high!";
                guesses.innerHTML += user_guess + ' ';
                console.log(guess_count);
            }
        }
    }
    guess_count++;
    guess_field.value = '';
    guess_field.focus();
}

guess_submit.addEventListener('click', checkGuess);

function setGameOver() {
    guess_field.disabled = true;
    guess_submit.disabled = true;
    reset_button.style.display = 'inline';
    reset_button.addEventListener('click', resetGame);
}

function resetGame() {
    guess_count = 1;
    
    var reset_paras = document.querySelectorAll('.result_paras p');
    for(var i = 0; i < reset_paras.length; i++){
        reset_paras[i].textContent = '';
    }
    
    reset_button.style.display = 'none';
    
    guess_field.disabled = false;
    guess_submit.disabled = false;
    guess_field.value = '';
    guess_field.focus();
    
    last_result.style.backgroundColor = 'white';
    
    random_number = Math.floor(Math.random() * 99) + 1;
    
}

//document.getElementById("number_to_guess").innerHTML = randomNumber;
