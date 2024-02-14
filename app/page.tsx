"use client";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "@/config/firebase";
import { login } from "@/lib/features/auth/authSlice";
import { signInWithPopup } from "firebase/auth";

export default function Home() {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);
  useEffect(() => {
    if (isSignedIn) router.replace("/todo");
  }, [router, isSignedIn]);

  // sign in function
  const handleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      // dispatch(login());
    } catch (error) {
      alert(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <main className=" mx-auto min-h-screen max-w-screen-2xl pt-6 text-center">
      <div className="mx-auto max-w-96">
        <button className={`btn btn-neutral text-lg`} onClick={handleSignIn}>
          Sign In
          {pending ? <span className="loading loading-spinner"></span> : ""}
        </button>
      </div>
    </main>
  );
}
