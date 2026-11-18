import { Link } from "react-router-dom";
import Side from "../ui/Side.jsx";
import { button } from "../ui/styles.js";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center md:min-h-[650px]">
      <div className="wrap mx-auto max-w-[760px] text-center">
        <Side>A shop link for Nigerian sellers</Side>

        <h1 className="mt-[18px] mb-5 text-[2.1rem] sm:text-5xl">
          Sell online with just a <br className="hidden sm:block" />
          <span className="underline decoration-accent decoration-[5px] underline-offset-10">link</span>
        </h1>
        <p className="mx-auto mb-7 max-w-200 text-[1.05rem] text-muted sm:text-xl">
          Register your shop, upload your catalog, and get a link customers can use to browse and order on WhatsApp.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <Link to="/register" className={`${button("accent")} w-full sm:w-auto`}>Create your store free</Link>
          <Link to="/#setup" className={`${button("outline")} w-full sm:w-auto`}>See how setup works</Link>
        </div>
      </div>
    </section>
  );
}
