import { useState } from "react";
import Field from "../ui/Field.jsx";
import SectionHead from "../ui/SectionHead.jsx";
import { button, sectionPad } from "../ui/styles.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (e) => {
    setSent(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend or a form service (Formspree, EmailJS, etc.)
    console.log("Contact form submitted:", form);
    setForm({ name: "", email: "", message: "" });
    setSent(true);
  };

  return (
    <section id="contact" className={sectionPad}>
      <div className="wrap">
        <SectionHead label="Contact" title="Get in touch">
          Send us a message and we'll get back to you.
        </SectionHead>

        <form onSubmit={submit} className="flex max-w-[34rem] flex-col gap-5">
          <Field label="Name" id="contact-name" name="name" placeholder="Your name" value={form.name} onChange={change} required />
          <Field label="Email" id="contact-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={change} required />
          <Field as="textarea" rows={5} label="Message" id="contact-message" name="message" placeholder="How can we help?" value={form.message} onChange={change} required />
          {sent && (
            <p role="status" className="border-[1.5px] border-green-700 bg-green-50 px-3.5 py-3 text-sm text-green-700">
              Message sent. We'll get back to you soon.
            </p>
          )}
          <button type="submit" className={button("primary")}>Send message</button>
        </form>
      </div>
    </section>
  );
}
