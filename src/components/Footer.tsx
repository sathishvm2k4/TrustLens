import { Eye } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center border-2 border-primary-foreground bg-accent text-foreground">
            <Eye className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg">TrustLens</span>
        </div>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} TrustLens. Verified by design.</p>
      </div>
    </footer>
  );
}
