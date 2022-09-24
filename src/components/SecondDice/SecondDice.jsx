import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  launchSuccess,
  selectState,
  getInputValue,
} from "../../features/Launch/launchSlice";

export default function SecondDice() {
  const [color, setColor] = useState("white");
  const [value, setValue] = useState("");
  const message = useSelector(selectState);
  const inputValue = useSelector(getInputValue);
  const dispatch = useDispatch();

  const displayValue = (color) => {
    switch (color) {
      case "green":
        setValue(getRandomInt(70));
        break;
      case "blue":
        setValue(getRandomInt(50));
        break;
      case "red":
        setValue(getRandomInt(30));
        break;

      default:
        break;
    }
  };

  const getRandomInt = (percent) => {
    return Math.floor(Math.random() * 100) < percent ? 1 : 0;
  };

  const resetValue = () => {
    setValue("");
  };

  useEffect(() => {
    if (inputValue >= 0 && inputValue < 10) setColor("red");
    if (inputValue >= 10 && inputValue < 25) setColor("blue");
    if (inputValue >= 25) setColor("green");
    if (message === "pending" && inputValue) {
      displayValue(color);
      dispatch(launchSuccess());
    } else if (message === "reset") {
      resetValue();
    }
  }, [inputValue, message]);
  return (
    <div className={"dice " + color}>
      <p>{value}</p>
    </div>
  );
}