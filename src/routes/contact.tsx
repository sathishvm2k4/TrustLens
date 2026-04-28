import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/Layout";
import { toast } from "sonner";
import { Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TrustLens" },
      { name: "description", content: "Get in touch with the TrustLens team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-[0.95]">Let's talk.</h1>
            <p className="mt-6 text-muted-foreground">
              Whether you're evaluating TrustLens for your team or you've spotted something we can do better — we read every message.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@trustlens.app</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Stockholm · Remote-first</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 border-2 border-foreground bg-card p-8 shadow-bold space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">Name</label>
              <input required className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email</label>
              <input type="email" required className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">Message</label>
              <textarea required rows={5} className="w-full border-2 border-foreground bg-background px-4 py-3 outline-none focus:bg-accent/30 resize-none" />
            </div>
            <button
              disabled={sending}
              className="border-2 border-foreground bg-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-bold-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
