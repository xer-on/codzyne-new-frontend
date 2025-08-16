"use client"

import { Filters } from "@/app/(admin)/dashboard/messages/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter } from "lucide-react"

interface ContactMessagesHeaderProps {
  filters: Filters
  setFilters: (filters: Filters) => void
}

export function ContactMessagesHeader({ filters, setFilters }: ContactMessagesHeaderProps) {
  const handleSearch = (value: string) => {
    setFilters({ ...filters, search: value, page: 1 })
  }

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600 mt-1">Manage all contact form submissions from your websites</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search messages..."
              className="pl-10 w-80"
              value={filters.search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {/* <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button> */}
        </div>
      </div>
    </div>
  )
}
