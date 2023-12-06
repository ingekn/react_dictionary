import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <h3>{props.phonetic}</h3>
    </div>
  );
}
