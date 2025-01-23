import { MessageCircle } from 'lucide-react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import Link from 'next/link'

export default function TalkTherapyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Talk Therapy Coaching</h1>
        <div className="flex justify-center mb-8">
          <MessageCircle className="w-16 h-16 text-indigo-600" />
        </div>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl mb-6">
            Rediscover yourself through meaningful conversations. Our talk therapy sessions provide a safe space for you to address emotional challenges, set clear goals, and create actionable strategies to achieve them.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Personalized one-on-one sessions</li>
            <li>Goal-oriented approach</li>
            <li>Safe and confidential environment</li>
            <li>Professional guidance and support</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Focus Areas</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Self-esteem building</li>
            <li>Stress management</li>
            <li>Conflict resolution</li>
            <li>Emotional clarity</li>
            <li>Personal growth</li>
          </ul>

          <div className="bg-white rounded-lg p-6 shadow-md mt-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Begin Your Journey?</h3>
            <p className="mb-4">Take the first step towards emotional wellness and personal growth.</p>
            <Link 
              href="/#contact" 
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

