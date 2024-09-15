let pairs = [
    ["Bad", "Good"],
    ["Mildly addictive", "Highly addictive"],
    ["Hot", "Cold"],
    ["Normal", "Weird"],
    ["Colorless", "Colorful"],
    ["Low calorie", "High calorie"]
];

// Elements where the text will be displayed
const leftTextElement = document.querySelector('#left-panel .text');
const rightTextElement = document.querySelector('#right-panel .text');
const container = document.getElementById('container');

// Function to get a random pair
function getRandomPair() {
    const randomIndex = Math.floor(Math.random() * pairs.length);
    return pairs[randomIndex];
}

// Function to adjust the font size dynamically
function adjustFontSize(panelElement) {
    const textElement = panelElement.querySelector('.text');
    let fontSize = parseFloat(window.getComputedStyle(textElement).fontSize);

    // Max number of lines allowed
    const maxLines = 2;

    // Decrease the font size if the text overflows the container
    while (textElement.scrollHeight > textElement.clientHeight || textElement.scrollWidth > textElement.clientWidth) {
        if (fontSize <= 10) break; // Stop at a minimum font size
        fontSize -= 1;
        textElement.style.fontSize = `${fontSize}px`;
    }

    // Increase the font size to make it as large as possible while fitting within 2 lines
    while (textElement.scrollHeight <= textElement.clientHeight && fontSize < 100 && textElement.scrollHeight / fontSize < maxLines) {
        fontSize += 1;
        textElement.style.fontSize = `${fontSize}px`;
    }
}

// Function to randomize the content and adjust font sizes
function randomize() {
    const [leftText, rightText] = getRandomPair();
    leftTextElement.textContent = leftText;
    rightTextElement.textContent = rightText;

    // Adjust font size to fit the text within both panels
    adjustFontSize(document.getElementById('left-panel'));
    adjustFontSize(document.getElementById('right-panel'));
}

// Event listener for clicking anywhere in the container
container.addEventListener('click', randomize);

// Initial randomization
randomize();
