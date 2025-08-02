"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface ConsultationFormProps {
  onSuccess?: () => void
}

export function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Consultation Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    })

    setIsSubmitting(false)
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" required className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" name="address" className="mt-1" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" name="date" type="date" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="time">Preferred Time</Label>
          <Input id="time" name="time" type="time" className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your project..." className="mt-1" rows={4} />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-800 hover:bg-amber-900 text-white">
        {isSubmitting ? "Submitting..." : "Request Free Consultation"}
      </Button>
    </form>
  )
}
