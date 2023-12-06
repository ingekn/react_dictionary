import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
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
      <section>
        <form onSubmit={search}>
          <input type="search" onChange={getQuery} />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
