import React, { useEffect, useState } from "react";
import Header from "./Header";
import auth from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { SignUpValidation } from "../utils/validate";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/appSlice";

const SignUp = ({ view, setView }) => {
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const [SignUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSignUp = (e) => {
    e.preventDefault();
    const validate = SignUpValidation(SignUpInfo);
    setError(validate);
    if (Object.keys(validate).length !== 0) {
      console.log("Invalid data...");
      return;
    } else {
      createUserWithEmailAndPassword(
        auth,
        SignUpInfo.email,
        SignUpInfo.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("SignedUp user->", user);
          updateProfile(user, {
            displayName: SignUpInfo.name,
          })
            .then(() => {
              console.log("Updted name successfully");
              dispatch(
                setUser({
                  uid: user?.uid,
                  email: user?.email,
                  displayName: user?.displayName,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("User not updated");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  useEffect(() => {
    console.log("SignUp render->", auth.currentUser);
  });

  return (
    !view && (
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          <main className="flex-1 flex items-center justify-center px-6 py-12">
            <section className="w-full max-w-md">
              <div className="bg-black/60 rounded-lg p-8 shadow-xl">
                <h1 className="text-4xl font-extrabold text-white mb-6">
                  Sign Up
                </h1>

                <form className="space-y-4" onSubmit={handleSignUp}>
                  <label className="block">
                    <input
                      type="text"
                      id="name"
                      placeholder="Full Name"
                      value={SignUpInfo.name}
                      onChange={(e) => {
                        //   SignUpInfo.email = e.target.value
                        setSignUpInfo({ ...SignUpInfo, name: e.target.value });
                        // setSignUpInfo(SignUpInfo);
                        // console.log(SignUpInfo);
                      }}
                      className="w-full rounded-md bg-[#222] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      id="email"
                      placeholder="Email or mobile number"
                      value={SignUpInfo.email}
                      onChange={(e) => {
                        //   SignUpInfo.email = e.target.value
                        setSignUpInfo({ ...SignUpInfo, email: e.target.value });
                        // setSignUpInfo(SignUpInfo);
                        // console.log(SignUpInfo);
                      }}
                      className="w-full rounded-md bg-[#222] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="font-bold text-red-600">
                      {error?.email}
                    </span>
                  </label>

                  <label className="block">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={SignUpInfo.password}
                      onChange={(e) => {
                        setSignUpInfo({
                          ...SignUpInfo,
                          password: e.target.value,
                        });
                      }}
                      className="w-full rounded-md bg-[#222] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="font-bold text-red-600">
                      {error?.password}
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md mt-2"
                  >
                    Sign Up
                  </button>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
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
                    Already Registered?{" "}
                    <span
                      onClick={() => {
                        setView(!view);
                      }}
                      className="underline text-white"
                    >
                      Sign In.
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

export default SignUp;
