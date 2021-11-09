import React, { useMemo } from "react";
// import NavBar from "../NavBar";
import { players } from "../nba_player_data_20-21-";
import { useTable } from "react-table";
// import nba_player_data_20-21-- from "./nba_player_data_20-21--.json"
import { COLUMNS } from "./columnsAP";
import GroupHeader from "./GroupHeader.js"
import './groupTable.css'

// Importing React-Table : https://www.bacancytechnology.com/blog/react-table-tutorial-part-1/#4
// TABLE TUTORIAL: https://www.youtube.com/watch?v=hson9BXU9F8
// CSV TO JSON Convertor: https://www.convertcsv.com/csv-to-json.htm

const GroupPlayers = () => {
    const showData = () => {
        // const d = JSON.parse(players);
        console.log("hello");
        // console.log(Object.entries(players));
        console.log(players);
    };

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => players, []);

    const tableInstance = useTable({
        columns,
        data,
    });

    const {
        // getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <div className="groupTable">
            <GroupHeader></GroupHeader>
            <button onClick={showData}>Click</button>
            <table {...getTableBodyProps}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
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
            {/* <h1></h1> */}
        </div>
    );
};

// // the home page with the items and the stuff at the bottom
// const Home = () => (
//     <div>
//         <NavBar />
//         <header>
//             <h1>Welcome !!!to All Players</h1>

//             <GroupPlayers />
//         </header>
//     </div>
// );

export default GroupPlayers;
