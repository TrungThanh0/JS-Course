const section = document.querySelector("section"); 
const playerLivesCount = document.querySelector("span");
const img = document.querySelector("img");
const playerLives = 6 ;

playerLivesCount.textContent = playerLives ;



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
var cards = [];
    for (i = 0; i < 20; i++) {
        const getData = () => [
            { imgScr: "./Image/black-car.png", name : "black"},
            { imgScr: "./Image/blue-car.yellow.png", name : "yello"},
            { imgScr: "./Image/green-car.png", name : "green"},
            {imgScr: "./Image/train.png", name : "train"},
            {imgScr: "./Image/red-card.png", name : "red"},
            {imgScr: "./Image/purple.png", name : "purple"},
            {imgScr: "./Image/pink.png", name : "pink"},
            {imgScr: "./Image/orange.png", name : "orange"},
            {imgScr: "./Image/lightgreen.png", name : "lightgreen"},
    ];
        getData.width = 100;
        getData.height = 100;
        getData.x = 0;
        getData.y = 0;
        cards.push(getData);
	}
	function sufferCards() {
        for (i = 0; i < 10; i++) {
            var from = Math.floor(Math.random() * 20);
            var to = Math.floor(Math.random() * 20);
            var tmp = cards[from];
            cards[from] = cards[to];
            cards[to] = tmp;
        }
    }


