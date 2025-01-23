import { Zap } from 'lucide-react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import Link from 'next/link'

export default function EFTPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Emotional Freedom Technique (EFT)</h1>
        <div className="flex justify-center mb-8">
          <Zap className="w-16 h-16 text-yellow-600" />
        </div>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl mb-6">
            Release emotional blocks with tapping. EFT combines acupressure and modern psychology to help release negative emotions and stress, providing quick and lasting emotional relief.
          </p>

          {/* Add similar sections as talk-therapy page */}
        </div>
      </AnimationWrapper>
    </div>
  )
}

