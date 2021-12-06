import React, { useState, useMemo } from "react";
import { player_data } from "../data/new_data-20-21";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columnsAP";
import NavBar from "../NavBar";
import MultiModal from "./multimodal";

import { addToGroup, createGroup } from "./groupingFunctions";

// CSS imports
import "../css/AllPlayers.css";
import "../css/resetButton.css";
import "../css/sortButton.css";
import "../css/buttonStyling.css";

// Importing React-Table : https://www.bacancytechnology.com/blog/react-table-tutorial-part-1/#4
// TABLE TUTORIAL: https://www.youtube.com/watch?v=hson9BXU9F8
// CSV TO JSON Convertor: https://www.convertcsv.com/csv-to-json.htm

const AllPlayers = () => {
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

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  console.log(data);

  const {
    // getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      <div className={"actionButtonsGroup"}>
        {/* <button onClick={() => setShow(true)} className={"createGroup-button"}>
          {" "}
          Create new group
        </button>
        <GroupModal onClose={() => setShow(false)} show={show} />
        <div class="divider" />
        <button onClick={() => setShow(true)} className={"addToTeam-button"}>
          {" "}
          Add to group
        </button>
        <div class="divider" />
        <AddToExistingModal onClose={() => setShow(false)} show={show} className={"addToExisting"} /> */}
        <MultiModal />

        <button onClick={addToGroup} className="createGroup-button">
          Add to Group 1
        </button>
        <button onClick={createGroup} className="createGroup-button">
          Create Group
        </button>
        <div class="divider" />
      </div>

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
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
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
      <AllPlayers />
    </header>
  </div>
);

export { AllPlayers, Home };
