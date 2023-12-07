import React from "react";
import "./ExamplePhrase.css";

export default function ExamplePhrase(props) {
  if (props.phrase) {
    return <q className="ExamplePhrase">{props.phrase}</q>;
  } else {
    return null;
  }
}
