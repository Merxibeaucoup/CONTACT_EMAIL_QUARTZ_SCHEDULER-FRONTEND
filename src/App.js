import React, { useContext } from "react";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import { AuthContext } from "./context/auth/AuthContext";
import Edit from "./pages/Edit";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={user ? <Contacts /> : <Register />} />
        <Route path="contact/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
