import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const App = () => (
        <div className="container">
            <Header/>
            <div>Name: mfe1</div>
            <div>Framework: react</div>
            <div>Language: JavaScript</div>
            <div>CSS: Empty CSS</div>
            <Footer/>
        </div>
    )
;
ReactDOM.render(<App/>, document.getElementById("app"));
