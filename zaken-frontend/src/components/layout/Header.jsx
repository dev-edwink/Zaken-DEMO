import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../data.js";
import { button } from "../ui/styles.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  useEffect(close, [location]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-white">
      <div className="wrap flex items-center justify-between py-[18px]">
        <Link to="/" className="font-display text-2xl font-bold max-sm:text-[1.3rem]">ZAKEN</Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
          className="ml-auto flex cursor-pointer flex-col gap-[5px] p-2 md:hidden"
        >
          {[0, 1, 2].map((i) => <span key={i} className="h-0.5 w-[22px] bg-ink" />)}
        </button>

        <ul
          id="nav-links"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100vh-70px)] flex-col overflow-y-auto border-b border-ink/15 bg-white px-6 pt-2 pb-5 md:static md:flex md:max-h-none md:flex-row md:gap-8 md:overflow-visible md:border-0 md:bg-transparent md:p-0`}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="block px-1 py-3 font-medium md:border-b-[3px] md:border-transparent md:py-1.5 md:hover:border-muted"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-3 border-t border-ink/15 pt-4 md:hidden">
            <Link to="/login" className={`${button("outline", "sm")} w-full`}>Log in</Link>
            <Link to="/register" className={`${button("primary", "sm")} w-full`}>Create your store</Link>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className={button("outline", "sm")}>Log in</Link>
          <Link to="/register" className={button("primary", "sm")}>Create your store</Link>
        </div>
      </div>
    </header>
  );
}
