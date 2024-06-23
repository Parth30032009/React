import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

let foodData = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    description:
      "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based ",
    price: 200
  },
  {
    id: 2,
    name: "Burger",
    image:
      "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg",
    description:"Burger is a sandwich consisting of one or more cooked patties of ground me",
    price: 100
  },
  {
    id: 3,
    name: "Sandwich",
    image:
      "https://static.toiimg.com/thumb/83740315.cms?width=800&height=700&imgsize=361903",
    description:
      "Sandwich is a dish consisting of one or more slices of bread typically served with other ingredients, such as meat, cheese, or vegetables.",
    price: 150
  }
  
];

function Header() {
  return (
    <>
      {/* // Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="logo">
            <img
              className="rounded mx-3"
              src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"
            ></img>
          </div>

          <a className="navbar-brand" href="/">
            Food Fast
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link active " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link " href="/" role="button">
                  Services
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link ">Help</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {/* inbox */}
            <button
              type="button"
              className="btn btn-primary position-relative mx-3"
            >
              Inbox
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
}

function FoodCard({imageUrl,Title,description,price}) {
  return (
    <div class="container text-center cardContainer">
      <div class="row">
        <div class="col">
          <div class="card p-3 m-3 ">
            <img
              src={imageUrl}
              class="card-img-top"
              alt={`${Title} image`}
            />
            <div class="card-body">
              <h5 class="card-title">{Title}</h5>
              <div class="card-text">
                {description}
                
              </div>
              <h3>${price}</h3>
              <a href="/" class="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppLayout() {
  return (
    <>
      <Header />
      <div className="Container row-cols-3">
        {foodData.map((food) => (
          <FoodCard
            key={food.id}
            imageUrl={food.image}
            Title={food.name}
            description={food.description}
            price={food.price}
          />
        ))}
        
        
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
