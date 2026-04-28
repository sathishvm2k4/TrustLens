import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, Activity, FileCheck, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — TrustLens" },
      { name: "description", content: "Your TrustLens dashboard." },
    ],
  }),
  component: Dashboard,
});

interface Profile {
  full_name: string | null;
  email: string | null;
  created_at: string;
}

function Dashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name, email, created_at")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => setProfile(data));
  }, [user]);

  if (loading || !user) {
    return (
      <Layout>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="h-8 w-48 bg-muted animate-pulse" />
        </div>
      </Layout>
    );
  }

  const name = profile?.full_name || user.email?.split("@")[0] || "there";

  const stats = [
    { icon: ShieldCheck, label: "Integrity score", value: "99.98%", note: "All systems verified" },
    { icon: Activity, label: "Records audited", value: "12,847", note: "+312 today" },
    { icon: FileCheck, label: "Signed proofs", value: "8,402", note: "Last 30 days" },
    { icon: AlertCircle, label: "Open anomalies", value: "0", note: "Nothing to review" },
  ];

  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Dashboard</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">Hello, {name}.</h1>
          <p className="mt-3 text-muted-foreground">Here's a snapshot of your TrustLens activity.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="border-2 border-foreground bg-card p-5 transition-all hover:shadow-bold-sm hover:-translate-x-0.5 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.label}</span>
                <s.icon className="h-4 w-4" />
              </div>
              <p className="mt-4 font-display text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 border-2 border-foreground bg-card p-6">
            <h2 className="font-display text-2xl">Recent activity</h2>
            <ul className="mt-5 divide-y-2 divide-foreground/10">
              {[
                ["12:48", "Audit batch #3812 verified", "system"],
                ["11:22", "New signed proof issued", "system"],
                ["09:01", "Daily integrity report sent", "system"],
                ["Yesterday", "Account created", name],
              ].map(([t, msg, by], i) => (
                <li key={i} className="flex items-start gap-4 py-3 text-sm">
                  <span className="font-mono text-xs text-muted-foreground w-20 shrink-0">{t}</span>
                  <span className="flex-1">{msg}</span>
                  <span className="text-xs text-muted-foreground">{by}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-foreground bg-accent p-6">
            <h2 className="font-display text-2xl">Account</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider">Name</dt>
                <dd className="mt-1">{profile?.full_name || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider">Email</dt>
                <dd className="mt-1 break-all">{profile?.email || user.email}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider">Member since</dt>
                <dd className="mt-1">
                  {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : "—"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}
