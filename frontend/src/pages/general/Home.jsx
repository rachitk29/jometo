import React, { useState } from 'react';

function Home() {
  const [videos] = useState([
    {
      id: 1,
      videoUrl: 'https://ik.imagekit.io/rachitk/e43f82f5-4694-4b03-b2b1-b3a47aa1bc12_LbPKbZiql',
      storeName: 'Pizza Palace',
      description:
        'Authentic Italian pizzas with fresh ingredients and wood-fired oven taste',
    },
    {
      id: 2,
      videoUrl: 'https://ik.imagekit.io/rachitk/e43f82f5-4694-4b03-b2b1-b3a47aa1bc12_LbPKbZiql',
      storeName: 'Sushi Dreams',
      description:
        'Fresh sushi rolls, nigiri and sashimi with the finest quality fish',
    },
    {
      id: 3,
      videoUrl: 'https://ik.imagekit.io/rachitk/e43f82f5-4694-4b03-b2b1-b3a47aa1bc12_LbPKbZiql',
      storeName: 'Biryani House',
      description:
        'Traditional biryani cooked with aromatic spices and basmati rice',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentIndex(index);
  };

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      {/* Vertical Reel Container */}
      <div
        onScroll={handleScroll}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="h-screen w-full flex items-center justify-center snap-start"
          >
            {/* 9:16 Frame */}
            <div className="relative h-full aspect-[9/16] max-w-[420px] w-full bg-black">

              {/* Media */}
              <video
                src={video.videoUrl}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />


              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Top title */}
              <div className="absolute top-4 left-4 right-4 z-10">
                <h2 className="text-white text-base font-semibold">
                  {video.storeName}
                </h2>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                <p className="text-gray-200 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                <button className="w-full py-2.5 rounded-full bg-white text-black text-sm font-medium active:scale-95 transition">
                  Visit store
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Side Indicator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        {videos.map((_, i) => (
          <span
            key={i}
            className={`w-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'h-8 bg-white' : 'h-2 bg-white/40'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
