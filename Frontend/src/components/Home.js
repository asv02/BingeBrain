import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import React, { useEffect } from "react";
import Browse from "./Browse";

import Header from "./Header";

const Home = () => {
  const [view, setView] = useState(true);

  return (
    <div>
      <Header />
      {view ? (
        <Login view={view} setView={setView} />
      ) : (
        <SignUp view={view} setView={setView} />
      )}
    </div>
  );
};

export default Home;
