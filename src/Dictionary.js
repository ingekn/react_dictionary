import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [query, setQuery] = useState(props.defaultQuery);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data);

    ///image  APi ->
    let apiKey = "1386aafaa966aa68e4520o87btc31531";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${query}&key=${apiKey}`;
    axios
      .get(imageApiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }
  function search() {
    let apiKey = "1386aafaa966aa68e4520o87btc31531";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  function getQuery(event) {
    setQuery(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up? </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={getQuery}
              className="form-control"
              defaultValue={query}
              placeholder="Search for a word"
            />
            {/* <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button> */}
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, forest, meditation
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
