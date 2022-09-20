import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchResult from "../../components/searchResult/SearchResult";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";

function List() {
  //useLocation hook (bring state from other component do display on this page)
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openCalendar, setOpenCalendar] = useState(false);

  //more option for Search button section
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);



  // start connecting mongodb as backend with
  // useFetch custom hooks for any api calls and fetch data from specific endpoint ]
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${minPrice || 0}&max=${
      maxPrice || 99999999
    }`
  );

  const handleListSearch = () => {
    reFetch();
  };
  return (
    <div className="list">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>

            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input
                onChange={e => setDestination(e.target.value)}
                className="listDestinationInput"
                type="text"
                placeholder={destination}
              />
            </div>

            <div className="listItem">
              <label htmlFor="">Check-in Date</label>
              <span
                onClick={() => setOpenCalendar(!openCalendar)}
                className="listCheckinDate"
              >{`${format(dates[0].startDate, "MM/dd/yy")} to ${format(
                dates[0].endDate,
                "MM/dd/yy"
              )}`}</span>

              {openCalendar && (
                <DateRange
                  minDate={new Date()}
                  onChange={(item) => setDates([item.selection])}
                  ranges={dates}
                  className="SearchCalendar"
                />
              )}
            </div>

            <div className="listItem">
              <label htmlFor="">Options</label>
              <div className="listOptionItems">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    onChange={(e) => setMinPrice(e.target.value)}
                    type="number"
                    className="listOptionInput"
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    onChange={(e) => setMaxPrice(e.target.value)}
                    type="number"
                    className="listOptionInput"
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleListSearch} className="listSearchButton">
              Search
            </button>
          </div>

          <div className="listResult">
            {loading ? (
              "Loading... Please wait.."
            ) : (
              <>
                {data.map((item) => (
                  <SearchResult item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
