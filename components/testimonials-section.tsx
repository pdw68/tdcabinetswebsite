"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock testimonials - in a real app, these would come from your feedback system
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "TD Cabinets transformed our kitchen beyond our expectations. The quality is outstanding and the team was professional throughout the entire process.",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment:
      "Excellent craftsmanship and attention to detail. Our custom cabinets are beautiful and functional. Highly recommend TD Cabinets!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    comment:
      "From design to installation, everything was perfect. The team listened to our needs and delivered exactly what we wanted.",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 4,
    comment:
      "Great service and quality work. The installation was completed on time and the results speak for themselves.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-stone-800">What Our Clients Have to Say</h2>
          <p className="text-lg text-stone-600">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-lg p-8 min-h-[200px] flex items-center">
            <div className="w-full text-center">
              <div className="flex justify-center mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
              <blockquote className="text-lg text-stone-700 mb-6 italic">
                "{testimonials[currentIndex].comment}"
              </blockquote>
              <cite className="text-amber-800 font-semibold">- {testimonials[currentIndex].name}</cite>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-800" : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
