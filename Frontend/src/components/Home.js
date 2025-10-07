import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Header from "./Header";

const Home = () => {
  const [view, setView] = useState(true);
  return (
    <div>
      <Header />
      {view ? <Login auth={view} setView={setView}/> : <SignUp auth={view} setView={setView}/>}
    </div>
  );
};

export default Home;
