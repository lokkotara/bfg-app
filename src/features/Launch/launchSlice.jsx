import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: 'starting',
  inputValue:undefined
};

export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    launch: (state) => {
      state.status = "starting";
    },
    launchPending: (state) => {
      state.status = "pending";
    },
    launchSuccess: (state) => {
      state.status = "success";
    },
    launchReset: (state) => {
      state.status = "reset";
    },
    setInputValue: (state, value) => {
      state.inputValue = value.payload;
    }
  },
});

export const getInputValue = (state) => state.launch.inputValue;
export const selectState = (state) => state.launch.status;

export const { launch, launchSuccess, launchPending, launchReset, setInputValue } =
  launchSlice.actions;

export default launchSlice.reducer;