import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  // start connecting mongodb as backend with
  // create custom hooks for any api calls and fetch data
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="featuredProperties">
      {loading ? (
        "Loading... Please wait"
      ) : (
        <>
          {data.map((item) => (
            <div className="fppItem" key={item._id}>
              <img 
              className="fppImg" 
              src={item.photos[0]} 
              alt="" 
              />
              <span className="fppName">{item.name}</span>
              <span className="fppCity">{item.city}</span>
              <span className="fppPrice">
                Starting from {item.cheapestPrice}$
              </span>
              {item.rating && (
                <div className="fppRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
