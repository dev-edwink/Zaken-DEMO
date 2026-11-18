import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthShell from "../components/auth/AuthShell.jsx";
import Field from "../components/ui/Field.jsx";
import { button } from "../components/ui/styles.js";
import { validateLogin } from "../lib/validate.js";
import { login } from "../services/auth.js";

export default function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [values, setValues] = useState({ email: "", password: "" });
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
    const found = validateLogin(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setLoading(true);
    try {
      await login(values);
      navigate("/");
    } catch (err) {
      setFormError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      label="Log in"
      title="Welcome back"
      subtitle="Log in to manage your shop and catalog."
      footerText="New to Zaken?"
      footerLink="Create your store"
      footerTo="/register"
    >
      <form onSubmit={submit} noValidate className="flex flex-col gap-5">
        {state?.registered && (
          <p role="status" className="border-[1.5px] border-green-700 bg-green-50 px-3.5 py-3 text-sm text-green-700">
            Account created. Log in to continue.
          </p>
        )}
        <Field label="Email" id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={change} error={errors.email} />
        <Field label="Password" id="password" name="password" type="password" autoComplete="current-password" value={values.password} onChange={change} error={errors.password} />
        {formError && (
          <p role="alert" className="border-[1.5px] border-red-700 bg-red-50 px-3.5 py-3 text-sm text-red-700">{formError}</p>
        )}
        <button type="submit" disabled={loading} className={button("primary")}>
          {loading ? "Logging in…" : "Log in"}
        </button>
      </form>
    </AuthShell>
  );
}
