import React, { useState, useMemo } from "react";
import { player_data } from "../data/new_data-20-21";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columnsAP";
import NavBar from "../NavBar";
import MultiModal from "./multimodal";
import axios from "axios";

// CSS imports
import "../css/AllPlayers.css";
import "../css/resetButton.css";
import "../css/sortButton.css";
import "../css/buttonStyling.css";

const groupData = require("../data/groupDataFake.json");

// Get checkboxes
export function getSelectedCheckboxItems(name) {
  let values = [];
  // grabs all checkboxes that are checked
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  checkboxes.forEach((checkbox) => {
    values.push(checkbox);
  });
  // returns arrays of all checkboxes that are checked
  return values;
}

// Get data from checkboxes
export const addToGroup = (token, checked, names) => {
  const userId = token.token;
  const groupId = checked;
  const groupName = names;


  console.log("hello!, userid", userId)
  console.log("hello!, groupid", groupId);
  let vals = getSelectedCheckboxItems("itemCheckbox");
  // console.log(vals[0].getAttribute("data"));
  let objects = [];
  if (vals.length !== 0) {
    for (let i = 0; i < vals.length; i++) {
      let str_data = vals[i].getAttribute("data");
      let obj_data = JSON.parse(str_data);
      objects.push(obj_data);
    }

    const newPlayers = objects;
    console.log("?", newPlayers);
    axios
    .post("http://localhost:4000/app/addtogroup", { userId, newPlayers, groupId, groupName})
    .then((res) => {
      console.log("!", res.data);
    })
    .catch((err) => {
      console.log("errors!", err);
    })
  }

  // uncheck all checkboxes
  let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Adds to Group 1 Currently
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
export const createGroup = (name, token) => {
  console.log("CREATING", token.token)
  const userId = token.token;
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
    let newGroup = { id: "", name: name, players: objects };

    console.log("token", token);
    axios
      .post("http://localhost:4000/app/creategroup", {
        userId, newGroup
      })
      .then((res) => {
        console.log("!", res.data);
      })
      .catch((err) => {
        console.log('errors!', err);
      })

    // groupData.push(newGroup);
    console.log(groupData);
    return objects;
  }
};
