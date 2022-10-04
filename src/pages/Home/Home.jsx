import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";
import FirstDice from "../../components/FirstDice/FirstDice";
import SecondDice from "../../components/SecondDice/SecondDice";
import ThirdDice from "../../components/ThirdDice/ThirdDice";
import {
  launchReset,
  launchPending,
  launch,
  launchSuccess,
  selectState,
  setInputValue,
  getInputValue,
  getnbThrow,
  incrementTHrow,
  getFumble,
  getSuccess,
  getOther,
  checkScore,
  getGreenPercent,
  getBluePercent,
  getRedPercent,
  updateGreenPercent,
  updateBluePercent,
  updateRedPercent,
  getScoreIcon,
  resetAll,
} from "../../features/Launch/launchSlice";
import "./Home.scss";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

export default function Home() {
  const State = useSelector(selectState);
  const inputValue = useSelector(getInputValue);
  const nbThrow = useSelector(getnbThrow);
  const fumble = useSelector(getFumble);
  const success = useSelector(getSuccess);
  const other = useSelector(getOther);
  const dispatch = useDispatch();
  const body = document.querySelector("body");
  const percentGreen = useSelector(getGreenPercent);
  const scoreIcon = useSelector(getScoreIcon);
  const percentBlue = useSelector(getBluePercent);
  const percentRed = useSelector(getRedPercent);
  let konami = []; 
  window.document.onkeydown = (e) => {
    konamiCode(e);
  };

  // function to listen to the konami code and return a console.log
  const konamiCode = (e) => {
    let key = e.keyCode;
    let keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    konami.push(key);
    console.log(konami);
    if (konami.toString().indexOf(keys) >= 0) { 
      console.log("Konami code activated");
    }
  };

  const handleChange = (e) => {
    konamiCode(e);
    dispatch(setInputValue(e.target.value));
  };

  const handlePercentGreen = (e) => {
    dispatch(updateGreenPercent(parseInt(e.target.value)));
  };
  const handlePercentBlue = (e) => {
    dispatch(updateBluePercent(parseInt(e.target.value)));
  };
  const handlePercentRed = (e) => {
    dispatch(updateRedPercent(parseInt(e.target.value)));
  };

  const increment = () => {
    if (parseInt(inputValue)<30) {
      dispatch(
        setInputValue(parseInt(inputValue) + 1)
      );
    }
  };
  
  const resetArray = () => {
    dispatch(resetAll());
  };

  const decrement = () => {
    if (parseInt(inputValue)>=1) {
    dispatch(
      setInputValue(parseInt(inputValue) - 1)
      );
    }
  };

  const displaySuccess = () => {
    console.log("success");
  };

  const displayFumble = () => {
    console.log("fumble");
  };

  const launchThrow = () => {
    if(State === 'starting'){
      dispatch(launchPending());
    }
  };

  useEffect(() => {
    if (State === "pending") {
      dispatch(incrementTHrow());
      dispatch(checkScore());
      dispatch(launchSuccess());
    }
    if (State === "success") {
      dispatch(launchReset());
      dispatch(launch());
    }
  }, [State]);

  return (
    <React.Fragment>
      <main className="homeContainer" onChange={konamiCode}>
        <h1>
          <b className="upperB">B</b>etter <b className="upperF">F</b>ling{" "}
          <b className="upperG">G</b>reen
        </h1>
        <div className="inputContainer">
          <label htmlFor="inputValue">Entre ta valeur</label>
          <div className="inputLabelContainer">
            <img src={minus} onClick={decrement} />
            <input
              type="number"
              id="inputValue"
              onChange={handleChange}
              min="0"
              max="30"
              value={inputValue}
            />
            <img src={plus} onClick={increment} />
          </div>
        </div>
        <div className="btn" onClick={() => launchThrow()}>
          Lancer les dés
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 284.78 278.71"
            fill="white"
            className="svgDice"
          >
            <g id="firstDice" data-name="firstDice">
              <g id="svg5490">
                <path
                  id="rect4823"
                  d="M263.71,124.28l-58.09-78c19.1,32.43,36.9,64.32,53.9,91.84,5.08,8.23,16.34,20.73,25.26,29.42A145.1,145.1,0,0,0,263.71,124.28Z"
                />
                <path d="M253.11,140.63c-26.7,20.14-51.31,30.21-74.69,27-11.35-1.54-31.53-10.39-51.65-20.6-18.5-9.39-36.28-19-49.8-24.82C102.37,81.37,127.14,44.82,152.5,4c4.65-2.19,8.58-5,12.66-3.67a6,6,0,0,1,1.16.47c2.65,1.32,4.92,4.56,7.36,7.5C199.52,46.4,226.63,96.53,253.11,140.63Z" />
                <path d="M140.28,9.3C116.34,47.8,94,83.9,70.18,122.18c-3.46,2.73-30.47,9.1-34.73,10.16-11.11,2.61-21.26,4-28.16,2.83C3.07,133.3.91,130.71.18,124.7s.54-14.16,7.3-25.95C54.45,66.29,93.93,41.08,140.28,9.3Z" />
                <path d="M281,181.63,144.35,272.86c-5.31,4.41-7.25,5.67-14.15,5.85L180,176.33c24.81,2.33,51.31-9.44,77.7-29.32a204.52,204.52,0,0,0,25.57,29.23C284.22,178.09,283.28,179.65,281,181.63Z" />
                <path d="M173.42,175.43,123.81,276.9c-7.17-.3-12.84-6.6-13.44-7.08L10,152.31c-2.63-4.11-5.17-7.73-6.91-12.45a9.93,9.93,0,0,0,2.29,1.42c10.41,1.85,20.86-.5,31-2.71,11.54-2.7,23.72-6.21,35.06-9.52,14.12,4.45,35.35,17.19,51.42,25.43,19,9.63,37.45,18.42,50.48,21Z" />
              </g>
            </g>
          </svg>
        </div>

        <div className="dicesContainer">
          <div className="diceContainer">
            <p className="resultColumn">1</p>
            <FirstDice />
          </div>
          <div className="diceContainer">
            <p className="resultColumn">2</p>
            <SecondDice />
          </div>
          <div className="diceContainer">
            <p className="resultColumn">3</p>
            <ThirdDice />
          </div>
        </div>
        <div className="scoreIconContainer">
          {scoreIcon === "fumble" ? "😭" : scoreIcon === "success" ? "🤩" : ""}
        </div>
      </main>
      <aside>
        <table>
          <thead>
            <tr>
              <th colSpan="4">Tableau des lancers</th>
            </tr>
            <tr>
              <th>Nb lancers</th>
              <th>Echec critique</th>
              <th>Autre</th>
              <th>Réussite critique</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nbThrow}</td>
              <td>{fumble}</td>
              <td>{other}</td>
              <td>{success}</td>
            </tr>
          </tbody>
        </table>
        <span className="button" onClick={() => resetArray()}>
          Reset
        </span>
      </aside>
      <section>
        <h2>% de chaque couleur</h2>
        <div className="percentContainer">
          <div className="percent green">
            <input
              type="number"
              name="percentNumber"
              value={percentGreen}
              onChange={handlePercentGreen}
            ></input>
          </div>
          <div className="percent blue">
            <input
              type="number"
              name="percentNumber"
              value={percentBlue}
              onChange={handlePercentBlue}
            ></input>
          </div>
          <div className="percent red">
            <input
              type="number"
              name="percentNumber"
              value={percentRed}
              onChange={handlePercentRed}
            ></input>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}