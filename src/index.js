import "./index.scss";

let mainSound;
let volumeValue = 0.50;

let summerPlay = false;
let rainyPlay = false;
let winterPlay = false;

const background = document.querySelector(".background");

const summerCard = document.querySelector("#summerBlock");
const rainyCard = document.querySelector("#rainyBlock");
const winterCard = document.querySelector("#winterBlock");

const summerPlayer = document.querySelector("#summer");
const rainyPlayer = document.querySelector("#rainy");
const winterPlayer = document.querySelector("#winter");

const iconSummer = document.querySelector("#iconSummer");
const iconRainy = document.querySelector("#iconRainy");
const iconWinter = document.querySelector("#iconWinter");

const volume = document.getElementById("volume-slider");

function PlayFunc(Player, play) {
    if (play === false) {
        Player.play();
        play = true;
    } else if (play === true) {
        Player.pause();
        play = false;
    };
    return play;
}

function GlobalPause() {
    summerPlayer.pause();
    rainyPlayer.pause();
    winterPlayer.pause();
    summerPlay = false;
    rainyPlay = false;
    winterPlay = false;
    iconSummer.src = "./assets/icons/sun.svg";
    iconRainy.src = "./assets/icons/cloud-rain.svg";
    iconWinter.src = "./assets/icons/cloud-snow.svg";
}

volume.addEventListener("change", function(e) {
    if (mainSound !== undefined) {
        mainSound.volume = e.currentTarget.value / 100;
        volumeValue = e.currentTarget.value / 100;
    }
});

for (const e of document.querySelectorAll("input[type='range'].inputVolume")) {
    e.style.setProperty("--value", e.value);
    e.style.setProperty("--min", e.min === "" ? "0" : e.min);
    e.style.setProperty("--max", e.max === "" ? "100" : e.max);
    e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

summerCard.addEventListener("click", (event) => {
    event.preventDefault();
    background.className = "background summerImg";
    if (summerPlay === false) {
        GlobalPause();
    };
    mainSound = summerPlayer;
    summerPlay = PlayFunc(summerPlayer, summerPlay);
    summerPlayer.volume = volumeValue;
    iconSummer.src = summerPlay === true ? "./assets/icons/pause.svg" : "./assets/icons/sun.svg";
});

rainyCard.addEventListener("click", (event) => {
    event.preventDefault();
    background.className = "background rainyImg";
    if (rainyPlay === false) {
        GlobalPause();
    };
    mainSound = rainyPlayer;
    rainyPlay = PlayFunc(rainyPlayer, rainyPlay);
    rainyPlayer.volume = volumeValue;
    iconRainy.src = rainyPlay === true ? "./assets/icons/pause.svg" : "./assets/icons/cloud-rain.svg";
});

winterCard.addEventListener("click", (event) => {
    event.preventDefault();
    background.className = "background winterImg";
    if (winterPlay === false) {
        GlobalPause();
    };
    mainSound = winterPlayer;
    winterPlay = PlayFunc(winterPlayer, winterPlay);
    winterPlayer.volume = volumeValue;
    iconWinter.src = winterPlay === true ? "./assets/icons/pause.svg" : "./assets/icons/cloud-snow.svg";
});
