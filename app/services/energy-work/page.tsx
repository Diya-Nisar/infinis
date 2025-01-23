import { Feather } from 'lucide-react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import Link from 'next/link'

export default function EnergyWorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Energy Work</h1>
        <div className="flex justify-center mb-8">
          <Feather className="w-16 h-16 text-indigo-600" />
        </div>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl mb-6">
            Rebalance your energy for inner peace. Our energy work sessions use techniques such as Chakra balancing, aura cleansing, and breathwork to restore harmony to your mind, body, and spirit.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Assessment of your energy centers (Chakras)</li>
            <li>Guided energy clearing and balancing techniques</li>
            <li>Personalized breathwork exercises</li>
            <li>Techniques for maintaining energy balance in daily life</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Relief from stress and tension</li>
            <li>Increased vitality and well-being</li>
            <li>Enhanced mental clarity and focus</li>
            <li>Improved emotional balance</li>
            <li>Deeper connection to your inner self</li>
          </ul>

          <div className="bg-white rounded-lg p-6 shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Restore Your Energy Balance?</h3>
            <p className="mb-4">Experience the transformative power of energy work and rediscover your inner harmony.</p>
            <Link 
              href="/book" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Schedule Your Session
            </Link>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  )
}

