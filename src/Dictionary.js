import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              onChange={handleKeyWordChange}
            />
            <button>Search</button>
          </form>
        </section>
        <Result results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
