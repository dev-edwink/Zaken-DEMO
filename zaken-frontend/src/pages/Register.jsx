import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/auth/AuthShell.jsx";
import Field from "../components/ui/Field.jsx";
import { button } from "../components/ui/styles.js";
import { validateRegister } from "../lib/validate.js";
import { register } from "../services/auth.js";

const INITIAL = { name: "", shopName: "", email: "", whatsapp: "", password: "", confirmPassword: "" };

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
    setFormError("");
  };

  const submit = async (e) => {
    e.preventDefault();
    const found = validateRegister(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setLoading(true);
    try {
      await register(values);
      navigate("/login", { state: { registered: true } });
    } catch (err) {
      setFormError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const field = (name) => ({ id: name, name, value: values[name], onChange: change, error: errors[name] });

  return (
    <AuthShell
      wide
      label="Create your store"
      title="Start selling with a link"
      subtitle="Free while Zaken is in early access. It takes about two minutes."
      footerText="Already have an account?"
      footerLink="Log in"
      footerTo="/login"
    >
      <form onSubmit={submit} noValidate className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" autoComplete="name" {...field("name")} />
          <Field label="Shop name" {...field("shopName")} />
        </div>
        <Field label="Email" type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
        <Field label="WhatsApp number" type="tel" autoComplete="tel" placeholder="0803 123 4567" {...field("whatsapp")} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Password" type="password" autoComplete="new-password" {...field("password")} />
          <Field label="Confirm password" type="password" autoComplete="new-password" {...field("confirmPassword")} />
        </div>
        {formError && (
          <p role="alert" className="border-[1.5px] border-red-700 bg-red-50 px-3.5 py-3 text-sm text-red-700">{formError}</p>
        )}
        <button type="submit" disabled={loading} className={button("primary")}>
          {loading ? "Creating your store…" : "Create your store"}
        </button>
      </form>
    </AuthShell>
  );
}
