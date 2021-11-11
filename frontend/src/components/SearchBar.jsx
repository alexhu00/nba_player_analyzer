import { useState } from "react";
import React from "react";

function Search({ placeholder, data, updatePlayer}){
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState(0);
  
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
        setSelectedPlayer(index);
        updatePlayer(index);
        console.log(value.Player + 'is at index: ' + index);
        clearInput();
    }

    return(
        <div>
            <input
                type="text"
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter}
            />
            {/* <Button onClick={clearInput}></Button> */}
            <div>
            <div>
                {filteredData.map((value, key) => (
                    <button onClick={(event) => selectPlayer(value)}>{value.Player}</button>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Search;