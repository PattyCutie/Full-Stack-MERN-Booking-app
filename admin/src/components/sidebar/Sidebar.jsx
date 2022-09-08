import "./sidebar.scss"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react'


function Sidebar() {

    const {dispatch}= useContext(DarkModeContext) 

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" className='link'>
                <span className="logo">VibeRaceAdmin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" className='link'>
                <li>
                    <DashboardRoundedIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>

                <p className="title">LISTS</p>
                <Link to="/users" className='link'>
                <li>
                    <PersonOutlineRoundedIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>

                <Link to="/products" className='link'>
                <li>
                    <StorefrontOutlinedIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
                <Link to="/orders" className='link'>           
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </li>
                </Link>
                <Link to="/delivery" className='link'>           
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                </Link>

                <p className="title">USEFUL</p>

                <Link to="/stats" className='link'>
                <li>
                    <AssessmentIcon className='icon'/>
                    <span>Stats</span>
                </li>    
                </Link>      
                <Link to="/notification" className='link'>           
                <li>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                </Link>

                <p className="title">SERVICE</p>
                <Link to="/systemhealth" className='link'>                    
                <li>                
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System Health</span>
                </li>
                </Link>            
                <Link to="/logs" className='link'>           
                <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>          
                </Link>
                <Link to="/setting" className='link'>           
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                </Link>

                <p className="title">USER</p>
                <Link to="/profile" className='link'>           
                <li>
                    <AccountBoxIcon className='icon'/>
                    <span>Profile</span>
                </li>
                </Link>
                <Link to="/logout" className='link'>           
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
                </Link>
            </ul>
        </div>
        {/*implement useReducer to change theme color */}
        <div className="bottom">
            <div className="colorOption" onClick={ ()=> dispatch({type: "LIGHT" })}></div>
            <div className="colorOption" onClick={ ()=> dispatch({type: "DARK" })}></div>
        </div>
    </div>
  )
}

export default Sidebar