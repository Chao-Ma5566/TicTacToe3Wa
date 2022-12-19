'use strict'


document.addEventListener('DOMContentLoaded', () => {
    const gameCase = document.querySelectorAll(".case");
    let player = document.getElementById("player");
    const winnerMessage = document.querySelector(".messageWinner")
    console.log(winnerMessage)
    const restart = document.getElementById("restart")
    let tour = 0;
    let checkWin = ["", "", "", "", "", "", "", "", ""]
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6]
    ]


    /**
     * Vérifier les tableaux winCondition dans checkWin pour envoie true ou false
     * 
     */
    function checkNumber() {
        for (let i = 0; i < winCondition.length; i++) {
            const check = {
                first: "",
                second: "",
                third: ""
            }
            if (checkWin[winCondition[i][0]] === "X") {
                check.first = true;
            }
            else if (checkWin[winCondition[i][0]] === "O") {
                check.first = false;
            }
            if (checkWin[winCondition[i][1]] === "X") {
                check.second = true;
            }
            else if (checkWin[winCondition[i][1]] === "O") {
                check.second = false;
            }
            if (checkWin[winCondition[i][2]] === "X") {
                check.third = true;
            }
            else if (checkWin[winCondition[i][2]] === "O") {
                check.third = false;
            }
            checkWinner(check.first, check.second, check.third)
        }
    }

    /**
     * Vérifier si il y a un winner quand 3 true ou 3 false
     * @param {boolean} first check
     * @param {boolean} second check
     * @param {boolean} third check
     */
    function checkWinner(first, second, third) {
        if (first === true && second === true && third === true) {
            winnerMessage.classList.add("win")
            winnerMessage.innerHTML = "player1 a gagné"
        }
        else if (first === false && second === false && third === false) {
            winnerMessage.classList.add("win")
            winnerMessage.innerHTML = "player2 a gagné"
        }
    }

    /**
     * Créer et afficher contenu stoger dans le tableau quand on click
     * 
     */
    function generateEvent() {
        for (let i = 1; i <= gameCase.length; i++) {
            gameCase[i - 1].addEventListener("click", () => {
                if (gameCase[i - 1].innerHTML !== "") {
                    return console.log("Déja pris")
                }
                else if (tour % 2 === 0) {
                    gameCase[i - 1].innerHTML = "X"
                    player.innerHTML = "player2"
                    checkWin[i - 1] = "X";
                    tour++
                }
                else {
                    gameCase[i - 1].innerHTML = "O"
                    player.innerHTML = "player1"
                    checkWin[i - 1] = "O";
                    tour++
                }
                checkNumber()
            })
        }
    }
    
    restart.addEventListener("click", ()=>{
        player.innerHTML = "player1"
        tour = 0;
        checkWin = ["", "", "", "", "", "", "", "", ""]
        winnerMessage.classList.remove("win")
        gameCase.forEach(element=>element.innerHTML = "");
    })
    
    generateEvent()
})
