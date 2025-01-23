import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

