'use strict'


document.addEventListener('DOMContentLoaded', () => {
    const gameCase = document.querySelectorAll(".case");
    let player = document.getElementById("player");
    const winnerMessage = document.querySelector("#messageWinner>span")
    const restart = document.getElementById("restart")
    let tour = 0;
    const checkWin = ["","","","","","","","",""]
    const winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]]
    //   console.log(gameCase)
    //   console.log(player)
    //   console.log(winnerMessage)

    function render(winner) {
        winnerMessage.inner = winner
    }

    function check() {
        for(let i = 0;i<winCondition.length;i++ ){
            for(let j = 0;j<winCondition[i].length;j++){
                
            }
        } 
        //  if()   
    }

    function generateEvent() {
        for (let i = 1; i <= gameCase.length; i++) {
            gameCase[i - 1].addEventListener("click", () => {
                if (gameCase[i - 1].innerHTML !== "") {
                    return console.log("Déja pris")
                }
                else if (tour % 2 === 0) {
                    gameCase[i - 1].innerHTML ="O"
                    player.innerHTML = "player2"
                    checkWin[i-1] = "O";
                    tour++
                }
                else {
                    gameCase[i - 1].innerHTML ="X"
                    player.innerHTML = "player1"
                    checkWin[i-1] = "X";
                    tour++
                }
                console.log(checkWin)
            })
        }
    }
    generateEvent()
})
