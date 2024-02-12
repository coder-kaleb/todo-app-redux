"use client";
import { auth, provider } from "@/config/firebase";
import { login } from "@/lib/features/auth/authSlice";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
const Button = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        // TODO: Add user to the store
        dispatch(login());
        router.push("/todo");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      {}
      <button className="btn btn-neutral text-xl" onClick={handleSignIn}>
        Sign In
      </button>
    </>
  );
};

export default Button;
