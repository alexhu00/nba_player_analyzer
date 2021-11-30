import React, { useState, useMemo } from "react";
import { player_data } from "../data/new_data-20-21";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columnsAP";
import NavBar from "../NavBar";
import MultiModal from "./multimodal";

// CSS imports
import "../css/AllPlayers.css";
import "../css/resetButton.css";
import "../css/sortButton.css";
import "../css/buttonStyling.css";

const groupData = require("../data/groupDataFake.json");

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
  const addToGroup = () => {
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

    // uncheck all checkboxes
    let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Adds to Gropu 1 Currently
    if (objects.length !== 0) {
      console.log(Object.entries(groupData[0])[2][1]); // 0 for object, 2 for players, 1 for the array
      for (let i = 0; i < objects.length; i++) {
        // groupData.push(objects[i]);
        Object.entries(groupData[0])[2][1].push(objects[i]);
      }
      // console.log(Object.entries(groupData[0]));
      return objects;
    }
  };

  // Get data from checkboxes
  const createGroup = () => {
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

    // uncheck all checkboxes
    let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    if (objects.length !== 0) {
      let newGroup = { id: 6, name: "New Group", players: objects };
      groupData.push(newGroup);
      console.log(groupData);
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
  }, useSortBy);

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
