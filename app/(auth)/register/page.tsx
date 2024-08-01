import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";
import Footer from '@/components/Footer';

import '@styles/styles.css';
import '@styles/login.css';
import '@styles/search.css';

export default function Register({ searchParams }: { searchParams: { message: string } }) {

  const signUp = async (formData: FormData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('Registration Error:', error.message);
      return redirect(`/register?message=${encodeURIComponent(error.message)}`);
    }

    return redirect("/login?message=Check email to continue sign-in process");
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1 className="heading-large">Register</h1>

        {/* Mockup Image */}
        <div className="mockup-1">
          <img src="mockup-2.png" alt="Mockup Image" />
        </div>

        {/* Registration form */}
        <form className="login-form">
          <div className="margin-bottom-20">
            <label htmlFor="email" className="existing-email-label">Email</label>
            <div className="search-container box-drop-shadow-03 rounded-corners-100">
              <div className="full-width-search">
                <div className="search-left">
                  <input name="email" className="" placeholder="you@example.com" required />
                </div>
                <div className="search-right"></div>
              </div>
            </div>
          </div>

          <div className="margin-bottom-30">
            <label htmlFor="password" className="existing-password-label">Password</label>
            <div className="search-container box-drop-shadow-03 rounded-corners-100">
              <div className="full-width-search">
                <div className="search-left">
                  <input type="password" name="password" className="" placeholder="••••••••" required />
                </div>
                <div className="search-right"></div>
              </div>
            </div>
          </div>

          <div className="button-container margin-top-40">
            <SubmitButton formAction={signUp} pendingText="Signing Up..."
              className="button pink-button button-large button-min-large button-text-white text-thick glow-effect">
              Register
            </SubmitButton>
            <Link href="/login" className="button grey-button button-large">
              Sign In
            </Link>
          </div>

          {searchParams?.message && (<p className="message margin-top-20"> {searchParams.message} </p>)}
        </form>

        <div className="container-bottom-xl"></div>
        <Footer activePage="profile" />
      </div>
    </div>
  );
}
