import Spline from '@splinetool/react-spline';
import { Rocket, Target } from 'lucide-react';

export default function BrandHero() {
  return (
    <section className="relative rounded-2xl overflow-hidden bg-neutral-950 text-white shadow-2xl">
      <div className="grid md:grid-cols-2 min-h-[540px]">
        {/* Left content */}
        <div className="relative z-10 flex items-center">
          <div className="w-full px-6 sm:px-10 py-12 md:py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm border border-white/10">
              <Rocket className="w-4 h-4" />
              <span>Anna Corporation</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Intelligent Growth, Automated.
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-xl">
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
            <div className="mt-3">
              <span className="inline-block bg-white/10 backdrop-blur rounded-md px-3 py-2 text-sm border border-white/10">
                Slogan: "Build once. Scale forever."
              </span>
            </div>
          </div>
        </div>

        {/* Right 3D scene */}
        <div className="relative">
          {/* Subtle glow gradient overlay (does not block interaction) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fuchsia-500/10" />
          <Spline
            scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
