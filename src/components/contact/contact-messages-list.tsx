"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Mail, MailOpen, Reply, Archive, Trash2, MoreHorizontal, Clock, Globe, Loader2, Phone } from "lucide-react"

import { ContactMessage, Filters } from "@/app/(admin)/dashboard/messages/page"

interface ContactMessagesListProps {
  messages: ContactMessage[]
  loading: boolean
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  filters: Filters
  setFilters: (filters: Filters) => void
  onUpdateMessage: (id: string, updates: Partial<ContactMessage>) => void
  onDeleteMessage: (id: string) => void
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return "Just now"
  if (diffInHours < 24) return `${diffInHours}h ago`
  if (diffInHours < 48) return "Yesterday"
  return date.toLocaleDateString()
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "urgent":
      return "bg-red-100 text-red-800"
    case "high":
      return "bg-orange-100 text-orange-800"
    case "medium":
      return "bg-yellow-100 text-yellow-800"
    case "low":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "new":
      return <Mail className="w-4 h-4 text-blue-600" />
    case "read":
      return <MailOpen className="w-4 h-4 text-gray-600" />
    case "replied":
      return <Reply className="w-4 h-4 text-green-600" />
    default:
      return <Mail className="w-4 h-4 text-gray-600" />
  }
}

export function ContactMessagesList({
  messages,
  loading,
  pagination,
  filters,
  setFilters,
  onUpdateMessage,
  onDeleteMessage,
}: ContactMessagesListProps) {
  const handleReply = (message: ContactMessage) => {
    onUpdateMessage(message.id, { status: "replied" })
    window.location.href = `tel:${message.phone}`
  }

  const handleMarkAsRead = (message: ContactMessage) => {
    const newStatus = message.status === "new" ? "read" : "new"
    onUpdateMessage(message.id, { status: newStatus })
  }

  const handleArchive = (message: ContactMessage) => {
    onUpdateMessage(message.id, { status: "archived" })
  }

  const handleDelete = (message: ContactMessage) => {
    if (confirm("Are you sure you want to delete this message?")) {
      onDeleteMessage(message.id)
    }
  }

  const handlePageChange = (newPage: number) => {
    setFilters({ ...filters, page: newPage })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        <span className="ml-2 text-gray-600">Loading messages...</span>
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-12">
        <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No messages found</h3>
        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card
          key={message.id}
          className={`p-6 hover:shadow-md transition-shadow ${message.status === "new" ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {message.fullname
                    ? message.fullname
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : "?"}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{message.fullname}</h3>
                  <Badge variant="outline" className={getPriorityColor(message.priority)}>
                    {message.priority}
                  </Badge>
                  {getStatusIcon(message.status)}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{message.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>{message.website}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(message.date)}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3">{message.message}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <Button variant="outline" size="sm" onClick={() => handleReply(message)}>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleMarkAsRead(message)}>
                    <MailOpen className="w-4 h-4 mr-2" />
                    {message.status === "new" ? "Mark as Read" : "Mark as New"}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleArchive(message)}>
                    <Archive className="w-4 h-4 mr-2" />
                    Archive
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(message)}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Card>
      ))}

      <div className="flex items-center justify-between pt-6">
        <p className="text-sm text-gray-600">
          Showing {(pagination.page - 1) * pagination.limit + 1}-
          {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} messages
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={pagination.page <= 1}
            onClick={() => handlePageChange(pagination.page - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={pagination.page >= pagination.totalPages}
            onClick={() => handlePageChange(pagination.page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
