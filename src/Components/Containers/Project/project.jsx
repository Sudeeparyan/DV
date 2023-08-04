import { useEffect, useState } from "react";
import ExcelTable from "../Excel/table";
import  { useRef } from 'react';
import { useLocation } from "react-router-dom";
import { useLazyGetExcelQuery } from "../../../Redux/ExcelPage/excelRtkQuery";
// import { message } from "antd";
import {useDispatch,useSelector} from 'react-redux'
import {rootActions} from '../../../Redux/Root/RootActions/rootActions'
// import {rootActions} from '../../../Redux/Root/RootActions'
import Notification from "../../Reusables/Notification/Notification";
// import {store} from '../../../Redux/store'

const Project = (props) => {
  const location = useLocation();
  const data = useSelector((state)=>state.Project.Notification)
  const dispatch = useDispatch()
  const [getExcel, resultsExcel] = useLazyGetExcelQuery() || {};

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    getExcel(path);
  }, []);

  if (resultsExcel.data) {
    console.log(resultsExcel.data);
    if (resultsExcel.data.error !== null)
      {console.log("error");
        dispatch(rootActions.projectActions.storeSuccess(resultsExcel.data.error))
        }
    else {
      console.log("success");
      dispatch(rootActions.projectActions.storeSuccess(null))
    }
  }
  if(data!==null)
  {
    
      // props.openNotification;
    
  }
  return (
    <div>
      <div>
        <ExcelTable />
         <Notification  message={data} types={"Error"}/>
      </div>
    </div>
  );
};

export default Project;
