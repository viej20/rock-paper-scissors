function game(){
   let compPoints =0;
   let playerPoints=0;

    while((compPoints != 5) && (playerPoints != 5) ){
        let point = playRound(getPlayerChoice(), getCompChoice());

        console.log('Player: ' +playerPoints);
        console.log('Comp: ' + compPoints);
        console.log('result: '+ point);

        if(point.substring(4,7) =='Win'){
            playerPoints++;
        }
        else if(point.substring(4,8) == 'Lose'){
            compPoints++;
        }
        else{
            continue;
        }
   }
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


function getPlayerChoice (){
    let choice= prompt('Please choose Rock, Paper, or Scissors.');
    return choice;
}

game();