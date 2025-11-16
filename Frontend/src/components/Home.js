import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Browse from "./Browse";
import Header from "./Header";
import Background from "url:../assests/bg.jpg";

const Home = () => {
  const [view, setView] = useState(true);

  return (
    <div className="relative min-h-screen">
      <img
        src={Background}
        alt="Background image"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />
      <div className="relative z-10">
        <Header />
        {view ? (
          <Login view={view} setView={setView} />
        ) : (
          <SignUp view={view} setView={setView} />
        )}
      </div>
    </div>
  );
};

export default Home;
