import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import ExamplePhrase from "./ExamplePhrase";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <div className="group">
          <p className="definition">{props.meaning.definition}</p>
          <ExamplePhrase phrase={props.meaning.example} />
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
