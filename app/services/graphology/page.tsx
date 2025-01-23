import { PenTool } from 'lucide-react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import Link from 'next/link'

export default function GraphologyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Graphology Coaching</h1>
        <div className="flex justify-center mb-8">
          <PenTool className="w-16 h-16 text-green-600" />
        </div>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl mb-6">
            Decode your personality through handwriting. Understand your inner world by analyzing your handwriting formations and style.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>In-depth analysis of your handwriting</li>
            <li>Insights into your personality traits</li>
            <li>Identification of strengths and areas for growth</li>
            <li>Personalized strategies for self-improvement</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Increased self-awareness</li>
            <li>Better understanding of your communication style</li>
            <li>Insights into your decision-making processes</li>
            <li>Identification of potential career paths</li>
          </ul>

          <div className="bg-white rounded-lg p-6 shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Unlock Your Personality?</h3>
            <p className="mb-4">Discover the hidden insights in your handwriting and embark on a journey of self-discovery.</p>
            <Link 
              href="/book" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
            >
              Schedule Your Session
            </Link>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  )
}

