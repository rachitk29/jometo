import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function UserLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/login",
        { email, password },
        { withCredentials: true }
      );
      
      // If your backend returns the user/partner object:
      // navigate(`/profile/${response.data.user._id}`); 
      navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8">
        
        <h1 className="text-2xl font-semibold text-white mb-2">
          Welcome back
        </h1>
        <p className="text-sm text-zinc-400 mb-6">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-xs bg-red-900/20 border border-red-900/50 text-red-400 rounded-lg">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
            <p className="text-sm text-zinc-400">
            New user?{" "}
            <Link to="/user/register" className="text-white hover:underline">
                Create account
            </Link>
            </p>
            
            <p className="text-xs text-zinc-500">
                Are you a business?{" "}
                <Link to="/food-partner/login" className="text-zinc-300 hover:underline">
                    Partner Login
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;