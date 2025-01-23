import { Leaf } from 'lucide-react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import Link from 'next/link'

export default function AyurvedaPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Herbal Guidance and Ayurvedic Coaching</h1>
        <div className="flex justify-center mb-8">
          <Leaf className="w-16 h-16 text-teal-600" />
        </div>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl mb-6">
            Harness nature's wisdom for optimal wellness. Our Ayurvedic approach offers a holistic path to health, tailored to your unique dosha (body type) and individual needs.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Comprehensive Ayurvedic consultation and dosha assessment</li>
            <li>Personalized herbal recommendations</li>
            <li>Customized diet and lifestyle guidance</li>
            <li>Introduction to Ayurvedic self-care practices</li>
            <li>Ongoing support for implementing Ayurvedic principles</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Improved digestion and metabolism</li>
            <li>Enhanced energy and vitality</li>
            <li>Better sleep and stress management</li>
            <li>Natural approach to managing health concerns</li>
            <li>Deeper connection to your body's innate wisdom</li>
          </ul>

          <div className="bg-white rounded-lg p-6 shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Embrace Ayurvedic Wisdom?</h3>
            <p className="mb-4">Discover the ancient art of Ayurveda and embark on a journey to holistic well-being.</p>
            <Link 
              href="/book" 
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition duration-300"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  )
}

