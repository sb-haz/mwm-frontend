import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Footer from '@/components/Footer'

export default async function ProtectedPage() {
  const supabase = createClient(); // Create a new Supabase client

  // Get the user from the session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If no user, redirect to login
  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="">
      <div className="">
        <div className="">
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <nav className="">
          <div className="">
            <AuthButton />
          </div>
        </nav>
      </div>

      <Footer activePage="protected" />
    </div>
  );
}
