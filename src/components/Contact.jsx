import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import Contacts from "../pages/Contacts";
import newRequest from "../utils/newRequest";

const Contact = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

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
  return (
    <div>
      {posts &&
        posts.map((item) => {
          <Contacts item={item} key={item.id} />;
        })}
    </div>
  );
};

export default Contact;
