import "./index.scss";

let mainSound: HTMLAudioElement ;
let volumeValue: number = 0.50;
let summerPlay: boolean = false;
let rainyPlay: boolean = false;
let winterPlay: boolean = false;
const background = document.querySelector(".background") as HTMLElement;
const summerCard = document.querySelector("#summerBlock") as HTMLElement;
const rainyCard = document.querySelector("#rainyBlock") as HTMLElement;
const winterCard = document.querySelector("#winterBlock") as HTMLElement;
const summerPlayer = document.querySelector("#summer") as HTMLAudioElement;
const rainyPlayer = document.querySelector("#rainy") as HTMLAudioElement;
const winterPlayer = document.querySelector("#winter") as HTMLAudioElement;
const iconSummer = document.querySelector("#iconSummer") as HTMLImageElement;
const iconRainy = document.querySelector("#iconRainy") as HTMLImageElement;
const iconWinter = document.querySelector("#iconWinter") as HTMLImageElement;
const volume = document.getElementById("volume-slider") as HTMLInputElement;
const volumeInput = document.querySelectorAll<HTMLInputElement>("input[type='range'].inputVolume");

function PlayFunc(Player: HTMLAudioElement, play: boolean): boolean {
    if (play === false) {
        Player.play();
        play = true;
    } else if (play === true) {
        Player.pause();
        play = false;
    };
    return play;
}

function GlobalPause(): void {
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

volume.addEventListener('change', function (e: Event): void {
    const target = e.target as HTMLInputElement;
    if (mainSound !== undefined) {
        mainSound.volume = Number(target.value) / 100;
        volumeValue = Number(target.value) / 100;
    }
});

for (const input of volumeInput) {
    input.style.setProperty("--value", input.value);
    input.style.setProperty("--min", input.min === "" ? "0" : input.min);
    input.style.setProperty("--max", input.max === "" ? "100" : input.max);
    input.addEventListener("input", () => input.style.setProperty("--value", input.value));
}

summerCard.addEventListener("click", (event: Event): void => {
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

rainyCard.addEventListener("click", (event: Event): void => {
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

winterCard.addEventListener("click", (event: Event): void => {
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
