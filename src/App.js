import React from "react";
import "./App.css";
import Select from "./components/Select/Select";
import countries from "./data/countries.json";

function App() {
  return (
    <div className="App">
      <Select options={countries} id="code" label="name" />
    </div>
  );
}

export default App;
