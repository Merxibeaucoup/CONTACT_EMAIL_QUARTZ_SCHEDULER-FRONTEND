import React, { useEffect, useState } from "react";
import newRequest from "../utils/newRequest";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await newRequest.get("/contact/all/user");
      setContacts(res.data);
    };
    fetchPosts();
  }, []);

  if (!contacts) return null;
  return (
    <div>
      <h1>{contacts.firstname}</h1>
    </div>
  );
};

export default Contacts;
