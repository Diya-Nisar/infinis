"use client"

import { useState } from "react"
import { DatePicker } from "./Calendar"
import { AnimationWrapper } from "./AnimationWrapper"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: new Date(),
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData((prev) => ({ ...prev, date }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Your inquiry has been submitted successfully!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: new Date(),
          message: "",
        })
      } else {
        throw new Error("Failed to submit inquiry")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting your inquiry. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-100 to-indigo-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Contact Us</h2>
        </AnimationWrapper>
        <AnimationWrapper>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-center mb-8 text-gray-700">
                Ready to align your life with clarity and purpose? Book your free discovery call today and begin your
                transformation journey!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="talk-therapy">Talk Therapy Coaching</option>
                    <option value="eft">Emotional Freedom Technique (EFT)</option>
                    <option value="graphology">Graphology Coaching</option>
                    <option value="numerology">Numerology Coaching</option>
                    <option value="color-therapy">Color Therapy</option>
                    <option value="energy-work">Energy Work</option>
                    <option value="ayurvedic">Herbal Guidance and Ayurvedic Coaching</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <DatePicker selected={formData.date} onChange={handleDateChange} />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-indigo-600 hover:to-purple-700 transition duration-300"
                >
                  Book Free Discovery Call
                </button>
              </form>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}

