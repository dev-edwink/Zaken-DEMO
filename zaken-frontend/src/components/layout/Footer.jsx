import { Link } from "react-router-dom";
import { button } from "../ui/styles.js";

export default function Footer() {
  return (
    <footer className="bg-ink pt-10 pb-7 text-paper">
      <div className="wrap">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <Link to="/" className="font-display text-2xl font-bold max-sm:text-[1.3rem]">Zaken</Link>
            <p className="mt-2 max-w-[20rem] text-[0.9rem] text-soft">
              One link for your shop. <br /> Built for how Nigerian sellers already sell.
            </p>
          </div>
          <Link to="/#contact" className={`${button("onDark")} max-md:w-full`}>CHAT WITH SUPPORT</Link>
        </div>

        <div className="mt-6 flex flex-col gap-2.5 border-t border-paper/20 pt-5 text-[0.8rem] text-soft sm:flex-row sm:justify-between">
          <span>&copy; 2026 Zaken</span>
          <span>Made for small businesses across Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
