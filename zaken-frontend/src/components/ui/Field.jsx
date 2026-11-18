import { useState } from "react";

const control =
  "w-full rounded-sm border-[1.5px] bg-white px-3.5 py-[13px] text-ink focus:border-accent focus:outline-2 focus:outline-accent";

/** Labelled input/textarea with error text. type="password" gets a show/hide toggle. */
export default function Field({ label, id, error, as: Tag = "input", type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const isPassword = Tag === "input" && type === "password";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.8rem] font-medium text-muted">{label}</label>
      <div className="relative">
        <Tag
          id={id}
          type={Tag === "input" ? (isPassword && show ? "text" : type) : undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${control} ${error ? "border-red-700" : "border-ink"} ${isPassword ? "pr-16" : ""}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-3 cursor-pointer text-[0.8rem] font-semibold text-muted hover:text-ink"
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <p id={`${id}-error`} className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
