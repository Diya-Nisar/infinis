'use client'

import { PhoneCall, ClipboardList, UserCheck } from 'lucide-react'
import { AnimationWrapper } from './AnimationWrapper'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    title: 'Free Discovery Call',
    description: 'Share your goals and challenges',
    icon: PhoneCall,
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Tailored Plan',
    description: 'A customized blend of techniques to suit your needs',
    icon: ClipboardList,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous guidance to help you achieve lasting transformation',
    icon: UserCheck,
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
]

export function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-purple-100 to-indigo-50" ref={ref}>
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">How It Works</h2>
        </AnimationWrapper>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((step, index) => (
            <AnimationWrapper key={step.title} className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className={`${step.color} rounded-full p-4 mb-4`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{index + 1}. {step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

