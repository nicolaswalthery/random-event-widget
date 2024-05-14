document.getElementById('generate-btn').addEventListener('click', generateEvent);

const events = [
    "A sudden storm erupts, forcing the party to seek shelter.",
    "A mysterious traveler offers the party a magical artifact.",
    "The ground trembles as an earthquake shakes the area.",
    "The party stumbles upon a hidden treasure chest.",
    "A group of bandits ambushes the party.",
    "An ancient dragon appears on the horizon.",
    "The party finds a map leading to a lost city.",
    "A friendly NPC asks for the party's help with a quest.",
    "A portal to another dimension opens before the party.",
    "The party encounters a wandering merchant selling rare items.",
    "A man is currently observing you from the bushes."
];

function generateEvent() {
    const randomIndex = Math.floor(Math.random() * events.length);
    const eventText = events[randomIndex];
    document.getElementById('event-display').innerText = eventText;
}
