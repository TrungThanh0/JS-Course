const section = document.querySelector("section"); 
const playerLivesCount = document.querySelector("span");
const img = document.querySelector("img");
const playerLives = 6 ;

playerLivesCount.textContent = playerLives ;
const x = document.createElement("imgScr");
const getData = () => [
{ imgScr: "./Image/black-car.png", name : "black"},
{ imgScr: "./Image/blue-car.jpn", name : "blue"},
{ imgScr: "./Image/green-car.png", name : "green"},
{imgScr: "./Image/black-car.png", name : "black"},
{imgScr: "./Image/black-car.png", name : "black"},
{imgScr: "./Image/black-car.png", name : "black"},
{imgScr: "./Image/black-car.png", name : "black"},
{imgScr: "./Image/black-car.png", name : "black"},
{imgScr: "./Image/black-car.png", name : "black"},
{imgScr: "./Image/black-car.png", name : "black"},
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();
    cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    face.src = item.imgScr ;

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    });
};



