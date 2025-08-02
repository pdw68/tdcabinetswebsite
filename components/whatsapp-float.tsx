"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi, I would like to inquire about your cabinet services.", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  )
}
