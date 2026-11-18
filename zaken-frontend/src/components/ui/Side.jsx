export default function Side({ children, dark = false }) {
  return (
    <span
      className={`inline border-l-[3px] border-accent pl-2 text-[0.78rem] font-medium tracking-[0.1em] ${
        dark ? "text-soft" : "text-muted"
      }`}
    >
      {children}
    </span>
  );
}
