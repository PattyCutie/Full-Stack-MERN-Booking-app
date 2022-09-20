import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });

    try {
      const res = await axios.post("/auth/login", credentials)
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.details
      }) 
      navigate('/')
    } catch(err) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: err.response.data
      })
    }
  };
  //console.log(user);

  return (
    <div className="login">
      <div className="loginContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="loginUsername"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="loginPassword"
        />
        <button disabled={loading} onClick={handleClick} className="loginButton">
          Login
        </button>
        {error && <span className="loginErrMsg">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
