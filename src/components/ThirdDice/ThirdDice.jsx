import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getRandomInt } from "../../services/service";
import {
  selectState,
  getInputValue,
  setDice3,
  getDice3,
  getGreenPercent,
  getBluePercent,
  getRedPercent,
} from "../../features/Launch/launchSlice";


export default function ThirdDice() {
  const [color, setColor] = useState("white");
  const value = useSelector(getDice3);
  const message = useSelector(selectState);
  const inputValue = useSelector(getInputValue);
  const percentGreen = useSelector(getGreenPercent);
  const percentBlue = useSelector(getBluePercent);
  const percentRed = useSelector(getRedPercent);
  const dispatch = useDispatch();

  const displayValue = (color) => {
    switch (color) {
      case "green":
        dispatch(setDice3(getRandomInt(percentGreen)));
        break;
      case "blue":
        dispatch(setDice3(getRandomInt(percentBlue)));
        break;
      case "red":
        dispatch(setDice3(getRandomInt(percentRed)));
        break;

      default:
        break;
    }
  };

  const resetValue = () => {
    dispatch(setDice3(""));
  };

  useEffect(() => {
    if (inputValue >= 0 && inputValue < 15) setColor("red");
    if (inputValue >= 15 && inputValue < 30) setColor("blue");
    if (inputValue >= 30) setColor("green");
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