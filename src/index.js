import './index.scss'

let summerPlay = false
let rainyPlay = false
let winterPlay = false

function PlayFunc(Player, play) {
    if (play === false) {
        Player.play()
        play = true
    } else if (play === true) {
        Player.pause()
        play = false
    } 
    return play
}


const background = document.querySelector('.background')

const summerCard = document.querySelector('#summerBlock')
const rainyCard = document.querySelector('#rainyBlock')
const winterCard = document.querySelector('#winterBlock')

const summerPlayer = document.querySelector('#summer')
const rainyPlayer = document.querySelector('#rainy')
const winterPlayer = document.querySelector('#winter')

function GlobalPause() {
    summerPlayer.pause()
    rainyPlayer.pause()
    winterPlayer.pause()
    summerPlay = false
    rainyPlay = false
    winterPlay = false
}


summerCard.addEventListener('click', (event) => {
    event.preventDefault()
    background.className = 'background summerImg'
    if (summerPlay === false) {
        GlobalPause()
    }
    summerPlay = PlayFunc(summerPlayer, summerPlay)
})

rainyCard.addEventListener('click', (event) => {
    event.preventDefault()
    background.className = 'background rainyImg'
    if (rainyPlay === false) {
        GlobalPause()
    }
    rainyPlay = PlayFunc(rainyPlayer, rainyPlay)
})

winterCard.addEventListener('click', (event) => {
    event.preventDefault()
    background.className = 'background winterImg'
    if (winterPlay === false) {
        GlobalPause()
    }
    winterPlay = PlayFunc(winterPlayer, winterPlay)
})