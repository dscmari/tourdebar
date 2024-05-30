"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="nav-menu flex justify-between items-center">
        <p className="m-6"><Link href={`/`}>{session?.user?.name}</Link></p>
        <button onClick={() => signOut()} className="standard-btn">
            Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="nav-menu flex justify-between items-center">
        <p className="m-6">Not signed in</p>
        <button onClick={() => signIn()} className="standard-btn">
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