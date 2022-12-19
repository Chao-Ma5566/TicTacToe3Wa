// variable
let etatJeu = ["", "", "", "", "", "", "", "", ""]
const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let jeuActif = true
let joueurActuel = "X"
let gagnant = null
let tour = 0

// elements du DOM
let cells = null
let messageDOM = null
let recommencerDOM = null
// functions

/**
 * 
 * @return {string} message avec le nom du vainqueur
 */
const gagner = () => `Le joueurs ${joueurActuel} a gagné !`

/**
 * 
 * @return {string} message d'egalité
 */
const egalite = () => `Egalité !`

/**
 * 
 * @return {string} 
 */
const tourJoueur = () => `C'est au tour du joueur ${joueurActuel}`


/**
 * verrifie si l'un des joueurs a gagner
 * @return {string | null} message avec le nom du vainqueur
 */
const verifierGagnant = () => {
    let winner = null
    conditionsVictoire.forEach(condition => {
        const valeur0 = etatJeu[condition[0]]
        const valeur1 = etatJeu[condition[1]]
        const valeur2 = etatJeu[condition[2]]

        if (valeur0 !== "" && valeur1 !== "" && valeur2 !== "") {
            if (valeur0 === valeur1 && valeur1 === valeur2) {
                winner = valeur0
            }
        }
    })
    return winner
}

/**
 * Action lorsque que l'utilisateur a cliquer sur un case
 * @param {Element} 
 */
const handleCellClick = (element) => {
    const index = element.target.id.split("-")[1]

    if (etatJeu[index] !== "" || gagnant || !jeuActif) {
        return
    }
    
    etatJeu[index] = joueurActuel
    element.target.innerText = joueurActuel // met a jour le DOM
    tour++
    gagnant = verifierGagnant()
    if(gagnant){
        messageDOM.innerText = gagner()
        return
    }
    if(tour === 9){
        messageDOM.innerText = egalite()
        return
    }
    
    joueurActuel = joueurActuel === "X" ? "O" : "X"
    messageDOM.innerText = tourJoueur()
}

/**
 * Reinitialise les valeurs
 * 
 */
const handleRestartGame = () => {
    etatJeu = ["", "", "", "", "", "", "", "", ""]
    joueurActuel = "X"
    tour = 0
    gagnant = null
    messageDOM.innerText = tourJoueur()
    cells.forEach(cell => cell.innerText = "")
}

/**
 * Action a exectuer une fois que le DOM est charger
 * 
 */
const DOMLoaded = () => {
    messageDOM = document.querySelector('#message')
    cells = document.querySelectorAll('.case')
    recommencerDOM = document.querySelector('#rejouer')
    
    messageDOM.innerText = tourJoueur()
    
    cells.forEach(cell => cell.addEventListener("click", handleCellClick))
    
    recommencerDOM.addEventListener('click', handleRestartGame)
}

document.addEventListener('DOMContentLoaded', DOMLoaded)