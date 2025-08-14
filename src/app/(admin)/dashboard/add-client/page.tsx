"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

type CreateClientFormState = {
  companyName: string
  industry: string
  contactPerson: string
  email: string
  phone: string
  website: string
  address: string
  description: string
  clientType: string
  logoUrl: string
}

export default function AddClientPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState<CreateClientFormState>({
    companyName: "",
    industry: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    description: "",
    clientType: "",
    logoUrl: "",
  })

  const updateField = (field: keyof CreateClientFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data?.success) {
        throw new Error("Failed to create client")
      }
      toast.success("Client created successfully")
      setForm({
        companyName: "",
        industry: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        description: "",
        clientType: "",
        logoUrl: "",
      })
    } catch (error) {
      toast.error("Error creating client")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=" mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Add New Client</h1>
        <p className="text-gray-600 mt-2">Create a new company client profile</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Company Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Company Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={form.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  placeholder="Acme Corporation"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  value={form.industry}
                  onChange={(e) => updateField("industry", e.target.value)}
                  placeholder="Technology, Healthcare, Finance..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="clientType">Client Type</Label>
                <Select value={form.clientType} onValueChange={(value:any) => updateField("clientType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select client type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="small-business">Small Business</SelectItem>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="non-profit">Non-Profit</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={form.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  placeholder="https://www.company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="logoUrl">Company Logo URL</Label>
              <Input
                id="logoUrl"
                type="url"
                value={form.logoUrl}
                onChange={(e) => updateField("logoUrl", e.target.value)}
                placeholder="https://www.company.com/logo.png"
              />
              {form.logoUrl && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Logo Preview:</p>
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    <img
                      src={form.logoUrl}
                      alt="Company logo preview"
                      className="max-w-full max-h-full object-contain rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML =
                            '<span class="text-xs text-gray-500 text-center px-2">Invalid image URL</span>'
                        }
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Primary Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={form.contactPerson}
                  onChange={(e) => updateField("contactPerson", e.target.value)}
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="contact@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={form.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  placeholder="123 Business St, City, State 12345"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Additional Information</h2>

            <div className="space-y-2">
              <Label htmlFor="description">Company Description</Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="Brief description of the company, their services, and any relevant notes..."
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setForm({
                  companyName: "",
                  industry: "",
                  contactPerson: "",
                  email: "",
                  phone: "",
                  website: "",
                  address: "",
                  description: "",
                  clientType: "",
                  logoUrl: "",
                })
              }
            >
              Clear Form
            </Button>
            <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
              {isSubmitting ? "Creating..." : "Create Client"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
