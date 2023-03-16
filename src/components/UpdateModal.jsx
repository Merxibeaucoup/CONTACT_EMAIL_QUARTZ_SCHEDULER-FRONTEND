import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";

const UpdateModal = () => {
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    birthday: "",
  });

  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    setContact((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return <div>UpdateModal</div>;
};

export default UpdateModal;
