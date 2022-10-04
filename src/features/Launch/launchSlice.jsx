import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: 'starting',
  inputValue:0,
  nbThrow: 0,
  fumble: 0,
  other: 0,
  success: 0,
  dice1: null,
  dice2: null,
  dice3: null,
  greenPercent: 70,
  bluePercent: 50,
  redPercent: 30,
  scoreIcon: "",
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
    },
    incrementTHrow: (state) => {
      state.nbThrow++;
    },
    updateGreenPercent: (state, value) => {
      state.greenPercent = value.payload;
    },
    updateBluePercent: (state, value) => {
      state.bluePercent = value.payload;
    },
    updateRedPercent: (state, value) => {
      state.redPercent = value.payload;
    },
    setDice1: (state, value) => {
      state.dice1 = value.payload;
    },
    setDice2: (state, value) => {
      state.dice2 = value.payload;
    },
    setDice3: (state, value) => {
      state.dice3 = value.payload;
    },
    resetAll: (state) => {
      state.nbThrow = 0;
      state.fumble = 0;
      state.other = 0;
      state.success = 0;
      state.dice1 = null;
      state.dice2 = null;
      state.dice3 = null;
      state.scoreIcon = "";
    },
    checkScore: (state) => {
      if (state.dice1 === 0 && state.dice2 === 0 && state.dice3 === 0) {
        state.fumble++;
        state.scoreIcon = "fumble";
      } else if (
        state.dice1 === 1 &&
        state.dice2 === 1 &&
        state.dice3 === 1
      ) {
        state.success++;
        state.scoreIcon = "success";
      } else {
        state.other++;
        state.scoreIcon = "";
      }
    }
  },
});

export const getScoreIcon = (state) => state.launch.scoreIcon;
export const getGreenPercent = (state) => state.launch.greenPercent;
export const getBluePercent = (state) => state.launch.bluePercent;
export const getRedPercent = (state) => state.launch.redPercent;
export const getFumble = (state) => state.launch.fumble;
export const getSuccess = (state) => state.launch.success;
export const getOther = (state) => state.launch.other;
export const getnbThrow = (state) => state.launch.nbThrow;
export const getInputValue = (state) => state.launch.inputValue;
export const selectState = (state) => state.launch.status;
export const getDice1 = (state) => state.launch.dice1;
export const getDice2 = (state) => state.launch.dice2;
export const getDice3 = (state) => state.launch.dice3;

export const {
  launch,
  launchSuccess,
  launchPending,
  launchReset,
  setInputValue,
  incrementTHrow,
  setDice1,
  setDice2,
  setDice3,
  checkScore,
  updateGreenPercent,
  updateBluePercent,
  updateRedPercent,
  resetAll,
} = launchSlice.actions;

export default launchSlice.reducer;