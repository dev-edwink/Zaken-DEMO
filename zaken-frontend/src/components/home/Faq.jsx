import { FAQS } from "../../data.js";
import SectionHead from "../ui/SectionHead.jsx";
import { sectionPad } from "../ui/styles.js";

export default function Faq() {
  return (
    <section id="faq" className={sectionPad}>
      <div className="wrap">
        <SectionHead label="Questions" title="Before you get started" />

        <div className="max-w-[40rem]">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group border-b-[1.5px] border-dashed border-ink py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[18px] font-semibold [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden className="text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mb-5 max-w-[33rem] text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
