const pairs = [
    ["Bad", "Good"],
    ["Mildly addictive", "Highly addictive"],
    ["Hot", "Cold"],
    ["Normal", "Weird"],
    ["Colorless", "Colorful"],
    ["Low calorie", "High calorie"]
];

const leftTextElement = document.querySelector('#left-panel .text');
const rightTextElement = document.querySelector('#right-panel .text');
const container = document.getElementById('container');

function getRandomPair() {
    const randomIndex = Math.floor(Math.random() * pairs.length);
    return pairs[randomIndex];
}

function randomize() {
    const [leftText, rightText] = getRandomPair();
    leftTextElement.textContent = leftText;
    rightTextElement.textContent = rightText;
}

// Initial random pair
randomize();

// Event listener for clicking anywhere in the container
container.addEventListener('click', randomize);
