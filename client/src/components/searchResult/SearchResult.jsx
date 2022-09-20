import { Link } from "react-router-dom";
import "./searchResult.css";

const SearchResult = ({ item }) => {
  return (
    <div className="searchResult">
      <img 
      src={item.photos[0]} 
      alt="" 
      className="searchResultImg" />
      <div className="searchResultDescription">
        <h1 className="searchResultTitle">{item.name}</h1>
        <span className="searchResultDistance">
          {item.distance}m from town center
        </span>
        <span className="searchResultTaxi">Free airport taxi</span>
        <span className="searchResultSubtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="searchResultFeatures">{item.description}</span>
        <span className="searchResultCancelOption">Free cancelation</span>
        <span className="searchResultCancelOptionSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      {/* Details section **if there is rating then display it** */}
      <div className="searchResultDetails">
        {item.rating && <div className="searchResultDetailRating">
          <span>Exellent</span>
          <button>{item.rating}</button>
        </div>}

        <div className="searchResultDetailTexts">
          <span className="searchResultDetailPrice">${item.cheapestPrice}</span>
          <span className="searchResultDetailTax">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="searchResultDetailCheckButton">
            See Availability
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
