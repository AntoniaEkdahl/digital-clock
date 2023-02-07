import { useState } from "react";
import Clock from "./Clock";
import "./app.css";

function App() {
  let time = new Date();
  //Create currentTime state with useState hook to be able to change the state
  const [currentTime, setCurrentTime] = useState(time);

  //Changes the current date object with a new one storing the current date and time.
  const updateTime = () => {
    let time = new Date();
    setCurrentTime(time);
  };

  // So our clock update every second.
  setInterval(updateTime, 1000);

  // Change the getHours/Minutes/Seconds() method to a 2-digit format wtih ternary operator.
  // If the seconds is less then 10 add a 0 before.
  const getTwoDigitHours =
    currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours();

  const getTwoDigitMinutes =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();

  const getTwoDigitSeconds =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();

  return (
    <div className="app">
      <h1>Current Time</h1>
      {/* We add data to the props for the clock component. */}
      <Clock
        hour={getTwoDigitHours}
        minute={getTwoDigitMinutes}
        second={getTwoDigitSeconds}
      />
    </div>
  );
}

export default App;
