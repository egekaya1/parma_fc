export function renderMatches() {
  const matchList = document.getElementById("match-list");
  if (!matchList) return;

  matchList.innerHTML = "";
  const matches = [
    { opponent: "Brescia", date: "2025-08-12", location: "Home" },
    { opponent: "Cremonese", date: "2025-08-19", location: "Away" },
    { opponent: "Frosinone", date: "2025-08-25", location: "Home" },
    { opponent: "Reggina", date: "2025-09-02", location: "Away" }
  ];

  matches.forEach(match => {
    const matchItem = document.createElement("div");
    matchItem.className = "card match-item";
    matchItem.innerHTML = `<h3>${match.date}</h3><p>Parma vs ${match.opponent} (${match.location})</p>`;
    matchList.appendChild(matchItem);
  });
}

export function renderTeam() {
  const teamList = document.getElementById("team-list");
  if (!teamList) return;

  teamList.innerHTML = "";
  const team = [
    { name: "Gianluigi Buffon", position: "Goalkeeper", number: 1, img: "assets/buffon.jpg" },
    { name: "Dennis Man", position: "Forward", number: 98, img: "assets/man.jpg" },
    { name: "Adrian Benedyczak", position: "Forward", number: 7, img: "assets/adrian.jpg" },
    { name: "Vasquez", position: "Midfielder", number: 10, img: "assets/vasquez.jpg" }
  ];

  team.forEach(player => {
    const playerItem = document.createElement("div");
    playerItem.className = "card player-item";
    playerItem.innerHTML = `
      <img src="${player.img}" alt="${player.name}">
      <h3>#${player.number} - ${player.name}</h3>
      <p>${player.position}</p>
    `;
    teamList.appendChild(playerItem);
  });
}