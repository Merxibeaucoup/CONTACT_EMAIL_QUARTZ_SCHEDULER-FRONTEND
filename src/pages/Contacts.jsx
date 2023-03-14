import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";

const Contacts = () => {
  const [posts, setPosts] = useState([]);
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await newRequest.get("/contact/all/user", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {/* Home
      <button onClick={handleLogout}>{user && "LOGOUT"}</button> */}
      {posts.map((item, i) => (
        <div key={i}>
          <div>{item.email}</div>
          <div>{item.firstname}</div>
          <div>{item.lastname}</div>
          <div>{item.firstname}</div>
          <div>{item.number}</div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
