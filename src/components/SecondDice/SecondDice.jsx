import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getRandomInt } from "../../services/service";
import {

  selectState,
  getInputValue,
  setDice2,
  getDice2,
  getGreenPercent,
  getBluePercent,
  getRedPercent,
} from "../../features/Launch/launchSlice";

export default function SecondDice() {
  const [color, setColor] = useState("white");
    const value = useSelector(getDice2);
  const message = useSelector(selectState);
  const percentGreen = useSelector(getGreenPercent);
  const percentBlue = useSelector(getBluePercent);
  const percentRed = useSelector(getRedPercent);
  const inputValue = useSelector(getInputValue);
  const dispatch = useDispatch();

  const displayValue = (color) => {
    switch (color) {
      case "green":
        dispatch(setDice2(getRandomInt(percentGreen)));
        break;
      case "blue":
        dispatch(setDice2(getRandomInt(percentBlue)));
        break;
      case "red":
        dispatch(setDice2(getRandomInt(percentRed)));
        break;

      default:
        break;
    }
  };

  const resetValue = () => {
    dispatch(setDice2(""));
  };

  useEffect(() => {
    if (inputValue >= 0 && inputValue < 10) setColor("red");
    if (inputValue >= 10 && inputValue < 25) setColor("blue");
    if (inputValue >= 25) setColor("green");
    if (message === "pending") {
      displayValue(color);
    } else if (message === "reset") {
      resetValue();
    }
  }, [inputValue, message]);
  return (
    <div className={"dice " + color}>
      <p className="vValue">{value}</p>
    </div>
  );
}