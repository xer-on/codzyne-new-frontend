"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

type Member = {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  email?: string;
  avatarUrl?: string;
};

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/members", { cache: "no-store" });
        const data = await res.json();
        if (!res.ok || !data?.success) throw new Error();
        setMembers(data.data as Member[]);
      } catch {
        toast.error("Failed to load members");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Team Members</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals who make Codezyne a leading technology company
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow animate-pulse h-64" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {members.map((m) => (
              <div key={m._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 h-48 flex items-center justify-center">
                  {m.avatarUrl ? (
                    <Image
                      src={m.avatarUrl}
                      alt={m.name}
                      className="rounded-full w-24 h-24 object-cover border-4 border-white"
                      width={96}
                      height={96}
                    />
                  ) : (
                    <div className="text-6xl text-white">👤</div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{m.role}</p>
                  {m.bio && <p className="text-gray-600 line-clamp-4">{m.bio}</p>}
                </div>
              </div>
            ))}
            {members.length === 0 && (
              <div className="col-span-full text-center text-gray-600">No members yet. Add some in the admin dashboard.</div>
            )}
          </div>
        )}

        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-6">We&apos;re always looking for talented individuals to join our growing team</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;
