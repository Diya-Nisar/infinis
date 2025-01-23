'use client'

import { AnimationWrapper } from './AnimationWrapper'
import { useInView } from 'react-intersection-observer'

const pricingOptions = [
  {
    title: 'Single Session',
    price: '$X',
    color: 'bg-pink-100',
    hoverColor: 'hover:bg-pink-200',
    buttonColor: 'bg-pink-600',
    buttonHoverColor: 'hover:bg-pink-700',
    features: [
      'One-on-one coaching',
      'Personalized approach',
      'Follow-up resources',
    ],
  },
  {
    title: '6-Session Package',
    price: '$X',
    color: 'bg-purple-100',
    hoverColor: 'hover:bg-purple-200',
    buttonColor: 'bg-purple-600',
    buttonHoverColor: 'hover:bg-purple-700',
    features: [
      'Six one-on-one sessions',
      'Comprehensive action plan',
      'Email support between sessions',
      'Personalized resources',
    ],
  },
  {
    title: '12-Session Package',
    price: '$X',
    color: 'bg-indigo-100',
    hoverColor: 'hover:bg-indigo-200',
    buttonColor: 'bg-indigo-600',
    buttonHoverColor: 'hover:bg-indigo-700',
    features: [
      'Twelve one-on-one sessions',
      'In-depth transformation plan',
      'Priority email and phone support',
      'Customized resources and exercises',
      'Quarterly progress review',
    ],
  },
]

export function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-100" ref={ref}>
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Pricing Options</h2>
        </AnimationWrapper>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {pricingOptions.map((option, index) => (
            <AnimationWrapper 
              key={option.title} 
              className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`${option.color} rounded-lg p-8 shadow-md ${option.hoverColor} transition duration-300 flex flex-col h-full`}>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-800">{option.title}</h3>
                <p className="text-4xl font-bold mb-6 text-indigo-600">{option.price}</p>
                <ul className="mb-8 flex-grow">
                  {option.features.map((feature, index) => (
                    <li key={index} className="mb-2 text-gray-700">✓ {feature}</li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`${option.buttonColor} text-white px-6 py-3 rounded-full font-semibold ${option.buttonHoverColor} transition duration-300 text-center`}
                >
                  Book Now
                </a>
              </div>
            </AnimationWrapper>
          ))}
        </div>
        <AnimationWrapper>
          <p className="text-center mt-8 text-gray-600">Custom packages available upon request.</p>
        </AnimationWrapper>
      </div>
    </section>
  )
}

