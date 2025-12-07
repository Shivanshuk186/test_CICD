"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [showWish, setShowWish] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setShowWish(true);
    }
  };

  const confettiColors = [
    'bg-yellow-400', 'bg-pink-400', 'bg-cyan-400', 
    'bg-green-400', 'bg-orange-400', 'bg-red-400', 
    'bg-purple-400', 'bg-blue-400'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated floating confetti */}
      {showWish && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 ${confettiColors[i % confettiColors.length]} rounded-sm opacity-80`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animation: `fall ${3 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-2xl w-full relative z-10">
        {!showWish ? (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-12 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
            <h1 className="text-5xl font-light text-white mb-8 tracking-wide">
              Special Wishes
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-5 py-3 text-white bg-white/10 rounded-lg border border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder:text-gray-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-white/20 text-white font-medium py-3 rounded-lg hover:bg-white/30 transition-all backdrop-blur-sm transform hover:scale-105 active:scale-95"
              >
                Continue
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-12 text-center transition-all duration-500">
            <h2 className="text-5xl font-light text-white mb-6 animate-fade-in">
              Happy Birthday {name}! 🎉
            </h2>
            <p className="text-xl text-white/90 mb-6 animate-fade-in-delay-1">
              Thank you for being amazing! 🙌
            </p>
            <p className="text-lg text-white/80 mb-4 animate-fade-in-delay-2">
              Wishing you a year filled with:
            </p>
            <div className="space-y-3 text-left max-w-md mx-auto mb-8">
              <p className="text-white/90 animate-fade-in-delay-3">🎓 More successful achievements</p>
              <p className="text-white/90 animate-fade-in-delay-4">💻 Exciting coding adventures</p>
              <p className="text-white/90 animate-fade-in-delay-5">📚 New learning experiences</p>
              <p className="text-white/90 animate-fade-in-delay-6">✨ And lots of happiness!</p>
            </div>
            <button
              onClick={() => {
                setName("");
                setShowWish(false);
              }}
              className="text-white/70 hover:text-white font-medium transition-colors"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.3;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.6s ease-out 0.2s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s backwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.6s backwards;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.6s ease-out 0.8s backwards;
        }

        .animate-fade-in-delay-5 {
          animation: fade-in 0.6s ease-out 1s backwards;
        }

        .animate-fade-in-delay-6 {
          animation: fade-in 0.6s ease-out 1.2s backwards;
        }
      `}</style>
    </div>
  );
}
