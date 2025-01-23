import { CalendarDays } from 'lucide-react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import Link from 'next/link'

export default function NumerologyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Numerology Coaching</h1>
        <div className="flex justify-center mb-8">
          <CalendarDays className="w-16 h-16 text-blue-600" />
        </div>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl mb-6">
            Find direction in your life through numbers in your date of birth. Leverage the ancient power of numerology to uncover insights into your personality, life path, and future opportunities.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Comprehensive analysis of your birth date and name</li>
            <li>Insights into your life path number</li>
            <li>Exploration of your personal year cycles</li>
            <li>Guidance on aligning your life with your numerological profile</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Greater understanding of your life purpose</li>
            <li>Insights into your strengths and challenges</li>
            <li>Guidance for making important life decisions</li>
            <li>Enhanced self-awareness and personal growth</li>
          </ul>

          <div className="bg-white rounded-lg p-6 shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Discover Your Life Path?</h3>
            <p className="mb-4">Uncover the hidden meanings in your numbers and align your life with your true purpose.</p>
            <Link 
              href="/book" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Schedule Your Session
            </Link>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  )
}

