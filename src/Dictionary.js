import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "1386aafaa966aa68e4520o87btc31531";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getQuery(event) {
    setQuery(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={getQuery} />
        <input type="submit" />
      </form>
    </div>
  );
}
