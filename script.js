//keeps track of scores
let userScore = 0
let cpuScore = 0

//will later be used for cpu
const choices = ['rock','paper','scissors']


const game = (userChoice) => {
    //get either 0, 1, or 2
    const cpuIndex = Math.floor(Math.random() * 3)

    const cpuChoice = choices[cpuIndex]
    
    //think all outcomes
    if(userChoice === 'rock'){
        if(cpuChoice === 'rock'){
            updateScore('tie')
        }
        else if(cpuChoice === 'paper'){
            updateScore('lose')
        }
        else{
            updateScore('win')
        }
    }
    if(userChoice === 'paper'){
        if(cpuChoice === 'paper'){
            updateScore('tie')
        }
        else if(cpuChoice === 'scissors'){
            updateScore('lose')
        }
        else{
            updateScore('win')
        }
    }
    if(userChoice === 'scissors'){
     if(cpuChoice === 'scissors'){
        updateScore('tie')
    }
     else if(cpuChoice === 'rock'){
        updateScore('lose')
    }
      else{
        updateScore('win')
    }     
        
        }
    }

//HW 
const updateScore = (res) => {
    if (res === 'win'){
        (userScore ++) 
        const userscore = document.querySelector('#userscore')
        userscore.textContent = "Your Score: " + (userScore)
        const result = document.querySelector('#results')
        result.textContent = "Results: Win"
    }else if (res === 'lose'){
        (cpuScore ++)
        const cpuscore = document.querySelector('#cpuscore')
        cpuscore.textContent = "CPU Score: " + (cpuScore)
        const result = document.querySelector('#results')
        result.textContent = "Results: Lost"
    }else{
        const result = document.querySelector('#results')
        result.textContent = "Results: Tie"
    }

}




//get all users clickable button
const userRock = document.querySelector('#rock')
const userPaper = document.querySelector('#paper')
const userScissors = document.querySelector('#scissors')

userRock.addEventListener('click', () => {
    game('rock')
})

userPaper.addEventListener('click', () => {
    game('paper')
})

userScissors.addEventListener('click', () =>{
    game('scissors')
})
