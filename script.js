let pairs = [
    ["Bad", "Good"],
    ["Mildly addictive", "Highly addictive"],
    ["Hot", "Cold"],
    ["Normal", "Weird"],
    ["Colorless", "Colorful"],
    ["Low calorie", "High calorie"],
    ["Feels bad", "Feels good"],
    ["Inessential", "Essential"],
    ["Cheap", "Expensive"],
    ["Underrated weapon", "Overrated weapon"],
    ["Rare", "Common"],
    ["Easy subject", "Hard subject"],
    ["Unknown", "Famous"],
    ["Difficult to use", "Easy to use"],
    ["Tired", "Wired"],
    ["Dirty", "Clean"],
    ["Requires luck", "Requires skill"],
    ["Flavorless", "Flavorful"],
    ["Boring topic", "Fascinating topic"],
    ["Bad actor", "Good actor"],
    ["Basic", "Hipster"],
    ["Dangerous job", "Safe job"],
    ["Fantasy", "Sci-Fi"],
    ["Casual", "Formal"],
    ["Underpaid", "Overpaid"],
    ["Dry", "Wet"],
    ["Underrated skill", "Overrated skill"],
    ["Forbidden", "Encouraged"],
    ["Sad song", "Happy song"],
    ["Fragile", "Durable"],
    ["Geek", "Dork"],
    ["Good", "Evil"],
    ["Worst day of the year", "Best day of the year"],
    ["Bad habit", "Good habit"],
    ["Cat person", "Dog person"],
    ["Guilty pleasure", "Openly love"],
    ["Untalented", "Talented"],
    ["Dark", "Light"],
    ["Underrated actor", "Overrated actor"],
    ["Hard to find", "Easy to find"],
    ["Ugly man", "Beautiful man"],
    ["Hard to remember", "Easy to remember"],
    ["Lowbrow", "Highbrow"],
    ["Unhealthy", "Healthy"],
    ["Bad man", "Good man"],
    ["Historically important", "Historically irrelevant"],
    ["Hairless", "Hairy"],
    ["Inflexible", "Flexible"],
    ["Normal pet", "Exotic pet"],
    ["Introvert", "Extrovert"],
    ["Book was better", "Movie was better"],
    ["Bad movie", "Good movie"],
    ["Ugly", "Beautiful"],
    ["Happens slowly", "Happens suddenly"],
    ["Job", "Career"],
    ["Loved", "Hated"],
    ["The Light Side of the Force", "The Dark Side of the Force"],
    ["Bad pizza topping", "Good pizza topping"],
    ["Dystopia", "Utopia"],
    ["Mature person", "Immature person"],
    ["Underrated thing to own", "Overrated thing to own"],
    ["Mean person", "Nice person"],
    ["Action movie", "Adventure movie"],
    ["Mental activity", "Physical activity"],
    ["Uncontroversial topic", "Controversial topic"],
    ["Need", "Want"],
    ["Dry food", "Wet food"],
    ["Normal thing to own", "Weird thing to own"],
    ["Straight", "Curvy"],
    ["Bad person", "Good person"],
    ["80s", "90s"],
    ["Ethical to eat", "Unethical to eat"],
    ["Movie", "Film"],
    ["Optional", "Mandatory"],
    ["Underrated letter of the alphabet", "Overrated letter of the alphabet"],
    ["Ordinary", "Extraordinary"],
    ["Hard to pronounce", "Easy to pronounce"],
    ["Low quality", "High quality"],
    ["Plain", "Fancy"],
    ["Has a bad reputation", "Has a good reputation"],
    ["Poorly made", "Well made"],
    ["Not a sandwich", "A sandwich"],
    ["Quiet place", "Loud place"],
    ["Comedy", "Drama"],
    ["Dangerous", "Safe"],
    ["Culturally significant", "Culturally insignificant"],
    ["Replaceable", "Irreplaceable"],
    ["Worst athlete of all time", "Greatest athlete of all time"],
    ["Role model", "Bad influence"],
    ["Useless major", "Useful major"],
    ["Peaceful", "Warlike"],
    ["Underrated movie", "Overrated movie"],
    ["Rough", "Smooth"],
    ["Bad for you", "Good for you"],
    ["Round", "Pointy"],
    ["Proof that God exists", "Proof that God doesn稚 exist"],
    ["Sad movie", "Happy movie"],
    ["Waste of time", "Good use of time"],
    ["Scary animal", "Nice animal"],
    ["Mainstream", "Niche"],
    ["Short lived", "Long lived"],
    ["Nobody does it", "Everybody does it"],
    ["Smells bad", "Smells good"],
    ["Star Wars", "Star Trek"],
    ["Snack", "Meal"],
    ["Least evil company", "Most evil company"],
    ["Soft", "Hard"],
    ["Sustenance", "Haute cuisine"],
    ["Square", "Round"],
    ["Better hot", "Better cold"],
    ["Stupid", "Brilliant"],
    ["Artisanal", "Mass produced"],
    ["Bad superpower", "Good superpower"],
    ["Ineffective", "Effective"],
    ["Unbelievable", "Believable"],
    ["Trashy", "Classy"],
    ["Temporary", "Permanent"],
    ["Looks like a person", "Doesn't look like a person"],
    ["Tastes bad", "Tastes good"],
    ["Sport", "Game"],
    ["Uncool", "Cool"],
    ["Worst living person", "Greatest living person"],
    ["Underrated", "Overrated"],
    ["Messy food", "Clean food"],
    ["Unethical", "Ethical"],
    ["Bad gift", "Good gift"],
    ["Unfashionable", "Fashionable"],
    ["Freedom fighter", "Terrorist"],
    ["Unforgiveable", "Forgiveable"],
    ["Failure", "Masterpiece"],
    ["Harmless", "Harmful"],
    ["Gryffindor", "Slytherin"],
    ["Unhygienic", "Hygienic"],
    ["Bad music", "Good music"],
    ["Useless", "Useful"],
    ["Movie that Godzilla would ruin", "Movie that Godzilla would improve"],
    ["Unimportant", "Important"],
    ["Easy to spell", "Hard to spell"],
    ["Vice", "Virtue"],
    ["Underrated musician", "Overrated musician"],
    ["Unpopular activity", "Popular activity"],
    ["Divided", "Whole"],
    ["Unreliable", "Reliable"],
    ["Easy to kill", "Hard to kill"],
    ["Unstable", "Stable"],
    ["Round animal", "Pointy animal"],
    ["Bad TV show", "Good TV show"],
    ["Traditionally masculine", "Traditionally feminine"],
    ["Useless body part", "Useful body part"],
    ["Fad", "Classic"],
    ["Weak", "Strong"],
    ["Disgusting cereal", "Delicious cereal"],
    ["Useless invention", "Useful invention"],
    ["Liberal", "Conservative"],
    ["Unpopular", "Popular"],
    ["Friend", "Enemy"],
    ["Boring", "Exciting"],
    ["Smelly in a bad way", "Smelly in a good way"],
    ["Villain", "Hero"],
    ["Underrated thing to do", "Overrated thing to do"],
    ["Useless in an emergency", "Useful in an emergency"],
    ["For kids", "For adults"],
    ["Wise", "Intelligent"],
    ["Easy to do", "Hard to do"],
    ["Worthless", "Priceless"],
    ["Nature", "Nurture"],
    ["Dictatorship", "Democracy"],
    ["Normal greeting", "Weird greeting"],
    ["Dog name", "Cat name"],
    ["Non-partisan", "Partisan"],
    ["Limited", "Infinite"],
    ["Casual event", "Formal event"],
    ["Bad investment", "Good investment"],
    ["Small talk", "Heavy topic"],
    ["Mild", "Spicy"],
    ["Religious", "Sacrilegious"],
    ["Not art", "Art"],
    ["Illegal", "Prohibited"],
    ["Popular", "Elitist"],
    ["Out of control", "In control"],
    ["Quiet", "Loud"],
    ["Secret", "Public knowledge"],
    ["Too small", "Too big"],
    ["Short", "Long"],
    ["Worst year in history", "Best year in history"],
    ["Socialist", "Capitalist"],
    ["Little known fact", "Well known fact"],
    ["Stationary", "Mobile"],
    ["Local issue", "Global issue"],
    ["Talent", "Skill"],
    ["Worst era to time travel", "Best era to time travel"],
    ["The worst", "The best"],
    ["Small number", "Large number"],
    ["True ", "FALSE"],
    ["Old fashioned", "Avant garde"],
    ["Ugly word", "Beautiful word"],
    ["Small", "Tiny"],
    ["Unnatural", "Natural"],
    ["Genuine person", "Phony person"],
    ["Derivative", "Original"],
    ["Etiquette", "Manners"],
    ["Benefits you", "Benefits everyone"],
    ["Powerless", "Powerful"],
    ["Doesn稚 vape", "Vapes"],
    ["Fruit", "Vegetable"],
    ["Science", "Pseudoscience"],
    ["Funny topic", "Serious topic"],
    ["Limp", "Firm"],
    ["Guilty pleasure", "Actually just bad"],
    ["Gossip", "News"],
    ["Hard to sit on", "Easy to sit on"],
    ["Not enough", "Too much"],
    ["Horizontal", "Vertical"],
    ["Unscented", "Scented"],
    ["Huggable", "Not huggable"],
    ["Heterogeneous", "Homogenous"],
    ["Inclusive", "Exclusive"],
    ["Bad dog breed", "Good dog breed"],
    ["Art", "Commerce"],
    ["One hit wonder", "Pop icon"],
    ["Bad advice", "Good advice"],
    ["Tick", "Tock"],
    ["Bad candy", "Good candy"],
    ["Traditional", "Radical"],
    ["Bad mouthfeel", "Good mouthfeel"],
    ["Illegal", "Legal"],
    ["Deep thought", "Shallow thought"],
    ["Bad school", "Good school"],
    ["Never on time", "Always on time"],
    ["Won't live to 100", "Will live to 100"],
    ["Bad Disney character", "Good Disney character"],
    ["Similar", "Identical"],
    ["Bad president", "Good president"],
    ["Weird", "Strange"],
    ["Famous", "Infamous"],
    ["Least powerful god", "Most powerful god"],
    ["Boring person", "Fun person"],
    ["Underrated book", "Overrated book"],
    ["Conventional wisdom", "Fringe belief"],
    ["Worst chore", "Best chore"],
    ["Endangered species", "Overpopulated species"],
    ["Blue", "Green"],
    ["Thrilling", "Terrifying"],
    ["Nerd", "Jock"],
    ["Expected", "Unexpected"],
    ["Person you could beat up", "Person who壇 beat you up"],
    ["Unreasonable phobia", "Reasonable phobia"],
    ["Underrated game", "Overrated game"],
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
