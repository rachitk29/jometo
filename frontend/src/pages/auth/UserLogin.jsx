import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function UserLogin() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post(
      "http://localhost:3000/api/auth/user/login",
      { email, password },
      { withCredentials: true }
    );

    navigate("/");
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

        <p className="text-sm text-zinc-400 mt-6 text-center">
          New user?{" "}
          <Link
            to="/user/register"
            className="text-white hover:underline"
          >
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default UserLogin;
