import { configureStore } from "@reduxjs/toolkit";
import { sendExcelCsv } from "./ExcelPage/excelRtkQuery";
import Excelreducers from '../Redux/ExcelPage/excelSlice'
import {Projectreducer} from  '../Redux/ProjectPage/projectReducer'

export const store = configureStore({
  reducer: {
    [sendExcelCsv.reducerPath] : sendExcelCsv.reducer,
    Excel_Csv : Excelreducers,
     Project : Projectreducer.Project,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sendExcelCsv.middleware),
});
