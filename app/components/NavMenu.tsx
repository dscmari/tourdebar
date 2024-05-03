"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex justify-between items-center">
        <p className="">{session?.user?.name}</p>
        <button onClick={() => signOut()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-between items-center">
        <p className="">Not signed in</p>
        <button onClick={() => signIn()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Sign in
        </button>
    </div>
  );
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton />
        </div>
    )
}