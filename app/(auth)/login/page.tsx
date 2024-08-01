import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";
import Footer from '@/components/Footer';

import '@styles/styles.css';
import '@styles/login.css';
import '@styles/search.css';

export default function Login({ searchParams }: { searchParams: { message: string } }) {

  const signIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/profile");
  };

  return (
    <div className="container">
      <div className="inner-container">

        <h1 className="heading-large">Sign in</h1>

        {/* Mockup Image */}
        <div className="mockup-1">
          <img src="mockup-1.png" alt="Mockup Image" />
        </div>

        {/* Login Form */}
        <form className="login-form">
          <div className="margin-bottom-20">
            <label htmlFor="email" className="existing-email-label">Email</label>
            <div className="search-container box-drop-shadow-03 rounded-corners-100">
              <div className="full-width-search">
                <div className="search-left">
                  <input name="email" className="" placeholder="you@example.com" defaultValue="jasmine@icloud.com" required />
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
                  <input type="password" name="password" className="" defaultValue="Jas123!" placeholder="••••••••" required />
                </div>
                <div className="search-right"></div>
              </div>
            </div>
          </div>

          <div className="button-container margin-top-40">
            <SubmitButton formAction={signIn} pendingText="Signing In..."
              className="button pink-button button-large button-min-large button-text-white text-thick glow-effect">
              Sign In
            </SubmitButton>
            <Link href="/register" className="button grey-button button-large">
              Register
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
