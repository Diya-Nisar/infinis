import { Palette } from 'lucide-react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import Link from 'next/link'

export default function ColorTherapyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Color Therapy</h1>
        <div className="flex justify-center mb-8">
          <Palette className="w-16 h-16 text-purple-600" />
        </div>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl mb-6">
            Heal through the energy of colors. Use vibrational energy of colors to restore balance and harmony in your life.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Assessment of your color energy balance</li>
            <li>Customized color therapy sessions</li>
            <li>Guidance on incorporating healing colors into your daily life</li>
            <li>Techniques for color meditation and visualization</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Improved mood and emotional well-being</li>
            <li>Reduced stress and anxiety</li>
            <li>Enhanced creativity and self-expression</li>
            <li>Better balance in daily life</li>
            <li>Promotion of physical and mental healing</li>
          </ul>

          <div className="bg-white rounded-lg p-6 shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Experience the Power of Colors?</h3>
            <p className="mb-4">Discover how color therapy can transform your life and bring balance to your mind, body, and spirit.</p>
            <Link 
              href="/book" 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
            >
              Schedule Your Session
            </Link>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  )
}

