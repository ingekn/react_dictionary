import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h5>{props.phonetic}</h5>
    </div>
  );
}
