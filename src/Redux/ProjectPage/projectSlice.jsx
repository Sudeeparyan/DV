import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   Notification : ""
};

const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    storeError : (state,actions)=>{
        state.Notification = actions.payload
    },
    storeSuccess : (state,actions)=>{
        state.Notification = actions.payload
    }
  },
});

export const {storeError,storeSuccess  } = ProjectSlice.actions;
export default ProjectSlice.reducer;
