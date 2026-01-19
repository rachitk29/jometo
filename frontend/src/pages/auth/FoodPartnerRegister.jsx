import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    await axios.post(
      "http://localhost:3000/api/auth/food-partner/register",
      {
        name: businessName,
        contactName,
        phone,
        email,
        password,
        address,
      },
      { withCredentials: true }
    );

    navigate("/create-food");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8">

        <h1 className="text-2xl font-semibold text-white mb-2">
          Partner Sign Up
        </h1>
        <p className="text-sm text-zinc-400 mb-6">
          Grow your restaurant with our platform
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Business name
            </label>
            <input
              type="text"
              name="businessName"
              placeholder="Tasty Bites"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Contact name
              </label>
              <input
                type="text"
                name="contactName"
                placeholder="Jane Doe"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="business@example.com"
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
              placeholder="Create password"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="123 Market Street"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
            <p className="text-xs text-zinc-500 mt-1">
              Full address helps customers find you faster.
            </p>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition"
          >
            Create Partner Account
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <p className="text-sm text-zinc-400">
            Already a partner?{" "}
            <Link to="/food-partner/login" className="text-white hover:underline">
              Sign in
            </Link>
          </p>

          <p className="text-xs text-zinc-500">
            Are you a regular user?{" "}
            <Link to="/user/register" className="text-zinc-300 hover:underline">
              Register as user
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default FoodPartnerRegister;
