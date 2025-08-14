import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><Link className="text-blue-600 hover:underline" href="/dashboard/add-member">Add Member</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="/dashboard/add-client">Add Client</Link></li>

          </ul>
        </div>
      </div>
    </div>
  );
}

