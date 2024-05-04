"use client";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="nav-menu flex justify-between items-center">
        <p className="m-6">{session?.user?.name}</p>
        <button onClick={() => signOut()} className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="nav-menu flex justify-between items-center">
        <p className="m-6">Not signed in</p>
        <button onClick={() => signIn()} className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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