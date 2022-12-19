'use strict'


document.addEventListener('DOMContentLoaded', () => {
    const gameCase = document.querySelectorAll(".case");
    let player = document.getElementById("player");
    const winnerMessage = document.querySelector("#messageWinner>span")
    const restart = document.getElementById("restart")
    let tour = 0;
    //   console.log(gameCase)
    //   console.log(player)
    //   console.log(winnerMessage)

    function render() {
        
    }

    function check() {

    }

    function generateEvent() {
        for(let i = 1;i<=gameCase.length;i++){
            gameCase[i-1].addEventListener("click",()=>{
                if(gameCase[i-1].innerHTML !== ""){
                    return console.log("Déja pris")
                }else if(tour % 2 === 0){
                    
                }
                tour++
            })
        }
    }
})
