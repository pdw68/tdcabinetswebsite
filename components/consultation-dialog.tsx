"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ConsultationForm } from "@/components/consultation-form"

interface ConsultationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConsultationDialog({ open, onOpenChange }: ConsultationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-stone-800">Get Your Free Consultation</DialogTitle>
        </DialogHeader>
        <ConsultationForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  )
}
