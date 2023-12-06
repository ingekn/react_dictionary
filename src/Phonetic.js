import React from "react";

export default function Phonetic(props) {
  // can still add the play audio feature in the end
  return (
    <div className="Phonetic">
      <h3>{props.phonetic}</h3>
    </div>
  );
}
