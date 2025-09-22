"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { ILoginTypes } from "./login-types";
import { loginUser } from "@/lib/store/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

function Login() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.auth);
  console.log(user, "User state ma yo xa");

  const [data, setData] = useState<ILoginTypes>({
    email: "",
    password: "",
  });

  const handleLoginDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  // console.log(data);

  const handleLoginDataSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(data));
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-full flex items-center justify-center">
          <div className="w-3/4 max-w-md p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Sign in</h2>
            <form onSubmit={handleLoginDataSubmission}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleLoginDataChange}
                  placeholder="Enter your email"
                  className="w-full px-4  text-gray-700 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleLoginDataChange}
                  placeholder="Enter your password"
                  className="w-full px-4  text-gray-700 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                Sign in
              </button>
            </form>
            <button className="w-full mt-4 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition  text-gray-700 cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2 "
              />
              Sign-in with Google
            </button>
            <p className="mt-6 text-sm text-center text-gray-600">
              Don't have an account?
              <a href="/signin" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
