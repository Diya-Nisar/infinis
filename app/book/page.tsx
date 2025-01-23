'use client'

import { useState } from 'react'
import { AnimationWrapper } from '@/app/components/AnimationWrapper'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const services = [
  { value: 'talk-therapy', label: 'Talk Therapy Coaching' },
  { value: 'eft', label: 'Emotional Freedom Technique (EFT)' },
  { value: 'graphology', label: 'Graphology Coaching' },
  { value: 'numerology', label: 'Numerology Coaching' },
  { value: 'color-therapy', label: 'Color Therapy' },
  { value: 'energy-work', label: 'Energy Work' },
  { value: 'ayurveda', label: 'Herbal Guidance and Ayurvedic Coaching' },
]

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [service, setService] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleBooking = () => {
    // Here you would typically handle the booking process
    // For now, we'll just log the details
    console.log('Booking:', { date, service, name, email, phone })
    alert('Booking submitted successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <AnimationWrapper>
        <Link href="/" className="text-indigo-600 hover:text-indigo-800 mb-8 inline-block">
          ← Back to Home
        </Link>
      </AnimationWrapper>
      
      <AnimationWrapper className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Book Your Session</h1>
      </AnimationWrapper>

      <AnimationWrapper className="max-w-md mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <Input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <Input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select a Service</label>
            <Select onValueChange={setService}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select a Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          <Button onClick={handleBooking} className="w-full">
            Book Appointment
          </Button>
        </div>
      </AnimationWrapper>
    </div>
  )
}

