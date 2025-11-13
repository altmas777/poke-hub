import React from 'react'
import { Link } from 'react-router-dom'
import Easy from './Easy'
import Normal from './Normal'
import Hard from './Hard'

const mainpage = () => {
  return (
 <>
 
  <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1465360/b80e6efe5a4e44138eab8f5e82dc476a6b81c3bf.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-3 tracking-wider">
                POKÉHUB 
              </h1>
            </div>
            <p className="text-2xl text-cyan-300 font-semibold tracking-widest mt-4 drop-shadow-lg">
              SELECT DIFFICULTY MODE
            </p>
            <p className='text-white font-bold mt-5'>
                DEVELOPER BY MR ALTMASH
            </p>
          </div>

          {/* Difficulty Buttons */}
          <div className="space-y-8">
            {/* Easy Link */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Link to={"/easy"}
                className="relative w-full bg-gradient-to-r from-green-500 to-emerald-700 border-2 border-green-300 text-white rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 shadow-2xl block"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="bg-white bg-opacity-20 p-5 rounded-xl backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 text-5xl">
                      ⚡
                    </div>
                    <div className="text-left">
                      <h2 className="text-4xl font-bold tracking-wider mb-1">EASY</h2>
                      <p className="text-green-200 text-sm tracking-wide">BEGINNER TRAINER</p>
                    </div>
                  </div>
                  <div className="text-7xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">★</div>
                </div>
              </Link>
            </div>

            {/* Normal Link */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Link to={"/normal"}
                className="relative w-full bg-gradient-to-r from-blue-500 to-indigo-700 border-2 border-blue-300 text-white rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 shadow-2xl block"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="bg-white bg-opacity-20 p-5 rounded-xl backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 text-5xl">
                      🎯
                    </div>
                    <div className="text-left">
                      <h2 className="text-4xl font-bold tracking-wider mb-1">NORMAL</h2>
                      <p className="text-blue-200 text-sm tracking-wide">EXPERIENCED</p>
                    </div>
                  </div>
                  <div className="text-7xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">★★</div>
                </div>
              </Link>
            </div>

            {/* Hard Link */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-rose-700 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Link to={"/hard"}
                className="relative w-full bg-gradient-to-r from-red-600 to-rose-800 border-2 border-red-300 text-white rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 shadow-2xl block"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="bg-white bg-opacity-20 p-5 rounded-xl backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 text-5xl">
                      🔥
                    </div>
                    <div className="text-left">
                      <h2 className="text-4xl font-bold tracking-wider mb-1">HARD</h2>
                      <p className="text-red-200 text-sm tracking-wide">POKEMON MASTER</p>
                    </div>
                  </div>
                  <div className="text-7xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">★★★</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <div className="inline-block px-6 py-3 bg-black bg-opacity-50 backdrop-blur-md rounded-full border border-cyan-400">
              <p className="text-cyan-300 text-sm tracking-widest font-semibold">
                GOTTA CATCH 'EM ALL! 🎮
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </>
  )
}

export default mainpage