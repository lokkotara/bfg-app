import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getRandomInt } from "../../services/service";
import {
  selectState,
  getInputValue,
  setDice1,
  getDice1,
  getGreenPercent,
  getBluePercent,
  getRedPercent,
} from "../../features/Launch/launchSlice";

export default function FirstDice() {
  const [color, setColor] = useState('white');
  const value = useSelector(getDice1);
  const message = useSelector(selectState);
  const inputValue = useSelector(getInputValue);
  const percentGreen = useSelector(getGreenPercent);
  const percentBlue = useSelector(getBluePercent);
  const percentRed = useSelector(getRedPercent);
  const dispatch = useDispatch();

  const displayValue = (color) => {
    switch (color) {
      case "green":
        dispatch(setDice1(getRandomInt(percentGreen)));
        break;
      case "blue":
        dispatch(setDice1(getRandomInt(percentBlue)));
        break;
      case "red":
        dispatch(setDice1(getRandomInt(percentRed)));
        break;

      default:
        break;
    }
  };

  const resetValue = () => {
    dispatch(setDice1(""));
  };

  useEffect(() => {
    if (inputValue >= 0 && inputValue < 5) setColor("red");
    if (inputValue >= 5 && inputValue < 20) setColor("blue");
    if (inputValue >= 20) setColor("green");
    if (message === 'pending') {
      displayValue(color);
    }
    else if (message === 'reset') {
      resetValue();
    }
  }, [inputValue, message]);

  return (
    <div className={"dice " + color}>

      <p className="vValue">{value}</p>
    </div>
  );
}