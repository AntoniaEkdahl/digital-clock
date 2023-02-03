import Clock from "./Clock";
import "./app.css";

function App() {
  return (
    <div className="app">
      <h1>Current Time :</h1>
      {/* Gets the Clock component */}
      <Clock />
    </div>
  );
}

export default App;
