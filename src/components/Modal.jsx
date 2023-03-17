import React, { useContext, useState } from "react";
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
                placeholder="master"
                onChange={handleChange}
              />
              <label htmlFor="">Lastname</label>
              <input
                name="lastname"
                type="text"
                placeholder="bruce-wayne"
                onChange={handleChange}
              />
              <label htmlFor="">Number</label>
              <input
                name="number"
                type="text"
                placeholder="1234567890"
                onChange={handleChange}
              />
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                placeholder="brucewayne@gotham.com"
                onChange={handleChange}
              />
              <label htmlFor="">Birthday</label>
              <input
                name="birthday"
                type="text"
                placeholder="yyyy-mm-dd"
                onChange={handleChange}
              />

              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
