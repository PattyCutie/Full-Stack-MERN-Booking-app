import React from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  // start connecting mongodb as backend with
  // create custom hooks for any api calls and fetch data
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/187820804.jpg?k=438505fae7674740a815e6dc2f08ac0993ba352757f0253443e9a24c008f1fb3&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/landmark/max1024/253778.webp?k=11943a73f82190806d49a7186acaf32f0de45eb7cf778e6c709eda875840d379&o=",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/254310341.jpg?k=dc1b4b1615f4fa48b237a8fac1d97b6b9b674c8c255893ff40f139b5e0574106&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/265741841.jpg?k=a90cffd7437bbfca1808554aed0ec369e9ebca7b79c0b85c92544430eaa3002a&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/landmark/max1024/253778.webp?k=11943a73f82190806d49a7186acaf32f0de45eb7cf778e6c709eda875840d379&o=",
  ];

  return (
    <div className="ppList">
      {loading ? (
        "Loading... Please wait.."
      ) : (
        <>
          {data &&
            images.map((image, i) => (
              <div className="ppListItem" key={i}>
                <img 
                className="ppListImg" 
                src={image}
                alt="" 
                />
                <div className="ppListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
