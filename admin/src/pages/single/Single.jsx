import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/tablelist/TableList";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">User Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">Jane Doe</h2>
                <div className="detailItem">
                  <span className="itemKey">Email : </span>
                  <span className="itemValue">janedoe@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone : </span>
                  <span className="itemValue">+ 1 234 567 890</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address : </span>
                  <span className="itemValue">Elton St. 234 Garden yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country : </span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"  />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Last Transections</h2>
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default Single;
