import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex max-w-7xl mx-auto">
        <aside className="w-64 bg-white border-r p-4 hidden md:block">
          <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
          <nav className="space-y-2">
            <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">Overview</Link>
            <Link href="/dashboard/add-member" className="block px-3 py-2 rounded hover:bg-gray-100">Add Member</Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}


