import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Layout } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — TrustLens" },
      { name: "description", content: "Sign in to your TrustLens account." },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/dashboard" });
  }, [user, navigate]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back.");
    navigate({ to: "/dashboard" });
  };

  return (
    <Layout>
      <section className="mx-auto max-w-md px-6 py-20">
        <h1 className="font-display text-5xl">Welcome back.</h1>
        <p className="mt-2 text-muted-foreground">Sign in to your TrustLens account.</p>

        <form onSubmit={onSubmit} className="mt-10 border-2 border-foreground bg-card p-8 shadow-bold space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30" />
          </div>
          <button disabled={loading} className="w-full border-2 border-foreground bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-bold-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-60">
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground text-center">
          No account? <Link to="/signup" className="font-bold text-foreground underline underline-offset-4">Sign up</Link>
        </p>
      </section>
    </Layout>
  );
}
