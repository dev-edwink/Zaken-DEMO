import { STEPS } from "../../data.js";
import SectionHead from "../ui/SectionHead.jsx";
import { sectionPad } from "../ui/styles.js";

export default function Setup() {
  return (
    <section id="setup" className={sectionPad}>
      <div className="wrap">
        <SectionHead label="Setup" title="Set up your shop in three steps">
          No coding, no waiting for approval, no design skills required.
        </SectionHead>

        <div className="grid gap-5 md:grid-cols-3">
          {STEPS.map(({ num, title, text }) => (
            <div key={num} className="border-[1.5px] border-accent bg-white px-6 py-[26px]">
              <div className="mb-3.5 text-[1.3rem] font-semibold">{num}</div>
              <h3 className="mb-2 text-[1.2rem]">{title}</h3>
              <p className="text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
