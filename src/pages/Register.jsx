import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";

const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { dispatch, isFetching } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = newRequest.post("/auth/register", {
        ...user,
      });
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE" });
    }
    navigate("/login");
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Firstname</label>
          <input
            name="firstname"
            type="text"
            placeholder="john ..."
            onChange={handleChange}
          />
          <label htmlFor="">Lastname</label>
          <input
            name="lastname"
            type="text"
            placeholder="doe ..."
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email ..."
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />

          <button type="submit" disabled={isFetching}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
