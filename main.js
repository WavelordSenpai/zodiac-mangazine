const imageThemes = {
  cyberzodiac: [
    "https://i.imgur.com/0fx0byj.png",
    "https://i.imgur.com/N9iRWYx.png",
    "https://i.imgur.com/yD1Z0G5.png"
  ],
  tarotnoir: [
    "https://i.imgur.com/d8VrCUX.png",
    "https://i.imgur.com/yr7SZP0.png",
    "https://i.imgur.com/I7oaKwU.png"
  ],
  occultidols: [
    "https://i.imgur.com/4XZBghY.png",
    "https://i.imgur.com/FmINaAd.png",
    "https://i.imgur.com/GEikXn8.png"
  ]
};

const dialogueLines = [
  "I was born under the star of ruin...",
  "Only the chosen may wield the Zodiac Flame!",
  "This tarot... it's not just a card. It's a curse.",
  "They told me I’d shine on stage. They didn’t say it’d be in hell.",
  "Fate is a script — but I’m rewriting it in fire."
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePanel() {
  const theme = document.getElementById("themeSelect").value;
  const imgSrc = getRandom(imageThemes[theme]);
  const line = getRandom(dialogueLines);

  const panel = document.createElement("div");
  panel.className = "manga-panel";

  const img = document.createElement("img");
  img.src = imgSrc;

  const bubble = document.createElement("div");
  bubble.className = "speech-bubble";
  bubble.innerText = line;

  panel.appendChild(img);
  panel.appendChild(bubble);

  const container = document.getElementById("panelContainer");
  container.innerHTML = ""; // Clear previous
  container.appendChild(panel);
}

function changeTheme() {
  generatePanel(); // auto-generate when theme changes
}
