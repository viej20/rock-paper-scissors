const results = document.querySelector('#results');
const comp = document.querySelector('#comp');
const player = document.querySelector('#player');


function game (){
    const btns = document.querySelectorAll('button');
    
    let compPoints =0;
    let playerPoints =0;

    btns.forEach( (button) => {

        button.addEventListener('click', () => {

            if( (compPoints <5) && (playerPoints <5) ){

                let choice = button.innerHTML;
                let point = playRound(choice, getCompChoice());
                results.innerText = point;

                if(point.substring(4,7) =='Win'){
                    playerPoints++;
                }
                else if(point.substring(4,8) == 'Lose'){
                    compPoints++;
                }

                comp.innerText = 'Comp: ' + compPoints;
                player.innerText = 'Player: ' + playerPoints;

                if((compPoints == 5) || (playerPoints == 5) ){
                    return (playerPoints > compPoints) ? results.innerText = "You Win!" : results.innerText= "You Lose...";
                }
            }
        })
        
    })
    
}

function playRound(playerSelection, computerSelection){
   
   playerSelection = playerSelection.toUpperCase();

    switch(computerSelection){
        case 'Rock':
            if(playerSelection == 'PAPER'){
                return 'You Win! Paper beats Rock';
            }
            else if(playerSelection == 'SCISSORS'){
                return 'You Lose! Rock beats Scissors';
            }
            else if(playerSelection =='ROCK'){
                return 'Tie Round';
            }
            
        break;

        case 'Paper':
            if(playerSelection == 'SCISSORS'){
                return 'You Win! Scissors beats Paper';
            }
            else if(playerSelection == 'ROCK'){
                return 'You Lose! Paper beats Rock';
            }
            else if(playerSelection =='PAPER'){
                return 'Tie Round';
            }

        break;

        case 'Scissors':
            if(playerSelection == 'ROCK'){
                return 'You Win! Rock beats Scissors';
            }
            else if(playerSelection == 'PAPER'){
                return 'You Lose! Scissors beats Paper';
            }
            else if(playerSelection =='SCISSORS'){
                return 'Tie Round';
            }
        break;

        default:
            return 'Hmmmm, something went wrong here.'
        break;
    }
}

function getCompChoice (){
    let choice = Math.floor(Math.random()*3)+1; 

    switch (choice){
        case 1: 
            return 'Rock';
        break;

        case 2:
            return 'Paper';
        break;

        case 3:
            return 'Scissors';
        break;
    }
}

game();