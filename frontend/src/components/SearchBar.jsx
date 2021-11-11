import { useState } from "react";
import React from "react";
import "./SearchBar.css";
import searchicon from "../assets/searchicon.png"

function Search({ placeholder, data, updatePlayer}){
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.Player.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        console.log('newFilter', newFilter);
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    function selectPlayer(value){
    let index = data.findIndex( element => {
        if (element.Player === value.Player) {
            return true;
        }
        });
        updatePlayer(index);
        console.log(value.Player + 'is at index: ' + index);
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