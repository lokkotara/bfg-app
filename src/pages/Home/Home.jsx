import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import FirstDice from "../../components/FirstDice/FirstDice";
import SecondDice from "../../components/SecondDice/SecondDice";
import ThirdDice from "../../components/ThirdDice/ThirdDice";
import { launchReset,launchPending, selectState, setInputValue } from "../../features/Launch/launchSlice";
import "./Home.scss";

export default function Home() {
  const State = useSelector(selectState);
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const launchThrow = () => {
    if(State === 'starting'){
      dispatch(launchPending());
    }
    if (State === "pending") {
      dispatch(launchReset());
    }
    if (State === "success") {
      dispatch(launchReset());
      dispatch(launchPending());
    }
      

  };

  return (
    <main className="homeContainer">
      <h1>Better Fling Green</h1>
      <label htmlFor="inputValue">Entre ta valeur</label>
      <input type="number" id="inputValue" onChange={handleChange} min="0" max="30" />
      <div className="btn" onClick={()=>launchThrow()}>OK</div>
      <div className="dicesContainer">
        <div className="diceContainer">
          <p>1</p>
          <FirstDice />
        </div>
        <div className="diceContainer">
          <p>2</p>
          <SecondDice />
        </div>
        <div className="diceContainer">
          <p>3</p>
          <ThirdDice />
        </div>
      </div>
    </main>
  );
}