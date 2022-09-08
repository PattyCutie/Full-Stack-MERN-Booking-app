import "./featured.scss";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRoundedIcon 
        fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar 
          value={70} 
          text={"70%"} 
          strokeWidth={8} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$999</p>
        <p className="description">
          Previous transection processing. Last payments may not be included.
        </p>

        <div className="summary">

          <div className="items">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
            <KeyboardArrowDownOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
