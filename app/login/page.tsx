import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  // Sign in function
  const signIn = async (formData: FormData) => {
    "use server";

    // Get the email and password from the form
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    // Sign in with the email and password
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // If there is an error, redirect to the login page with a message
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    // Else, redirect to the protected page
    return redirect("/protected");
  };


  // Sign up function
  const signUp = async (formData: FormData) => {
    "use server";

    // Get the origin, email and password from the form
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    // Sign up with the email and password
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    // If there is an error, redirect to the login page with a message
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    // Else, redirect to the login page with a message
    return redirect("/login?message=Check email to continue sign in process");
  };


  // Return the login form
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">

      {/* This is the back button */}
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      {/* Login and register form */}
      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">

        {/* Email */}
        <label className="text-md" htmlFor="email">Email</label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required />

        {/* Password */}
        <label className="text-md" htmlFor="password"> Password </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required />

        {/* Sign in button */}
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."> Sign In </SubmitButton>

        {/* Sign up button */}
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..." > Sign Up </SubmitButton>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>)}

      </form>
    </div>
  );
}
