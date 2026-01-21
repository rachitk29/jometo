import React, { useState, useEffect, use } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const { id } = useParams()
    const [ profile, setProfile ] = useState(null)
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
            .then(response => {
                setProfile(response.data.foodPartner)
                setVideos(response.data.foodPartner.foodItems)
            })
    }, [ id ])

    return (
        <main className="min-h-screen bg-[#0b1220] flex justify-center py-10 text-white">
            <div className="w-[360px] space-y-6">

                {/* Profile Card */}
                <section className="bg-gradient-to-b from-[#1b2a41] to-[#132033] rounded-2xl p-4 shadow-lg">
                    <div className="flex gap-4 items-start">
                        <img
                            className="w-16 h-16 rounded-full object-cover bg-white/10"
                            src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60"
                            alt=""
                        />

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h1 className="text-sm font-semibold px-3 py-1 rounded-full bg-white/10">
                                    {profile?.name}
                                </h1>
                                <span className="w-3 h-3 rounded-full border border-white/40"></span>
                            </div>

                            <p className="text-xs text-white/60 mt-2 bg-white/5 px-3 py-2 rounded-lg">
                                {profile?.address}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-around mt-4 text-center">
                        <div>
                            <span className="block text-[11px] text-white/50">total meals</span>
                            <span className="text-sm font-medium">
                                {profile?.totalMeals}
                            </span>
                        </div>
                        <div>
                            <span className="block text-[11px] text-white/50">customer served</span>
                            <span className="text-sm font-medium">
                                {profile?.customersServed}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Video Grid */}
                <section className="grid grid-cols-2 gap-4">
                    {videos.map((v) => (
                        <div
                            key={v.id}
                            className="aspect-square rounded-xl bg-gradient-to-b from-[#1b2a41] to-[#132033] overflow-hidden flex items-center justify-center text-white/40 text-sm"
                        >
                            <video
                                className="w-full h-full object-cover"
                                src={v.video}
                                muted
                            ></video>
                        </div>
                    ))}
                </section>

            </div>
        </main>
    )
}

export default Profile
