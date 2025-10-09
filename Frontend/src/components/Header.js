import React from "react";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser, toggleSearch } from "../utils/appSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((store) => store?.userReducer?.displayName);
  console.log("userName->", userName);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error in Logout");
        return;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Auth changed api get called....");
        dispatch(
          setUser({
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
          })
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-90">
      <div className="flex items-center">
        <img src="/logo.svg" alt="bingeBrain" className="h-12 w-auto"></img>
        <span className="ml-4 text-white text-xl font-bold">BingeBrain</span>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={()=>dispatch(toggleSearch())}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          GPT Search
        </button>
        <span className="text-white text-sm">Welcome, {userName}</span>
        <button 
          onClick={handleClick}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
