import React, { useEffect, useState, useRef } from "react";
import { auth } from "../../conflig/Firebase";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "./UploadFileUI.css";
import { ToastContainer, toast } from "react-toastify";
import excel from "../../images/excel.png";
import TableDataUI from "../TableData/TableDataUI";

const UploadFile = () => {
  const fileInputHandle = useRef(null);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [file, setFile] = useState("");
  const [upload, setUpload] = useState(true);


  const handleLabelClick = () => {
    fileInputHandle.current.click();
  };

  const handleExcelUpload = (file) => {
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = XLSX.read(e.target.result, { type: "binary" }).Sheets
          .Sheet1;
        const parsedData = XLSX.utils.sheet_to_json(data, { header: 1 });
        console.log(parsedData);
        setData(parsedData);
        setUpload(false);
      };
      reader.readAsBinaryString(file);
    } catch (err) {
      toast.warn("Failed to upload file");
      console.log(err);
    }
  };
  const handleButtonClick = () => {
    handleExcelUpload(file);
  };
  const clearData=()=>{
    setUpload(true);
    setData()
    setFile("")
    fileInputHandle.current.value = null;
  }

  return (
    <>
      <ToastContainer />
      <h3 style={{padding:"20px"}}>Upload CSV</h3>
      <div className="UploadFile">
        <div className="upload">
          <div className="UploadForm">
            <img src={excel} alt="excel image" />
            <input
              type="file"
              accept=".xls, .xlsx, .csv, .csvx"
              onChange={(e) => {setFile(e.target.files[0]);console.log(e.target.files[0])}}
              placeholder="Browse"
              style={{ display: "none" }}
              ref={fileInputHandle}
            />
            {file?.name ? (
              <>
                <label>{file.name}</label>
                {upload ? (
                  <button onClick={handleButtonClick}>upload</button>
                ) : (
                  <label onClick={clearData} style={{color:"tomato"}}>remove</label>
                )}
              </>
            ) : (
              <>
                <label className="custom-upload-label">
                  Drop your excel sheet here{" "}
                  <a onClick={handleLabelClick}>Browse</a>
                </label>
                <button onClick={handleButtonClick}>upload</button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="table">
        <TableDataUI display={data}/>
      </div>
    </>
  );
};

export default UploadFile;
