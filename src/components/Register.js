import Login0 from "./Login0";
import React from "react";
import abc from "./assets/Image1.jpg";
import { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
  });

  const go_get = (e) => {
    // console.log("e=>",e.target);
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  function refreshPage() {
    window.location.reload(false);
  }
  const submit = async (e) => {
    refreshPage();
    e.preventDefault();
    console.log("data=>gyhjk", data);
    await axios
      .post("http://localhost:8000/Register", data)
      .then((response) => {
        console.log("res=>", response);
		alert("Registration is completed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div class="h-full bg-gray-400 dark:bg-gray-900  ">
        <div class="mx-auto" style={{ backgroundImage: `url(${abc})` }}>
          <div class="flex justify-center px-6  ">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{ backgroundImage: `url(${abc})` }}
              ></div>

              <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">
                  Create an Account!
                </h3>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        for="First_Name"
                      >
                        First Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="first_Name"
                        type="text"
                        placeholder="First Name"
                        name="First_Name"
                        value={data.First_Name}
                        onChange={(e) => {
                          go_get(e);
                        }}
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        for="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="last_Name"
                        type="text"
                        placeholder="Last Name"
                        name="Last_Name"
                        value={data.Last_Name}
                        onChange={(e) => {
                          go_get(e);
                        }}
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="Email"
                      value={data.Email}
                      onChange={(e) => {
                        go_get(e);
                      }}
                    />
                  </div>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        name="Password"
                        value={data.Password}
                        onChange={(e) => {
                          go_get(e);
                        }}
                      />
                      <p class="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        for="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Confirm_Password"
                        type="password"
                        placeholder="******************"
                        name="Confirm_Password"
                        value={data.Confirm_Password}
                        onChange={(e) => {
                          go_get(e);
                        }}
                      />
                    </div>
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-green-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={(e) => {
                        submit(e);
                      }}
                    >
                      Register Account
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href=""
					  Sign In
                    >
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
