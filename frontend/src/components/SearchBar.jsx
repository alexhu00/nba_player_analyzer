import { useState } from "react";
import React from "react";
import "../css/SearchBar.css";
import searchicon from "../assets/searchicon.png"

function Search({ placeholder, data, updatePlayer}){
    //filteredData based off of search word
    const [filteredData, setFilteredData] = useState([]);
    //search word
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.Player.toLowerCase().includes(searchWord.toLowerCase());
      });

      //If empty searchbar, then set filteredData to empty array
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        //Otherwise, setFilteredData based off of newFilter return
        console.log('newFilter', newFilter);
        setFilteredData(newFilter);
      }
    };

    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    //Select player from dropdown list and filteredData
    function selectPlayer(value){
      let index = data.findIndex( element => {
          if (element.Player === value.Player) {
              return true;
          }
        });
        //Send the index of the player selected up to parent component
        //Index is used to keep track of player
        updatePlayer(index);
        console.log(value.Player + 'is at index: ' + index);
        //After selecting value, clear input/searchbar
        clearInput();
    }

    return(
        <div>
            <div className="search-group">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                    className="searchbar"
                />
                <img className="search-icon" src={searchicon} />
            </div>
            {/* <Button onClick={clearInput}></Button> */}
            <div>
            <div className="filtered-list">
                {filteredData.map((value, key) => (
                    <button className="player-option" onClick={(event) => selectPlayer(value)}>{value.Player}</button>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Search;