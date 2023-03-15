import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";

const Contacts = () => {
  const [posts, setPosts] = useState([]);
  const { user, dispatch } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

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
      <div className="contacts__add">
        <button className="contacts__add-btn" onClick={() => setModal(true)}>
          +
        </button>
        {modal === true && <Modal setModal={setModal} />}
      </div>
      <div className="contact">
        {posts.map((c, i) => (
          <div>
            <ul key={i} className="contacts__contact">
              <li className="contacts__contact-email">
                <h2>{c.email}</h2>
              </li>
              <li className="contacts__contact-firstname">
                <p>
                  {c.firstname} {c.lastname}
                </p>
              </li>

              <li className="contacts__contact-number">
                <p>{c.number}</p>
              </li>
              <div className="contacts__contact__buttons">
                <p className="contacts__contact__buttons-edit">edit</p>
                <p className="contacts__contact__buttons-delete">delete</p>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
