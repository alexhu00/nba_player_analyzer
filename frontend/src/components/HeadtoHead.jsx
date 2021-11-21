import PlayerCard from "./PlayerCard";
import Search from "./SearchBar";
import "../css/HeadtoHead.css";
import { player_data } from "../data/new_data-20-21";
import { useState, React } from "react";

function HeadtoHead() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(1);

    //Keep track of player selected by holding and passing their index
    //Sets index of playerOne
    function selectPlayerOne(playerIndex){
        setPlayerOne(playerIndex);
    }

    //Sets index of playerTwo
    function selectPlayerTwo(playerIndex){
        setPlayerTwo(playerIndex);
    }

    return(
        <div className="overall">
            <div className="searchbar-group">
                <Search placeholder="Search by player name" data={ player_data } updatePlayer={selectPlayerOne}/>
                <Search placeholder="Search by player name" data={ player_data } updatePlayer={selectPlayerTwo}/>
            </div>
            <div className="playercards-group">
                <PlayerCard player={playerOne}></PlayerCard>
                <PlayerCard player={playerTwo}></PlayerCard>
            </div>
        </div>
    );
}

export default HeadtoHead;
