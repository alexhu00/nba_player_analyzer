import { players } from "../data/players_20-21-";
import "./PlayerCard.css";
import { useState } from "react";

function PlayerCard(props) {
  console.log("players", players);

  //Take input player ID as current playerCard to display
  const player = players[props.player];

  //Parse name string to get first and last name as separate strings
  const playerName = player.Player.split(" ");
  const playerFirstName = playerName[0];
  const playerLastName = playerName[1];

  const playerData = initializeValues(player);

  const iterateValuesOnly = playerData.map((value, key) => {
    return (
      <div>
        {Object.keys(value).map((val, k) => (
          <div className="number" k={k}>
            {value[val]}
          </div>
        ))}
      </div>
    );
  });

  function initializeValues(player) {
    const divideFTM = (player.FT / player.FTA).toFixed(2);
    const divideFGM = (player.FG / player.FGA).toFixed(2);
    //Fix later: how to reference integer 3 as a part of the key string?
    //const threePTM = player.$3P;
    const threePTM = player.PTS;

    const dataArray = [
      { "FGM/A": divideFGM },
      { "FG%": player.FG },
      { "FTM/A": divideFTM },
      { "FT%": player.FT },
      { "3PTM": threePTM },
      { PTS: player.PTS },
      { REBS: player.TRB },
      { AST: player.AST },
    ];
    console.log(dataArray);
    return dataArray;
  }

  return (
    <div className="whole-card">
      <div className="player-name">
          <div className="first">{playerFirstName}</div>
          <div className="last">{playerLastName}</div>
      </div>
      <div className="card-box">
        <div className="data-labels">
          <p className="light">FGM/A</p>
          <p>FG%</p>
          <p className="light">FTM/A</p>
          <p>FT%</p>
          <p>3PTM</p>
          <p>PTS</p>
          <p>REBS</p>
          <p>AST</p>
        </div>
        <div className="time-label">Last week</div>
        <div className="data-row">{iterateValuesOnly}</div>
{/*DON'T HAVE DATA YET FOR PREVIOUS SEASONS, FILL WITH TEMP CURRENT DATA */}
        <div className="time-label">Last 2 weeks</div>
        <div className="data-row">{iterateValuesOnly}</div>
        <div className="time-label">Last month</div>
        <div className="data-row">{iterateValuesOnly}</div>
        <div className="time-label">2019 Season</div>
        <div className="data-row">{iterateValuesOnly}</div>
      </div>
    </div>
  );
}

export default PlayerCard;
