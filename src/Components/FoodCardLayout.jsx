function FoodCardLayout({imageUrl,Title,description,price}) {
    return (
      <div className="container text-center cardContainer">
        <div className="row">
          <div className="col">
            <div className="card p-3 m-3 ">
              <img
                src={imageUrl}
                className="card-img-top"
                alt={`${Title} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <div className="card-text">
                  {description}
                  
                </div>
                <h3>${price}</h3>
                <a href="/" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default FoodCardLayout;