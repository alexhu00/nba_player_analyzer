import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columnsAP";
import GroupHeader from "./GroupHeader.js";
import "../css/groupTable.css";

// Importing React-Table : https://www.bacancytechnology.com/blog/react-table-tutorial-part-1/#4
// TABLE TUTORIAL: https://www.youtube.com/watch?v=hson9BXU9F8
// CSV TO JSON Convertor: https://www.convertcsv.com/csv-to-json.htm

const GroupPlayers = (props) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => props.data, []);

  const tableInstance = useTable({
    columns,
    data,
  }, 
  useSortBy);

  const {
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="groupTable">
      <GroupHeader name={props.name} />
      <table {...getTableBodyProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
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

export default GroupPlayers;
