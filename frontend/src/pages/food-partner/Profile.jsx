import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const { id } = useParams()
    const [profile, setProfile] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
            .then(response => {
                setProfile(response.data.foodPartner)
                setVideos(response.data.foodPartner.foodItems)
            })
    }, [id])

    if (!profile) return <div className="min-h-screen bg-black text-zinc-500 p-10">Loading profile...</div>

    return (
        <main className="max-w-[1100px] mx-auto px-6 pb-8 flex flex-col gap-6 font-sans">
            {/* Header block: .profile-header */}
            <section className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm p-6 flex flex-col gap-6">
                
                {/* Meta: .profile-meta */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-6 max-[900px]:grid-cols-[96px_1fr] max-[420px]:grid-cols-[72px_1fr]">
                    {/* Avatar: .profile-avatar */}
                    <img 
                        className="w-[120px] h-[120px] rounded-full object-cover bg-zinc-800 border-2 border-zinc-800 max-[900px]:w-[96px] max-[900px]:h-[96px] max-[420px]:w-[72px] max-[420px]:h-[72px]" 
                        src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500" 
                        alt="Profile" 
                    />

                    {/* Info: .profile-info */}
                    <div className="grid gap-3">
                        {/* Pill: .profile-business */}
                        <h1 className="inline-flex items-center rounded-xl px-4 py-2 border border-zinc-800 bg-zinc-800 text-white text-xl font-bold w-fit shadow-sm">
                            {profile?.name}
                        </h1>
                        {/* Pill: .profile-address */}
                        <p className="inline-flex items-center rounded-xl px-4 py-2 border border-zinc-800 bg-zinc-800 text-zinc-400 text-base w-fit shadow-sm">
                            {profile?.address}
                        </p>
                    </div>
                </div>

                {/* Stats: .profile-stats */}
                <div className="grid grid-cols-2 gap-6 border-t border-dashed border-zinc-800 pt-6 max-[420px]:gap-4">
                    <div className="grid justify-items-center gap-1">
                        <span className="text-zinc-500 text-lg max-[420px]:text-sm uppercase tracking-tight">total meals</span>
                        <span className="text-3xl font-extrabold text-white max-[420px]:text-xl">{profile?.totalMeals || 0}</span>
                    </div>
                    <div className="grid justify-items-center gap-1">
                        <span className="text-zinc-500 text-lg max-[420px]:text-sm uppercase tracking-tight">customer served</span>
                        <span className="text-3xl font-extrabold text-white max-[420px]:text-xl">{profile?.customersServed || 0}</span>
                    </div>
                </div>
            </section>

            {/* Separator: .profile-sep */}
            <hr className="h-px border-none bg-zinc-800" />

            {/* Grid: .profile-grid */}
            <section className="grid grid-cols-3 gap-1" aria-label="Videos">
                {videos.map((v, index) => (
                    <div key={index} className="aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden">
                        <video
                            className="w-full h-full object-cover"
                            src={v.video} 
                            muted
                            loop
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => {
                                e.target.pause()
                                e.target.currentTime = 0
                            }}
                        />
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Profile