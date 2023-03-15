import React, { useState } from "react";

const Modal = ({ setModal }) => {
  return (
    <div className="backshadow">
      <div className="custom-modal">
        <div className="delete-icon" onClick={() => setModal(false)}>
          x
        </div>
        <div className="modal__form">
          <form>
            <div className="left">
              <h1>Add a new Contact</h1>
              <label htmlFor="">Firstname</label>
              <input name="firstname" type="text" placeholder="john ..." />
              <label htmlFor="">Lastname</label>
              <input name="lastname" type="text" placeholder="doe ..." />
              <label htmlFor="">Email</label>
              <input name="email" type="email" placeholder="email ..." />
              <label htmlFor="">Password</label>
              <input name="password" type="password" />

              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
