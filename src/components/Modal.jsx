import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";

const Modal = ({ setModal }) => {
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    birthday: "",
  });

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = {
      firstname: contact.firstname,
      lastname: contact.lastname,
      number: contact.number,
      email: contact.email,
      birthday: contact.birthday,
    };
    try {
      const res = await newRequest
        .post("/contact/new", contactData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then(window.location.reload());
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="backshadow">
      <div className="custom-modal">
        <div className="delete-icon" onClick={() => setModal(false)}>
          x
        </div>
        <div className="modal__form">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <h1>Add a new Contact</h1>
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
              <label htmlFor="">Number</label>
              <input
                name="number"
                type="text"
                placeholder="1234567890 ..."
                onChange={handleChange}
              />
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                placeholder="email ..."
                onChange={handleChange}
              />
              <label htmlFor="">Birthday</label>
              <input name="birthday" type="text" onChange={handleChange} />

              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
