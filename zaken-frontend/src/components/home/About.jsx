import Side from "../ui/Side.jsx";
import { sectionPad } from "../ui/styles.js";

export default function About() {
  return (
    <section id="about" className={`${sectionPad} bg-ink text-paper`}>
      <div className="wrap">
        <Side dark>About Zaken</Side>
        <p className="mt-4 mb-7 max-w-3xl font-display text-[1.4rem] leading-[1.35] font-medium sm:text-[1.8rem]">
          Most small businesses already sell brilliantly on WhatsApp and Instagram.
        </p>
        <p className="mb-4 max-w-[30rem] text-soft">
          What's usually missing isn't a sales pitch, it's one place to point people to. A DM gets buried, a story
          disappears in a day, and a customer scrolling your feed can't tell what's actually for sale right now.
        </p>
        <p className="mb-4 max-w-[30rem] text-soft">
          Zaken gives your shop a single, permanent link. Put it in your bio, your status, or a flyer. Anyone who opens
          it sees your full catalog and can message you to order, on the app you already use.
        </p>
      </div>
    </section>
  );
}
