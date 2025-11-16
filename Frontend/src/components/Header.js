import React from "react";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser, toggleSearch } from "../utils/appSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const logoUrl = new URL("../assests/logo.svg", import.meta.url);

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userReducer = useSelector((store) => store?.UserReducer);
  const userName = userReducer?.displayName;
  const uid = userReducer?.uid;
  console.log("userName->", userName);
  console.log("logoUrl:", logoUrl);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error in Logout:", error);
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
    <div className="h-2/4 flex items-center px-8 py-4">
      <div className="flex items-center">
        <img className="h-2/4 w-2/4" src={logoUrl} alt="logo" />
      </div>
      <div className="flex items-center space-x-4 right-0">
        {uid ? (
          <>
            <button
              onClick={() => dispatch(toggleSearch())}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              GPT Search
            </button>
            <span className="text-white text-sm">Welcome, {userName}</span>
            <button
              onClick={handleClick}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 border-amber-50"
            >
              Sign Out
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
