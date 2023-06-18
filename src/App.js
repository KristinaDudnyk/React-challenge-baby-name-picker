import "./App.css";
import React from "react";
import LoadBabysNames from "./components/BabysNames";

export default function App() {
  console.log("I'm working");
  return (
    <div className="App">
      <LoadBabysNames />
    </div>
  );
}
