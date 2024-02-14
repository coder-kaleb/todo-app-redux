"use client";
import Button from "@/components/Button";
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
      await signInWithPopup(auth, provider);
      router.replace("/todo");
      dispatch(login());
    } catch (error) {
      alert(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      {isSignedIn ? router.push("/todo") : ""}
      <main className=" mx-auto min-h-screen max-w-screen-2xl pt-6 text-center">
        <div className="mx-auto max-w-96">
          <Button
            handleClick={handleSignIn}
            pending={pending}
            label="Sign In"
            type="button"
            style="btn-neutral"
          />
        </div>
      </main>
    </>
  );
}
