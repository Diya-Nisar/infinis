import { AnimationWrapper } from './AnimationWrapper'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimationWrapper>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Your Guide to a Holistic, Empowered Life</h1>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="text-xl mb-8">Unlock your potential and live your best life inside out with Vaishali Gala</p>
        </AnimationWrapper>
        <AnimationWrapper>
          <a href="#contact" className="bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 text-lg">
            Start Your Journey
          </a>
        </AnimationWrapper>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="waves">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.2)" />
          </g>
        </svg>
      </div>
    </section>
  )
}

