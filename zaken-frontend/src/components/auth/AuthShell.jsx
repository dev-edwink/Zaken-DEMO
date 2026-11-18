import { Link } from "react-router-dom";
import Side from "../ui/Side.jsx";

/** Shared frame for the login and register pages. */
export default function AuthShell({ label, title, subtitle, footerText, footerLink, footerTo, wide = false, children }) {
  return (
    <section className="py-12 sm:py-[70px]">
      <div className={`wrap ${wide ? "max-w-[44rem]" : "max-w-[32rem]"}`}>
        <div className="border-[1.5px] border-ink bg-white p-6 sm:p-8">
          <Side>{label}</Side>
          <h1 className="mt-3.5 mb-2 text-[1.7rem] sm:text-[2rem]">{title}</h1>
          <p className="mb-7 text-muted">{subtitle}</p>
          {children}
        </div>
        <p className="mt-6 text-center text-[0.95rem] text-muted">
          {footerText}{" "}
          <Link to={footerTo} className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">
            {footerLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
