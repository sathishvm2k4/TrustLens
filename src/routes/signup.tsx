import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Layout } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up — TrustLens" },
      { name: "description", content: "Create your TrustLens account in 30 seconds." },
    ],
  }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/dashboard" });
  }, [user, navigate]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: { full_name: fullName },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Account created — welcome to TrustLens.");
    navigate({ to: "/dashboard" });
  };

  return (
    <Layout>
      <section className="mx-auto max-w-md px-6 py-20">
        <h1 className="font-display text-5xl">Create your account.</h1>
        <p className="mt-2 text-muted-foreground">Free for 30 days. No credit card.</p>

        <form onSubmit={onSubmit} className="mt-10 border-2 border-foreground bg-card p-8 shadow-bold space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Full name</label>
            <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Password</label>
            <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30" />
            <p className="mt-1 text-xs text-muted-foreground">Min 8 characters.</p>
          </div>
          <button disabled={loading} className="w-full border-2 border-foreground bg-foreground text-primary-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-bold-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-60">
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground text-center">
          Already a member? <Link to="/login" className="font-bold text-foreground underline underline-offset-4">Sign in</Link>
        </p>
      </section>
    </Layout>
  );
}
