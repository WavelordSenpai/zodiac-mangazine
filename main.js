const heroJourneySteps = [
  "1. The Ordinary World",
  "2. The Call to Adventure",
  "3. Refusal of the Call",
  "4. Meeting the Mentor",
  "5. Crossing the First Threshold",
  "6. Tests, Allies, and Enemies",
  "7. Approach to the Inmost Cave",
  "8. The Ordeal",
  "9. Reward (Seizing the Sword)",
  "10. The Road Back",
  "11. Resurrection",
  "12. Return with the Elixir"
];

const archetypes = ["The Seer", "The Trickster", "The Warrior", "The Lost One", "The Oracle", "The Outcast"];
const realms = ["Dreamscape", "The Infinite Library", "Shadow Nexus", "Sky Vault", "Soul Arena"];
const objects = ["Mirror Blade", "Chrono Seed", "Eclipse Mask", "Serpent Scroll"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStory() {
  let story = "📖 **Zodiac Tale**\n\n";

  const hero = getRandom(archetypes);
  const realm = getRandom(realms);
  const item = getRandom(objects);

  story += `Main Character: ${hero}\nSetting: ${realm}\nArtifact: ${item}\n\n🌌 Journey:\n\n`;

  heroJourneySteps.forEach((step, i) => {
    story += `${step}: "${generateLine(hero, realm, item, i)}"\n\n`;
  });

  return story;
}

function generateLine(hero, realm, item, index) {
  const lines = [
    `${hero} lives in the ${realm}, unaware of the ${item} buried deep beneath the sands.`,
    `A dream calls ${hero} to retrieve the ${item} and restore balance.`,
    `${hero} hesitates — fear of the unknown coils like a serpent.`,
    `A masked figure whispers secrets of the ${item} to guide them.`,
    `${hero} steps into a gate of ink and fire, leaving ${realm} behind.`,
    `They meet allies — a haunted swordsmith and a floating librarian.`,
    `A forgotten temple beckons from the mist with echoing chants.`,
    `A shadow self appears — a version of ${hero} twisted by doubt.`,
    `Emerging victorious, they grasp the ${item}, which burns with starlight.`,
    `The sky fractures; ${hero} must return before it all collapses.`,
    `They face a final riddle, proving their heart worthy of fate.`,
    `Back in ${realm}, they open the ${item}, releasing light into all corners of the world.`
  ];
  return lines[index] || "Mystery deepens...";
}

document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("output").textContent = generateStory();
});
