import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("");

  function search(event) {
    event.preventDefault();
    alert("Searching");
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
