"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function FeedbackForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Thank you for your feedback!",
      description: "Your review has been submitted and will appear on our website soon.",
    })

    setIsSubmitting(false)
    // Reset form
    setRating(0)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="feedback-name">Your Name *</Label>
          <Input id="feedback-name" name="name" required className="mt-1" />
        </div>

        <div>
          <Label className="block mb-2">Rating *</Label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-1 transition-colors"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
          <input type="hidden" name="rating" value={rating} required />
        </div>

        <div>
          <Label htmlFor="feedback-comments">Your Comments *</Label>
          <Textarea
            id="feedback-comments"
            name="comments"
            placeholder="Tell us about your experience with TD Cabinets..."
            className="mt-1"
            rows={5}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || rating === 0}
          className="w-full bg-amber-800 hover:bg-amber-900 text-white"
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </div>
  )
}
