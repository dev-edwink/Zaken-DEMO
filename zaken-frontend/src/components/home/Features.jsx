import { FEATURES } from "../../data.js";
import SectionHead from "../ui/SectionHead.jsx";
import { sectionPad } from "../ui/styles.js";

export default function Features() {
  return (
    <section className={`${sectionPad} bg-dim`}>
      <div className="wrap">
        <SectionHead label="Why it works" title="Built around how you already sell" />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ num, title, text }) => (
            <div key={num} className="border-t-[1.5px] border-ink pt-5">
              <span className="mb-2.5 block text-xs text-accent">{num}</span>
              <h3 className="mb-1.5 text-[1.3rem]">{title}</h3>
              <p className="text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
