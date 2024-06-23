import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
function Header() {
  return (
    <div className="container1">
      <div className="row ">
        <div className="col image">
          <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg" />
        </div>
        <div className="col-2 heading">
          <h1>Food Fast</h1>
        </div>
        <div className="col-6 searchBox">
          <input type="text" placeholder="Search" />
        </div>
        <div className="col-2 userIcon">
          <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"></img>
        </div>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header></Header>);
