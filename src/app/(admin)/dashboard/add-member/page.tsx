"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type CreateMemberFormState = {
  name: string;
  role: string;
  bio: string;
  userId: string;
  email: string;
  avatarUrl: string;
};

export default function AddMemberPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<CreateMemberFormState>({
    name: "",
    role: "",
    bio: "",
    userId: "",
    email: "",
    avatarUrl: "",
  });

  const updateField = (field: keyof CreateMemberFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('form', form);
    try {
      const res = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error("Failed to create member");
      }
      toast.success("Member created");
      setForm({ name: "", role: "", bio: "", email: "", avatarUrl: "", userId :""});
    } catch (error) {
      console.error(error);
      toast.error("Error creating member");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add New Member</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={form.role} onChange={(e) => updateField("role", e.target.value)} placeholder="Frontend Developer" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jane@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avatarUrl">Avatar URL (optional)</Label>
            <Input id="avatarUrl" value={form.avatarUrl} onChange={(e) => updateField("avatarUrl", e.target.value)} placeholder="https://..." />
          </div>

           <div className="space-y-2">
            <Label htmlFor="avatarUrl">User ID</Label>
            <Input id="userId" value={form.userId} onChange={(e) => updateField("userId", e.target.value)} placeholder={"J002"} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" value={form.bio} onChange={(e) => updateField("bio", e.target.value)} placeholder="Write a short bio" />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Member"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}


