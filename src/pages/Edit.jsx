import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";

const Edit = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [singlePost, setSinglePost] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await newRequest.get(`/contact/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setSinglePost(res.data);
        setEmail(res.data?.email);
        setFirstname(res.data?.firstname);
        setLastname(res.data?.lastname);
        setNumber(res.data?.number);
        setBirthday(res.data?.birthday);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPost();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const contactData = {
      firstname,
      lastname,
      number,
      email,
      birthday,
    };
    try {
      await newRequest
        .put(`/contact/${id}`, contactData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then(window.location.replace("/contacts"));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (e) => {
    try {
      await newRequest
        .delete(`/contact/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then(window.location.replace("/contacts"));
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="edit">
        <div className="edit__misc-back">
          <Link to="/contacts">
            <h1>← go back</h1>
          </Link>
        </div>
        <div className="edit__form">
          <form onSubmit={handleUpdate}>
            <h1>Edit Contact</h1>
            <label htmlFor="">Firstname</label>
            <input
              type="text"
              value={firstname}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="">Lastname</label>
            <input
              type="text"
              value={lastname}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="">Number</label>
            <input
              type="text"
              value={number}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              value={email}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Birthday</label>
            <input
              type="text"
              value={birthday}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setBirthday(e.target.value)}
            />

            <button type="submit">Update</button>
          </form>
        </div>
        <div className="edit__misc-delete">
          <h1 onClick={handleDelete}>Delete contact</h1>
        </div>
      </div>
    </>
  );
};

export default Edit;
