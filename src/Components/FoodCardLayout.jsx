function FoodCardLayout({ card }) {
  let objPath = card.card.info;

  return (
    <div className="container text-center cardContainer">
      <div className="row">
        <div className="col">
          <div className="card p-3 m-3 ">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${objPath.cloudinaryImageId}`}
              className="card-img-top"
              alt={`${objPath.name} image`}
            />
            <div className="card-body">
              <div className="container start">
                <div className="row">
                  <div className="col-12">
                    <h4 className="card-title">{objPath?.name}</h4>
                  </div>
                  <div className="col-12">
                    <h5>{[...objPath.cuisines].join(",")}</h5>
                  </div>

                  {/* <!-- Force next columns to break to new line --> */}
                  <div className="w-100"></div>

                  <div className="col-12">
                    <h5>Ratings-:{objPath.avgRatingString}</h5>
                  </div>
                  <div className="col-12">
                    <h5>Time-:{card.card.info.sla.slaString}</h5>
                  </div>
                  {/* <!-- Force next columns to break to new line --> */}
                  <div className="w-100"></div>

                  <div className="col-12">
                    <h5>{objPath.costForTwo}</h5>
                  </div>
                  <div className="col-12">
                    <a href="/" className="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCardLayout;
