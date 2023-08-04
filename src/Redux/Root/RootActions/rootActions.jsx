import { storeExcelCsv, storeExcelid } from "../../ExcelPage/excelSlice";
import {storeError,storeSuccess} from '../../ProjectPage/projectSlice'

export const rootActions = {
  excelActions: {
    storeExcelCsv,
    storeExcelid,
  },
  projectActions:{
    storeError,
    storeSuccess
  }
};
