"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import Image from "next/image"

type CreateProductFormState = {
  title: string
  imageUrl: string
}

export default function AddProductPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState<CreateProductFormState>({
    title: "",
    imageUrl: ""
  })

  const updateField = (field: keyof CreateProductFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data?.success) {
        throw new Error("Failed to create product")
      }
      toast.success("Product created successfully")
      setForm({
        title: "",
        imageUrl: "",
      })
    } catch (error) {
      toast.error("Error creating product", {
        description: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">Add New Product</h1>
        <p className="text-gray-600">Create a new product entry</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Product Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Product Title *</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Awesome Product"
              required
            />
          </div>

          {/* Product Image */}
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Product Image URL *</Label>
            <Input
              id="imageUrl"
              type="url"
              value={form.imageUrl}
              onChange={(e) => updateField("imageUrl", e.target.value)}
              placeholder="https://example.com/product.png"
              required
            />
            {form.imageUrl && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  <Image
                    src={form.imageUrl}
                    alt="Product preview"
                    width={128}
                    height={128}
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

  

          {/* Submit */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setForm({ title: "", imageUrl: "" })}
            >
              Clear Form
            </Button>
            <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
              {isSubmitting ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
