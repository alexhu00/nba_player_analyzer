import PlayerCard from "./PlayerCard";
import Search from "./SearchBar";
import "./HeadtoHead.css";
import { players } from "../data/players_20-21-";
import { useState, React } from "react";

function HeadtoHead() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(1);

    function selectPlayerOne(playerIndex){
        setPlayerOne(playerIndex);
    }

    function selectPlayerTwo(playerIndex){
        setPlayerTwo(playerIndex);
    }

  console.log("players", players);

    return(
        <div className="overall">
            <div className="searchbar-group">
                <Search placeholder="Search by player name" data={ players } updatePlayer={selectPlayerOne}/>
                <Search placeholder="Search by player name" data={ players } updatePlayer={selectPlayerTwo}/>
            </div>
            <div className="playercards-group">
                <PlayerCard player={playerOne}></PlayerCard>
                <PlayerCard player={playerTwo}></PlayerCard>
            </div>
        </div>
    );
}

export default HeadtoHead;
