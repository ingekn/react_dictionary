import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/109/091/original/%E2%80%94Pngtree%E2%80%94cartoon_open_book_icon_reading_3802235.png?1704300724"
          alt="dictionary-logo"
        />
        <Dictionary defaultQuery="sunset" />
        <Footer />
      </div>
    </div>
  );
}
