import React, { useEffect, useState } from "react";
import Header from "./Header";

const Login = ({ auth, setView }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    const validate = validation();
    setError(validate)
    if (Object.keys(validate).length === 0) {
      console.log("handrleLogin clicked");
    } else {
      console.log("Invalid data");
    //   setError({});
    }
  };

  const validation = () => {
    let validate = {};
    console.log("validation run.....");
    if (!loginInfo.email) {
      validate.email = "Email required";
    }
    if (!loginInfo.password) {
      validate.password = "Password required";
    }
    return validate;
  };

  useEffect(() => {
    console.log("Error->", error);
  }, [error]);

  return (
    auth && (
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          <main className="flex-1 flex items-center justify-center px-6 py-12">
            <section className="w-full max-w-md">
              <div className="bg-black/60 rounded-lg p-8 shadow-xl">
                <h1 className="text-4xl font-extrabold text-white mb-6">
                  Sign In
                </h1>

                <form className="space-y-4" onSubmit={handleLogin}>
                  <label className="block">
                    <input
                      type="text"
                      id="email"
                      placeholder="Email or mobile number"
                      value={loginInfo.email}
                      onChange={(e) => {
                        //   loginInfo.email = e.target.value
                        setLoginInfo({ ...loginInfo, email: e.target.value });
                        // setLoginInfo(loginInfo);
                        // console.log(loginInfo);
                      }}
                      className="w-full rounded-md bg-[#222] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="block">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={loginInfo.password}
                      onChange={(e) => {
                        setLoginInfo({
                          ...loginInfo,
                          password: e.target.value,
                        });
                      }}
                      className="w-full rounded-md bg-[#222] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md mt-2"
                  >
                    Sign In
                  </button>

                  <div className="flex items-center justify-center my-4">
                    <span className="text-sm text-gray-300">OR</span>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-md border border-white/10"
                  >
                    Use a sign-in code
                  </button>

                  <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                    <a href="#" className="underline">
                      Forgot password?
                    </a>
                    <div className="flex items-center gap-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 accent-blue-600"
                      />
                      <label htmlFor="remember">Remember me</label>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-gray-300">
                    New to BingeBrain?{" "}
                    <span
                      className="underline text-white"
                      onClick={() => {
                        setView(!auth);
                      }}
                    >
                      Sign up now.
                    </span>
                  </p>

                  <p className="mt-4 text-xs text-gray-400">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </p>
                </form>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  );
};

export default Login;
