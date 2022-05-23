import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

export default function SignIn() {
  const {user, setUser}= useContext(userContext);

  const navigate = useNavigate()

  const userRef = useRef();
  const passwordRef = useRef();
  /* const { dispatch, isFetching } = useContext(Context); */

  const handleSubmit = async (e) => {
    e.preventDefault();
   /*  dispatch({ type: "LOGIN_START" }); */
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })

     /*  dispatch({ type: "LOGIN_SUCCESS", payload: res.data }); */
      navigate('/home')
   
    } catch (err) {
     /*  dispatch({ type: "LOGIN_FAILURE" }); */
    }
  };
  user?console.log(user): console.log("not present")

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit"  >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    <pre>{JSON.stringify(user,null,2)}</pre>
      <button onClick={()=>setUser('john')} className="loginButton">
        change value
      </button>
    </div>
  );
}