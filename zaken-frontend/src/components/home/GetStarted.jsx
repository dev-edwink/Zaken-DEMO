import { Link } from "react-router-dom";
import { button } from "../ui/styles.js";

export default function GetStarted() {
  return (
    <section id="get-started" className="bg-accent py-14 text-center text-white sm:py-[72px]">
      <div className="wrap">
        <h2 className="mb-3 text-[1.6rem] sm:text-[2.125rem]">Ready to put your shop online?</h2>
        <p className="mb-[30px] text-white/85">Set up your store and share your first link today.</p>
        <Link to="/register" className={button("inverted")}>Create your store free</Link>
      </div>
    </section>
  );
}
