import React, { useState, useMemo } from "react";
import "./AllPlayers.css";
import NavBar from "../NavBar";
import Modal from "./createGroupModal";
import { player_data } from "../data/new_data-20-21";
import { useTable } from "react-table";
import { COLUMNS } from "./columnsAP";
import "../css/resetButton.css";
import "../css/sortButton.css";

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

  // Reveal dropdown menu
  const dropDown = () => {
    document.getElementById('dropdown').classList.toggle("show")
  }
  
  // Sorting table by points
  const sortPoints = () => {
    console.log(player_data)
    var table = document.getElementById("player-table")
    // console.log(table)
    var rowOne = table.rows[1]
    var rowTwo = table.rows[2]
    console.log(rowOne)
    // console.log(rowTwo)

    // var rows = table.rows
    // var firstrow = rows[1]
    // var point = firstrow.getElementsByTagName("TD")[4].innerHTML
    // console.log(table)

    // var N = rows.length - 1
    // var i, j, key

    // for(i = 2; i < N; i++) {
    //   j = i

    //   var pointOne = rows[j].getElementsByTagName("TD")[4].innerHTML
    //   var pointTwo = rows[j - 1].getElementsByTagName("TD")[4].innerHTML
      
    //   while(j > 1 && pointOne < pointTwo) {
    //     // console.log(rows[j-1].getElementsByTagName("TD")[1].innerHTML + " before " + rows[j].getElementsByTagName("TD")[1].innerHTML)
    //     rows[j-1].parentNode.insertBefore(rows[j], rows[j-1])
    //     j--
    //   }
    // }

  }

  // Get data from checkboxes
  const showCheckBoxData = () => {
    console.log("hello");
    let vals = getSelectedCheckboxItems("itemCheckbox");
    // console.log(vals[0].getAttribute("data"));
    let objects = [];
    if (vals.length !== 0) {
      for (let i = 0; i < vals.length; i++) {
        let str_data = vals[i].getAttribute("data");
        let obj_data = JSON.parse(str_data);
        objects.push(obj_data);
      }
    }
    if (objects.length !== 0) {
      console.log(objects);
      alert(
        "There are " +
          objects.length.toString() +
          " players selected and " +
          objects[0].Player +
          " is the First Player Selected!"
      );
      return objects;
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
  // Show Modals
  const [show, setShow] = useState(false);

  // Creating React-Table
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => player_data, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  console.log(data)

  const {
    // getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      <button onClick={() => setShow(true)} className={"createGroup-button"}>
        {" "}
        Show create modal
      </button>
      <Modal onClose={() => setShow(false)} show={show} />
      <button onClick={showCheckBoxData}>Click</button>

      {/* SORT BUTTON */}
      <button onClick={() => dropDown()} className="sort-button allPlayers">
        <span className="text">Sort By Stat</span>
        <span className="arrow-up" />
        <span className="arrow-down" />
      </button>
      <div id="dropdown" className="dropdown-content">
        <button onClick={() => sortPoints()}>Points</button>
        <button>Rebounds</button>
        <button>Assists</button>
      </div>

      {/* TABLE CREATION */}
      <table {...getTableBodyProps} className="whole-table" id="player-table">
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
                {row.cells.map((cell) => {
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
