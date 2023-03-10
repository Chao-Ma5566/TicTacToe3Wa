'use strict'


document.addEventListener('DOMContentLoaded', () => {
    
    const gameCase = document.querySelectorAll(".case");
    let player = document.getElementById("player");
    const winnerMessage = document.querySelector(".messageWinner")
    console.log(winnerMessage)
    const restart = document.getElementById("restart")
    let tour = 0;
    let checkWin = ["", "", "", "", "", "", "", "", ""]
    let stopGmae = false
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
            checkWinner(check.first, check.second, check.third, gameCase[winCondition[i][0]], gameCase[winCondition[i][1]], gameCase[winCondition[i][2]])

            if (tour >= 9 && winnerMessage.innerHTML !== "player1 a gagné" && winnerMessage.innerHTML !== "player2 a gagné") {
                winnerMessage.classList.add("win")
                winnerMessage.innerHTML = "Egalité"
            }
        }
    }
    // function checkNumber() {
    //     winCondition.forEach(arrayWin=>{
    //         const indexNb1 = arrayWin[0]
    //         const indexNb2 = arrayWin[1]
    //         const indexNb3 = arrayWin[2]
            
    //         if(checkWin[indexNb1]==="X" && checkWin[indexNb1]===checkWin[indexNb2] && checkWin[indexNb2]===checkWin[indexNb3]){
                
    //         }else if(checkWin[indexNb1]==="O" && checkWin[indexNb1]===checkWin[indexNb2] && checkWin[indexNb2]===checkWin[indexNb3]){
                
    //         }
    //     })
    //     for (let i = 0; i < winCondition.length; i++) {
    //         const check = ["","",""]
    //         if (checkWin[winCondition[i][0]] === "X") {
    //             check[0] = true;
    //         }
    //         else if (checkWin[winCondition[i][0]] === "O") {
    //             check[0] = false;
    //         }
    //         if (checkWin[winCondition[i][1]] === "X") {
    //             check[1] = true;
    //         }
    //         else if (checkWin[winCondition[i][1]] === "O") {
    //             check[1] = false;
    //         }
    //         if (checkWin[winCondition[i][2]] === "X") {
    //             check[2] = true;
    //         }
    //         else if (checkWin[winCondition[i][2]] === "O") {
    //             check[2] = false;
    //         }
            
    //         if (tour >= 9 && winnerMessage.innerHTML !== "player1 a gagné" && winnerMessage.innerHTML !== "player2 a gagné") {
    //             winnerMessage.classList.add("win")
    //             winnerMessage.innerHTML = "Egalité"
    //         }
    //     }
    // }
    // /**
    //  * Vérifier si il y a un winner quand 3 true ou 3 false
    //  * @param {boolean} first check
    //  * @param {boolean} second check
    //  * @param {boolean} third check
    //  * @param {HTMLElement} first win case
    //  * @param {HTMLElement} second win case
    //  * @param {HTMLElement} third win case
    //  */
    // // function checkWinner(first, second, third, firstCase, secondCase, thirdCase) {
    // //     if (first === true && second === true && third === true) {
    // //         winnerMessage.classList.add("win")
    // //         winnerMessage.innerHTML = "player1 a gagné"
    // //         firstCase.classList.add("winCase")
    // //         secondCase.classList.add("winCase")
    // //         thirdCase.classList.add("winCase")
    // //         stopGmae = true
    // //     }
    // //     else if (first === false && second === false && third === false) {
    // //         winnerMessage.classList.add("win")
    // //         winnerMessage.innerHTML = "player2 a gagné"
    // //         firstCase.classList.add("winCase")
    // //         secondCase.classList.add("winCase")
    // //         thirdCase.classList.add("winCase")
    // //         stopGmae = true
    // //     }
    // // }

    /**
     * Créer et afficher contenu stoger dans le tableau quand on click
     * 
     */
    function generateEvent() {

        for (let i = 1; i <= gameCase.length; i++) {
            gameCase[i - 1].addEventListener("click", () => {
                if (stopGmae === false) {
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
                }
            })
        }
    }

    restart.addEventListener("click", () => {
        player.innerHTML = "player1"
        tour = 0;
        checkWin = ["", "", "", "", "", "", "", "", ""]
        winnerMessage.classList.remove("win")
        gameCase.forEach(element => element.innerHTML = "");
        gameCase.forEach(element => element.classList.remove("winCase"))
        stopGmae = false
    })

    generateEvent()
})
