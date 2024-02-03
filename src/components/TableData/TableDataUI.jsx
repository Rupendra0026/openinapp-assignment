import React, { useState } from "react";
import "./TableDataUI.css";
import { FaCross, FaTimes, FaXbox } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Table2 = (props) => {
  const { display } = props;
  const [data, setData] = useState(display);

  let dataUpadte = () => {
    for (let i = 1; i < display?.length; i++) {
      let val = display[i];
      if (typeof val?.[3] === "string") {
        display[i][3] = val[3]?.split(",");
        display[i].push([]);
        console.log(display[i][3]);
      }
    }
  };
  dataUpadte();

  const addToArray = (str, arr, index) => {
    if(arr.includes(str)){
      toast.warn("Item already in the list")
    }
    else{
      let updatedArray = [...arr, str];
      const updatedIndex = index + 1;
      display[updatedIndex][4] = updatedArray;
      setData((prevData) => {
        const updatedData = [...prevData];
        if (
          updatedData[updatedIndex] &&
          Array.isArray(updatedData[updatedIndex][4])
        ) {
          updatedData[updatedIndex][4] = updatedArray;
        }
  
        return updatedData;
      });
      // console.log(display);
    }

  };

  const DelefromArray=(index,subIndex)=>{
    let updateindex=index+1
    console.log(updateindex,subIndex)
    console.log(display[updateindex][4][subIndex])
    display[updateindex][4][subIndex]=null
    let updatedArray=display[updateindex][4][subIndex]
    // console.log(updatedArray)
    setData((prevData) => {
        const updatedData = [...prevData];
  
        if (
          updatedData[updateindex] &&
          Array.isArray(updatedData[updateindex][4])
        ) {
          updatedData[updateindex][4] = updatedArray;
        }
  
        return updatedData;
      });

  }
  return (
    <>
    <ToastContainer/>
      {display && <h3 style={{ padding: "20px" }}>Uploads</h3>}
      {display && (
        <div className="tablecontent">
          <>
            <table>
              <thead>
                <tr>
                  {display &&
                    display[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {display &&
                  display.slice(1).map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                      {rowData.map((cellData, cellIndex) => (
                        <>
                          {cellIndex == 1 ? (
                            <td key={cellIndex}>
                              <a href={{ cellData }} target="_blank">{cellData}</a>
                            </td>
                          ) : cellIndex == 3 ? (
                            <>
                              <td>
                                {" "}
                                {/* console.log(e.target.value,rowData[4],rowIndex) */}
                                <select
                                  name=""
                                  id=""
                                  onChange={(e) =>
                                    addToArray(
                                      e.target.value,
                                      rowData[4],
                                      rowIndex
                                    )
                                  }
                                >
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
                            </>
                          ) : cellIndex == 4 ? (
                            <>
                              <td className="listtags">
                                {cellIndex == 4 &&
                                  cellData.length > 0 &&
                                  cellData.map((tag, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {tag==null ? "":<button value={tag}>
                                          {tag}
                                          <FaTimes className="icon"  onClick={()=>DelefromArray(rowIndex,index)}/>
                                        </button>}
                                      </React.Fragment>
                                    );
                                  })}
                              </td>
                            </>
                          ) : (
                            <td key={cellIndex}>
                              {cellIndex}
                              {cellData}
                            </td>
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

export default Table2;
