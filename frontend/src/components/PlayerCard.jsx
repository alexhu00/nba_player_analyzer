import { player_data } from "../data/new_data-20-21";
import { onePrevPlayers } from "../data/uncleaned_players_19-20";
import { twoPrevPlayers } from "../data/uncleaned_players_18-19";
import "../css/PlayerCard.css";
import { useState } from "react";

function PlayerCard(props) {

  //Take input player ID as current playerCard to display
  const player = player_data[props.player];
  
  //Find the index of this player
  const onePrevIndex = onePrevPlayers.findIndex(obj => obj.Player === player.Player);
  const twoPrevIndex = twoPrevPlayers.findIndex(obj => obj.Player = player.Player);

  //Use index to find correct player object
  const onePrevPlayer = onePrevPlayers[onePrevIndex];
  const twoPrevPlayer = twoPrevPlayers[twoPrevIndex];

  console.log("player", player);
  console.log("oneprev", onePrevPlayer);
  console.log("twoprev", twoPrevPlayer);

  //Parse name string to get first and last name as separate strings
  const playerName = player.Player.split(" ");
  const playerFirstName = playerName[0];
  const playerLastName = playerName[1];

  const playerData = initializeValues(player);
  const onePrevPlayerData = initializeValues(onePrevPlayer);
  const twoPrevPlayerData = initializeValues(twoPrevPlayer);

  function initializeValues(player) {
    let dataArray = [];
    //If player exists, produce values
    if (player){
      const divideFTM = (player.FT / player.FTA).toFixed(2);
      const divideFGM = (player.FG / player.FGA).toFixed(2);
  
      dataArray = [
        { "FGM/A": divideFGM },
        { "FG%": player.FG.toFixed(2) },
        { "FTM/A": divideFTM },
        { "FT%": player.FT.toFixed(2) },
        { "STL": player.STL.toFixed(2) },
        { PTS: player.PTS.toFixed(2) },
        { REBS: player.TRB.toFixed(2) },
        { AST: player.AST.toFixed(2) },
      ];
    }
    //Otherwise, just produce NaN values for everything
    else{
      dataArray = [
        { "FGM/A": "NaN" },
        { "FG%": "NaN" },
        { "FTM/A": "NaN" },
        { "FT%": "NaN" },
        { "STL": "NaN" },
        { PTS: "NaN" },
        { REBS: "NaN" },
        { AST: "NaN" },
      ];
    }
    console.log(dataArray);
    return dataArray;
  }


  //I'm lazy right now, so this is iterating values for current season
  const iterateCurrent = playerData.map((value, key) => {
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

  //I'm lazy right now, so this is iterating values for one year previous
  const iterateOneYearPrev = onePrevPlayerData.map((value, key) => {
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

  //I'm lazy right now, so this is iterating values for two years previous
  const iterateTwoYearPrev = twoPrevPlayerData.map((value, key) => {
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
          <p>STL</p>
          <p>PTS</p>
          <p>REBS</p>
          <p>AST</p>
        </div>
        <div className="time-label">2020-2021 Season</div>
        <div className="data-row">{iterateCurrent}</div>
        <div className="time-label">2019-2020 Season</div>
        <div className="data-row">{iterateOneYearPrev}</div>
        <div className="time-label">2018-2019 Season</div>
        <div className="data-row">{iterateTwoYearPrev}</div>
      </div>
    </div>
  );
}

export default PlayerCard;
