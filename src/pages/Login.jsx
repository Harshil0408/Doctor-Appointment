import React from "react";
import { useState } from "react";

const Login = () => {
  const [state, setstate] = useState("Sign Up");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login Account"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Sign In" : "Login"} to book appointment
        </p>
        {state === 'Sign Up' &&  <div className="w-full">
          <p>Full Name</p>

          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1 "
            type="text"
            onChange={(e) => setname(e.target.value)}
            value={name}
            required
          />
        </div>  }
       
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1 "
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1 "
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Crrate Account" : "Login"}
        </button>
        <p>
          {state === "Sign Up" ? (
            <p>
              Already have an Account?{" "}
              <span
                onClick={() => setstate("Login")}
                className="text-primary underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an new account?{" "}
              <span
                onClick={() => setstate("Sign Up")}
                className="text-primary underline cursor-pointer"
              >
                {" "}
                Click here
              </span>
            </p>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
