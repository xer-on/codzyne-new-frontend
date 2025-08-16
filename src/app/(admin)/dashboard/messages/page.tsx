"use client"

import { ContactMessagesFilters } from "@/components/contact/contact-messages-filters"
import { ContactMessagesHeader } from "@/components/contact/contact-messages-header"
import { ContactMessagesList } from "@/components/contact/contact-messages-list"
import { useState, useEffect } from "react"

export type ContactMessage = {
  id: string
  fullname: string
  phone: string
  message: string
  website: string
  date: string
  status: "new" | "read" | "replied" | "archived"
  priority: "low" | "medium" | "high"
}

export type MessageStats = {
  total: number
  unread: number
  replied: number
  archived: number
}

export type Filters = {
  search: string
  status: string
  website: string
  sortBy: string
  page: number
}

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [stats, setStats] = useState<MessageStats>({ total: 0, unread: 0, replied: 0, archived: 0 })
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<Filters>({
    search: "",
    status: "all",
    website: "all",
    sortBy: "newest",
    page: 1,
  })
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  })

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/contact-messages`)
      const data = await response.json()

      console.log('data at 58', data);
      setMessages(data.data)

    } catch (error) {
      console.error("Failed to fetch messages:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [filters])

  const updateMessage = async (id: string, updates: Partial<ContactMessage>) => {
    try {
      const response = await fetch(`/api/contact-messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        await fetchMessages() // Refresh the list
      }
    } catch (error) {
      console.error("Failed to update message:", error)
    }
  }

  const deleteMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/contact-messages/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await fetchMessages() // Refresh the list
      }
    } catch (error) {
      console.error("Failed to delete message:", error)
    }
  }

  return (
      <div className="flex-1">
        <ContactMessagesHeader filters={filters} setFilters={setFilters} />
        <div className="p-6">
          <ContactMessagesFilters total={messages.length} filters={filters} setFilters={setFilters} stats={stats} />
          <ContactMessagesList
            messages={messages}
            loading={loading}
            pagination={pagination}
            filters={filters}
            setFilters={setFilters}
            onUpdateMessage={updateMessage}
            onDeleteMessage={deleteMessage}
          />
        </div>
      </div>
  )
}
