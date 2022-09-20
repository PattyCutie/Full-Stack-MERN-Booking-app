import React from "react";
import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpenModal, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  //handle select rooms
  const [selectedRooms, setSelectedRooms] = useState([]);
  //handle reservation dates
  const { dates } = useContext(SearchContext);

  const navigate = useNavigate();

  // work on unavailable dates []
  const getDatesInRange = (startDate, endDate) => {
    const fromStartDate = new Date(startDate);
    const toEndDate = new Date(endDate);
    const date = new Date(fromStartDate.getTime());

    const dates = [];

    while (date <= toEndDate) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isRoomAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelectRoom = (e) => {
    const checkedRoom = e.target.checked;
    const value = e.target.value;

    setSelectedRooms(
      checkedRoom
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  console.log(selectedRooms);


  // I will develope Payment page later when the time comes
  const handleModalReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpenModal(false);
      alert("Reserved Succsess!");
    } catch (err) {}
  };

  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="reserveClose"
          onClick={() => setOpenModal(false)}
        />

        <h2>Availeble Rooms</h2>

        {data.map((item) => (
          <div className="reserveItem" key={item._id}>
            <div className="reserveItemInfo">
              <div className="reserveTitle">{item.title}</div>
              <div className="reserveDescription">{item.description}</div>
              <div className="reserveOption">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="reservePrice">{item.price}$ per night</div>
            </div>

            <div className="reserveSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="reserveRoomNumber" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelectRoom}
                    disabled={!isRoomAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleModalReserve} className="reserveButton">
          Reserve Now !
        </button>
      </div>
    </div>
  );
};

export default Reserve;
