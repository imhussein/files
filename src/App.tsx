import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="indigo" style={{ height: "50px", lineHeight: "50px" }}>
        <div className="nav-wrapper">
          <div className="container">
            <a href="/" className="brand-logo">
              App
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
