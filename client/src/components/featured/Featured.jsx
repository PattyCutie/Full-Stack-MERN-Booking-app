import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  // start connecting mongodb as backend with
  // create custom hooks for any api calls and fetch data
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=new york,london,barcelona"
  );

  return (
    <div className="featured">
      { loading ? ( "Loading... Please wait..." 
      ):(
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://bstatic.com/xdata/images/xphoto/1182x887/165922591.jpg?k=2f86b3be84eab59ec4197cb58c2d7c26b7893b3d16b73f39707424614f14f5d4&o=?size=S"
              alt=""
            />
            <div className="featuredTitles">
              <h1>New York</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://bstatic.com/xdata/images/xphoto/1182x887/165918150.jpg?k=a9ab76cae4d96f01a9dac6a61cab69ddc28e4817544deb1420f5237be8c8fd7b&o=?size=S"
              alt=""
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://bstatic.com/xdata/images/xphoto/1182x887/165918124.jpg?k=908413ca67717d094c16f8fe8a6fc6cf79ba2d498a01844fb3c578ba96942700&o=?size=S"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Barcelona</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>)
      }
    </div>
  );
};

export default Featured;
