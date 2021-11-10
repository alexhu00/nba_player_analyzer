import React, { useMemo } from "react";
import "./AllPlayers.css";
import NavBar from "../NavBar";
import Modal from "./createGroupModal";
import { players } from "../nba_player_data_20-21-";
import { useTable } from "react-table";
// import nba_player_data_20-21-- from "./nba_player_data_20-21--.json"
import { COLUMNS } from "./columnsAP";
import "./resetButton.css"
import "./sortButton.css"


// Importing React-Table : https://www.bacancytechnology.com/blog/react-table-tutorial-part-1/#4
// TABLE TUTORIAL: https://www.youtube.com/watch?v=hson9BXU9F8
// CSV TO JSON Convertor: https://www.convertcsv.com/csv-to-json.htm

const AllPlayers = () => {
  // Get checkboxes
  function getSelectedCheckboxItems(name) {
    let values = [];
    // grabs all checkboxes that are checked
    const checkboxes = document.querySelectorAll(
      `input[name="${name}"]:checked`
    );
    checkboxes.forEach((checkbox) => {
      values.push(checkbox);
    });
    // returns arrays of all checkboxes that are checked
    return values;
  }

  // Get data from checkboxes
  const showCheckBoxData = () => {
    console.log("hello");
    let vals = getSelectedCheckboxItems("itemCheckbox");
    // console.log(vals[0].getAttribute("data"));
    let objects = [];
    if (vals.length != 0) {
      for (let i = 0; i < vals.length; i++) {
        let str_data = vals[i].getAttribute("data");
        let obj_data = JSON.parse(str_data);
        objects.push(obj_data);
      }
    }
    if (objects.length != 0) {
      console.log(objects);
      alert(
        "There are " +
        objects.length.toString() +
        " players selected and " +
        objects[0].Player +
        " is the First Player Selected!"
      );
    }

  };

  // Select All Checkboxes
  function toggle(source, name) {
    let checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    let input = document.querySelectorAll(`input[name="${source}"]`)[0];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked !== input.checked) {
        checkbox.checked = input.checked;
      }
    });
  }


  // Creating React-Table
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => players, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      <button
        className={"createGroup-button"}
      > Show create modal
      </button>
      <Modal />


      <button onClick={showCheckBoxData}>Click</button>
      <button
        onClick={() => console.log('her')}
        className={"reset-button"}
      >Reset</button>
      <button
        onClick={() => console.log('hahs')}
        className={"sort-button"}
      >Sort by Stat</button>
      <table {...getTableBodyProps} className="whole-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <input
                type="checkbox"
                name="selectAll"
                // Selects all items
                onClick={() => toggle("selectAll", "itemCheckbox")}
              ></input>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                <input
                  type="checkbox"
                  name="itemCheckbox"
                  data={JSON.stringify(row.values)}
                ></input>
                {/* {console.log(row.original)} */}
                {/* {console.log(row.values["Player"])} */}
                {row.cells.map((cell) => {
                  // console.log(cell.render("Cell"));
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// the home page with the items and the stuff at the bottom
const Home = () => (
  <div>
    <NavBar />
    <header>
      <h1>Welcome to All Players</h1>

      <AllPlayers />
    </header>
  </div>
);

export { AllPlayers, Home };
