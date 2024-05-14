const tablePage26 = ["Before the Shift, 1,100+", "Before the Blood Mist, 300–1,100", "During the Alder Wars, 305–360", "In the age of the Blood Mist, 5–280"];
const tablePage27a = ["Bloodthirsty", "Vengeful", "Greedy", "Unhappy in love", "Ingenious", "Enterprising", "Kind", "Perseverant", "Treacherous", "Moral", "Skilled", "Stingy", "Vain", "Wise", "Beautiful", "Honorable", "Jealous", "Cruel", "Determined", "Cunning", "Scared", "Evil"];
const tablePage27b = ["Elf", "Dwarf", "Peddler", "Smith", "Farmer", "Apprentice", "Druid", "Shepherd", "Raven Sister", "Rust Brother", "Rider", "Treasure Hunter", "Priest", "Sorcerer", "Robber Chieftain", "Warrior", "Lord", "Prince", "Princess", "Queen", "King", "Monster"];
const tablePage28 = ["sought a weapon because of love", "sought a treasure because of a bet", "sought a map because of duty", "sought an artifact because of honor", "sought a monster because of insanity"];
const tablePage29 = ["in a dark forest to the west where it is said they were enchanted", "in mountains to the north where it is said they still search", "in ruins to the south where it is said they died in battle", "on a lake to the east where it is said they were possessed"];
const tablePage30 = ["and also encountered aggressive Wolfkin", "and also dealt with bloodthirsty Slave Traders", "and also faced cruel Orcs", "and also survived horrible Ghosts"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateLegend() {
    const age = getRandomElement(tablePage26);
    const character = getRandomElement(tablePage27a) + ' ' + getRandomElement(tablePage27b);
    const quest = getRandomElement(tablePage28);
    const location = getRandomElement(tablePage29);
    const encounter = getRandomElement(tablePage30);

    const legend = `A long time ago, ${age}, there was a ${character} who ${quest} ${location} ${encounter}.`;
    document.getElementById('legend').textContent = legend;
}

function copyText() {
    const text = document.getElementById('legend').innerText;
    navigator.clipboard.writeText(text).then(() => {
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

