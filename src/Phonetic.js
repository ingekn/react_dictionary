import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  // can still add the play audio feature in the end
  return (
    <div className="Phonetic">
      <h5>{props.phonetic}</h5>
    </div>
  );
}
