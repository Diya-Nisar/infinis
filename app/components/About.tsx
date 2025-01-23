import { AnimationWrapper } from './AnimationWrapper'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-4xl font-bold text-center mb-8">About Vaishali Gala</h2>
        </AnimationWrapper>
        <div className="max-w-3xl mx-auto">
          <AnimationWrapper>
            <p className="text-lg mb-6 text-justify">
              Hi, I'm Vaishali Gala – Your Guide to a Holistic, Empowered Life! I'm a certified Life Coach with a passion for helping individuals unlock their potential and live their best lives inside out.
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <p className="text-lg mb-6 text-justify">
              My journey began with a deep desire to understand the challenges we face in our daily lives and discover meaningful solutions. I've cultivated expertise in a variety of holistic modalities over a decade of practice including:
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Talk Therapy to address emotional wellness and provide clarity.</li>
              <li>Graphology for insights into your subconscious patterns.</li>
              <li>Numerology to align your life choices with your unique energy.</li>
              <li>Emotional Freedom Technique (EFT) to release emotional blockages.</li>
              <li>Color Therapy and Energy Work to restore balance and vitality.</li>
              <li>Herbal and Ayurvedic Guidance to heal naturally and achieve harmony.</li>
            </ul>
          </AnimationWrapper>
          <AnimationWrapper>
            <p className="text-lg mb-6 text-justify">
              My approach blends ancient wisdom with modern techniques, creating personalized coaching plans that provide solutions focusing on your mind, body, and soul.
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <p className="text-lg text-justify">
              I have worked with clients globally across different continents and understand how we are different in cultures and practices but same in our hearts. Whether you're looking to overcome personal challenges, set meaningful goals, or simply rediscover yourself, I'm here to support you every step of the way.
            </p>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}

