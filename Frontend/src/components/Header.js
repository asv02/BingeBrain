import React from "react";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
         console.log('Error in Logout')
         return;
      });
  };

  return (
    <div>
      <img src="/logo.svg" alt="bingeBrain"></img>
      Header
      <button onClick={handleClick}>SignOut</button>
    </div>
  );
};

export default Header;
