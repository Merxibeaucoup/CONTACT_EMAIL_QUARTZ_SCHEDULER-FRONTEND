import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";

const Contacts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  /** fetch All posts */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await newRequest.get("/contact/all/user", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);
  /** fetch single post */

  // const handleUpdate = async (e) => {
  //   ref.current.click();
  //   try {
  //     const res = await newRequest.get(`/contact/${posts.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     setSinglePost(res.data);
  //     setEmail(res.data?.email);
  //     setFirstname(res.data?.firstname);
  //     setLastname(res.data?.lastname);
  //     setNumber(res.data?.number);
  //     setBirthday(res.data?.birthday);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
          <div key={i}>
            <ul className="contacts__contact">
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
              <li className="contacts__contact-number">
                <p>{c.birthday}</p>
              </li>
              <div className="contacts__contact__buttons">
                <Link to={`/contact/${c.id}`}>
                  <p className="contacts__contact__buttons-edit">edit</p>
                </Link>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
