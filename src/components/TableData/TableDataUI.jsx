import React, { useState } from "react";
import "./TableDataUI.css";
import { FaCross, FaTimes, FaXbox } from "react-icons/fa";

const TableDataUI = (props) => {
  const { data } = props;

  let dataUpadte = () => {
    for (let i = 1; i < data?.length; i++) {
      let val = data[i];
      if (typeof val?.[3] === "string") {
        data[i][3] = val[3].split(",");
        console.log(data[i][3]);
      }
    }
  };
  dataUpadte();
  return (
    <>
      {data && (<h3 style={{ padding: "20px" }}>Uploads</h3>)}
      {data && (
        <div className="tablecontent">
          <>
            <table>
              <thead>
                <tr>
                  {data &&
                    data[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.slice(1).map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                      {rowData.map((cellData, cellIndex) => (
                        <>
                          {cellIndex == 1 ? (
                            <td key={cellIndex}>
                              <a href={{ cellData }}>{cellData}</a>
                            </td>
                          ) : cellIndex == 3 ? (
                            <>
                                <td>
                                  {" "}
                                  <select name="" id="">
                                    {cellData &&
                                      cellData.map((tag, index) => {
                                        return (
                                          <React.Fragment key={index}>
                                            <option value={tag}>{tag}</option>
                                          </React.Fragment>
                                        );
                                      })}
                                  </select>
                                </td>
                              <td className="listtags">
                                {cellData &&
                                  cellData.map((tag, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        <button value={tag}>
                                          {tag}
                                          <FaTimes
                                            style={{ marginLeft: "10px" }}
                                            color="white"
                                          />
                                        </button>
                                      </React.Fragment>
                                    );
                                  })}
                              </td>
                            </>
                          ) : (
                            <td key={cellIndex}>{cellData}</td>
                          )}
                        </>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        </div>
      )}
    </>
  );
};

export default TableDataUI;
