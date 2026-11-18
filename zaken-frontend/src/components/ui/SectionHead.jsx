import Side from "./Side.jsx";

export default function SectionHead({ label, title, children }) {
  return (
    <div className="mb-11 max-w-[38rem]">
      <Side>{label}</Side>
      <h2 className="mt-3.5 mb-3 text-[1.6rem] sm:text-[2rem]">{title}</h2>
      {children && <p className="text-muted">{children}</p>}
    </div>
  );
}
