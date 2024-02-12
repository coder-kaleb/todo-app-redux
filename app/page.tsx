"use client";
import Button from "@/components/Button";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);

  return (
    <>
      {isSignedIn ? router.push("/todo") : ""}
      <main className=" min-h-screen max-w-screen-2xl mx-auto mt-6">
        <div className="mx-auto max-w-36">
          <Button />
        </div>
      </main>
    </>
  );
}
