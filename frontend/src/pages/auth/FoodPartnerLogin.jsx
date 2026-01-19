import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function FoodPartnerLogin() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post(
      "http://localhost:3000/api/auth/food-partner/login",
      { email, password },
      { withCredentials: true }
    );

    console.log(Response.data);

    navigate("/create-food");
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8">

        <h1 className="text-2xl font-semibold text-white mb-2">
          Partner Login
        </h1>
        <p className="text-sm text-zinc-400 mb-6">
          Manage your restaurant and orders
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="partner@restaurant.com"
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
            New partner?{" "}
            <Link to="/food-partner/register" className="text-white hover:underline">
              Register here
            </Link>
          </p>

          <p className="text-xs text-zinc-500">
            Are you a regular user?{" "}
            <Link to="/user/login" className="text-zinc-300 hover:underline">
              Login as user
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default FoodPartnerLogin;
