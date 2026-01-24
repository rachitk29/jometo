import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/food-partner/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProfile(res.data.foodPartner)
        setVideos(res.data.foodPartner.foodItems)
      })
  }, [id])

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Profile Header */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-6">

            <img
              src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60"
              alt=""
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-zinc-700"
            />

            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-semibold text-white">
                {profile?.name}
              </h1>
              <p className="text-sm text-zinc-400">
                {profile?.address}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 border-t border-zinc-800 pt-6">
            <div className="text-center">
              <p className="text-sm text-zinc-400">Total meals</p>
              <p className="text-2xl font-semibold text-white mt-1">
                {profile?.totalMeals}
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-zinc-400">Customers served</p>
              <p className="text-2xl font-semibold text-white mt-1">
                {profile?.customersServed}
              </p>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section>
          <h2 className="text-lg font-medium text-white mb-4">
            Food videos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {videos.map((v) => (
              <div
                key={v.id}
                className="aspect-[3/4] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800"
              >
                <video
                  src={v.video}
                  muted
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default Profile
