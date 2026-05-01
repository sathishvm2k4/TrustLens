import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import logo from "@/assets/trustlenslogo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
  src={logo}
  alt="TrustLens Logo"
  className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
/>
          <span className="font-display text-2xl font-bold tracking-tight">TrustLens</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium uppercase tracking-wider hover:text-muted-foreground"
              activeProps={{
                className:
                  "text-sm font-medium uppercase tracking-wider underline underline-offset-8 decoration-2",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm font-medium uppercase tracking-wider hover:text-muted-foreground"
                activeProps={{
                  className:
                    "text-sm font-medium uppercase tracking-wider underline underline-offset-8 decoration-2",
                }}
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="border-2 border-foreground bg-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-bold-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium uppercase tracking-wider hover:text-muted-foreground"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border-2 border-foreground bg-accent px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-bold-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Get started
              </Link>
            </>
          )}
        </nav>

        <button
          className="border-2 border-foreground p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-foreground bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium uppercase tracking-wider"
              >
                {l.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium uppercase tracking-wider"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="mt-2 border-2 border-foreground bg-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium uppercase tracking-wider"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="mt-2 border-2 border-foreground bg-accent px-4 py-2 text-center text-sm font-bold uppercase tracking-wider"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
