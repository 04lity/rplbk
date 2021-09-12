import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList"; 
import Gambar from "./assets/images/Kalkulus.jpg"; 



ReactDOM.render(
<React.StrictMode>
<App />
<CardList judul="kalkulus dasar" kode="001" jenis="nonfiksi" i sNameBold />

</React.StrictMode>, document.getElementById("root")
);