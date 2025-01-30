import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider"; 
import googleLogo from "../assets/google-logo.svg";

const Signup = () => {
  const { createUser , loginWithGoogle} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    createUser(email, password)
      .then((userCredential) => {
        // Successfully signed up
        console.log("User created:", userCredential.user);
		alert("Signed up sucessfully");
		navigate(from,{replace: true})
      })
      .catch((error) => {
        setError(error.message); // Display error message
      });
  };

  //sign up using google account
  const handleRegister = () =>{
	loginWithGoogle().then((result) => {
		const user  = result.user;
		alert("Signed up sucessfully");
		navigate(from,{replace: true})
	}).catch((error) => {
        setError(error.message); // Display error message
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-md sm:mx-auto">
        <div className="absolute inset-0 bg-blue-500 shadow-lg transform rotate-6 sm:rounded-3xl"></div>
        <div className="absolute inset-0 bg-blue-300 shadow-lg transform -rotate-6 sm:rounded-3xl"></div>

        <div className="relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-center">Sign Up Form</h1>

            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSignUp} className="py-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7">
                
                {/* Display Error Message */}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {/* Email Input */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-10 w-full border border-gray-300 text-gray-900 rounded-md px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="h-10 w-full border border-gray-300 text-gray-900 rounded-md px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <p className="text-center text-gray-600 text-sm">
                  Already have an account? <Link to="/login" className="text-blue-600 underline">Login here</Link>
                </p>

                {/* Signup Button */}
                <div className="relative flex justify-center">
                  <button type="submit" className="bg-blue-500 text-white rounded-md px-6 py-2">
                    Sign Up
                  </button>
                </div>

              </form>
            </div>

			<hr/>
			<div className="flex w-full items-center flex-col mt-5 gap-3">
				<button onClick={handleRegister} className="block"><img src={googleLogo} alt="" className="w-12 h-12 inline-block"/>Login with Google</button>
			</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
