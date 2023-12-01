const express = require("express");
const app = express();
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
app.use(express.json());
const dbPath = path.join(__dirname, "cricketTeam.db");
let db = null;

const initializeDB = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3004, () => {
      console.log("server started on 3004 port");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDB();

//Get Players API
app.get("/players/", async (request, response) => {
  const getPlayersQuery = `
    select * from players;`;
  const players = await db.all(getPlayersQuery);
  const playersMod = () => {
    return players.map((item) => {
      return {
        playerId: item.player_id,
        playerName: item.player_name,
        jerseyNumber: item.jersey_number,
        role: item.role,
      };
    });
  };
  response.send(playersMod());
});

//Create Player API
app.post("/players/", async (request, response) => {
  const { playerName, jerseyNumber, role } = request.body;
  const createPlayerQuery = `
    insert into players (player_name,jersey_number,role) values(
        '${playerName}',
        ${jerseyNumber},
        '${role}');`;
  const dbResponse = await db.run(createPlayerQuery);
  response.send("Player Added to Team");
});

//Get Player API
app.get("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const getPlayerQuery = `
    select * from players where player_id=
    ${playerId};`;
  const player = await db.get(getPlayerQuery);
  const playerMod = () => {
    return {
      playerId: player.player_id,
      playerName: player.player_name,
      jerseyNumber: player.jersey_number,
      role: player.role,
    };
  };
  response.send(playerMod());
});

//Update Player API
app.put("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const { playerName, jerseyNumber, role } = request.body;
  const updatePlayerQuery = `
    update players set 
    player_name='${playerName}',
    jersey_number=${jerseyNumber},
    role='${role}'
    where player_id=${playerId};`;
  await db.run(updatePlayerQuery);
  response.send("Player Details Updated");
});

//Delete Player API
app.delete("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const deletePlayerQuery = `
    delete from players
    where player_id=${playerId};`;
  await db.run(deletePlayerQuery);
  response.send("Player Removed");
});

module.exports = app;
