import { MessageCircle, PenTool, CalendarDays, Zap, Palette, Feather, Leaf } from 'lucide-react'
import { AnimationWrapper } from './AnimationWrapper'
import Link from 'next/link'

const services = [
  {
    name: 'Talk Therapy Coaching',
    description: 'Rediscover yourself through meaningful conversations. Address emotional challenges, set clear goals, and create actionable strategies to achieve them.',
    icon: MessageCircle,
    focus: 'Self-esteem, stress management, conflict resolution, and emotional clarity.',
    color: 'bg-pink-100 hover:bg-pink-200',
    iconColor: 'text-pink-600',
    href: '/services/talk-therapy'
  },
  {
    name: 'Emotional Freedom Technique (EFT)',
    description: 'Release emotional blocks with tapping. A powerful combination of acupressure and modern psychology to help release negative emotions and stress.',
    icon: Zap,
    benefits: 'Quick and lasting emotional relief, enhanced mental clarity, and a sense of calm and empowerment.',
    color: 'bg-yellow-100 hover:bg-yellow-200',
    iconColor: 'text-yellow-600',
    href: '/services/eft'
  },
  {
    name: 'Graphology Coaching',
    description: 'Decode your personality through handwriting. Understand your inner world by analyzing your handwriting formations and style.',
    icon: PenTool,
    services: 'Identifying strengths, recognizing patterns, and making intentional changes for growth by identifying opportunities.',
    color: 'bg-green-100 hover:bg-green-200',
    iconColor: 'text-green-600',
    href: '/services/graphology'
  },
  {
    name: 'Numerology Coaching',
    description: 'Find direction in your life through numbers in your date of birth. Leverage the ancient power of numerology to uncover insights into your personality, life path, and future opportunities.',
    icon: CalendarDays,
    services: 'Name and birthdate analysis, life purpose guidance, and strategies for alignment.',
    color: 'bg-blue-100 hover:bg-blue-200',
    iconColor: 'text-blue-600',
    href: '/services/numerology'
  },
  {
    name: 'Color Therapy',
    description: 'Heal through the energy of colors. Use vibrational energy of colors to restore balance and harmony.',
    icon: Palette,
    focus: 'Improving mood, reducing stress, enhancing creativity, balance in daily life, healthy perception development and more.',
    color: 'bg-purple-100 hover:bg-purple-200',
    iconColor: 'text-purple-600',
    href: '/services/color-therapy'
  },
  {
    name: 'Energy Work',
    description: 'Rebalance your energy for inner peace. Techniques used: Chakra balancing, aura cleansing, and breathwork.',
    icon: Feather,
    benefits: 'Relief from stress, heightened awareness, and renewed vitality.',
    color: 'bg-indigo-100 hover:bg-indigo-200',
    iconColor: 'text-indigo-600',
    href: '/services/energy-work'
  },
  {
    name: 'Herbal Guidance and Ayurvedic Coaching',
    description: 'Harness nature\'s wisdom for optimal wellness. Tailored to your unique dosha, Ayurveda offers a holistic approach to health.',
    icon: Leaf,
    services: 'Herbal remedies, dosha-based lifestyle recommendations, and meditation practices.',
    benefits: 'A natural approach to well-being, enhanced energy, and mind-body balance.',
    color: 'bg-teal-100 hover:bg-teal-200',
    iconColor: 'text-teal-600',
    href: '/services/ayurveda'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Our Services</h2>
        </AnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimationWrapper key={service.name} className="h-full">
              <div className={`rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ${service.color} h-full flex flex-col`}>
                <service.icon className={`w-12 h-12 ${service.iconColor} mb-4 float-animation`} />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                {service.focus && <p className="text-sm text-gray-600 mb-4"><strong>Focus:</strong> {service.focus}</p>}
                {service.benefits && <p className="text-sm text-gray-600 mb-4"><strong>Benefits:</strong> {service.benefits}</p>}
                {service.services && <p className="text-sm text-gray-600 mb-4"><strong>Services:</strong> {service.services}</p>}
                <div className="mt-auto flex gap-2">
                  <Link 
                    href={service.href} 
                    className="flex-1 text-center bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold hover:bg-indigo-50 transition duration-300"
                  >
                    Learn More
                  </Link>
                  <a 
                    href="#contact" 
                    className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

