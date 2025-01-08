import Image from "next/image";
import {
  SignUpButton,
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
          <button className=" text-white bg-blue-500  py-3 px-6 text-bold rounded-md">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>

      <UserButton></UserButton>

      <SignedIn>
        <SignOutButton>
          <button className=" text-white bg-red-500 px-6 py-3 text-bold rounded-md">
            Sign out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
