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
    <div className="contacts">
      <div className="contact">
        {posts.map((c, i) => (
          <ul key={i} className="contacts__contact">
            <li className="contacts__contact-email">
              <h2>{c.email}</h2>
            </li>
            <li className="contacts__contact-firstname">
              <p>{c.firstname}</p>
            </li>
            <li className="contacts__contact-lastname">
              <p>{c.lastname}</p>
            </li>
            <li className="contacts__contact-number">
              <p>{c.number}</p>
            </li>
            <div className="contacts__contact__buttons">
              <p>edit</p>
              <p>delete</p>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
