import { Rocket, Target } from 'lucide-react';

export default function BrandHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white rounded-2xl shadow-xl">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#ffffff" stopOpacity="0.25" offset="0%" />
              <stop stopColor="#ffffff" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r="180" fill="url(#g)" />
          <circle cx="680" cy="420" r="220" fill="url(#g)" />
          <circle cx="400" cy="260" r="140" fill="url(#g)" />
        </svg>
      </div>
      <div className="relative px-6 sm:px-10 py-14 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm">
              <Rocket className="w-4 h-4" />
              <span>Anna Corporation</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Intelligent Growth, Automated.
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
              We design AI-native systems that turn ideas into scalable, sustainable businesses.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow">
                <Target className="w-4 h-4" /> Mission
              </span>
              <p className="text-white/90 text-sm md:text-base">
                Empower entrepreneurs and enterprises to achieve profitable automation with zero waste.
              </p>
            </div>
            <div className="mt-3 text-white/90 text-sm md:text-base">
              <strong>Vision:</strong> A world where every business is augmented by ethical AI, compounding value for people and planet.
            </div>
            <div className="mt-3">
              <span className="inline-block bg-white/15 backdrop-blur rounded-md px-3 py-2 text-sm">
                Slogan: "Build once. Scale forever."
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold tracking-tight">Brand Identity</h3>
              <ul className="mt-3 space-y-2 text-white/90 text-sm">
                <li>• Tone: Clear, bold, trustworthy, future-focused</li>
                <li>• Visuals: Clean geometry, gradient energy, minimal icons</li>
                <li>• Values: Integrity, impact, velocity, simplicity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
