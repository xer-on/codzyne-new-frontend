"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Phone, User, MessageSquareText } from "lucide-react"

type FormInput = {
  name: string
  phone: string
  message: string
}

export default function ContactForm() {
//   const { toast } = useToast()
  const [submitting, setSubmitting] = React.useState(false)
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormInput, string>>>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})

    const payload = { fullname: name.trim(), phone: phone.trim(), message: message.trim() }



    setSubmitting(true);

    try {
      const res: Response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log('res', res);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error ?? "Failed to submit.")
      }

      // Reset fields
      setName("")
      setPhone("")
      setMessage("")
    } catch (err: unknown) {
      console.log(err)

    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">{"Your name"}</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            id="name"
            placeholder="Alex Johnson"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            className="pl-10"
            required
          />
        </div>
        {errors.name ? <p className="text-sm text-red-600">{errors.name}</p> : null}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">{"Phone number"}</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="+1 (555) 123-4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={!!errors.phone}
            className="pl-10"
            required
          />
        </div>
        {errors.phone ? <p className="text-sm text-red-600">{errors.phone}</p> : null}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="message" className="inline-flex items-center gap-2">
            <MessageSquareText className="h-4 w-4 text-emerald-700" />
            {"Your message"}
          </Label>
          <span className="text-xs text-muted-foreground">{`${message.length}/1000`}</span>
        </div>
        <Textarea
          id="message"
          placeholder="How can we help?"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          maxLength={1000}
          required
        />
        {errors.message ? <p className="text-sm text-red-600">{errors.message}</p> : null}
      </div>

      <div className="flex items-center justify-end">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              {"Sending..."}
            </span>
          ) : (
            "Send"
          )}
        </Button>
      </div>
    </form>
  )
}
