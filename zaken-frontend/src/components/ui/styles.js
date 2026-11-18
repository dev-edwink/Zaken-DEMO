// Shared Tailwind class helpers.
const base =
  "inline-flex items-center justify-center gap-2 rounded-sm border-[1.5px] font-semibold cursor-pointer transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "border-ink bg-ink text-white hover:border-accent hover:bg-accent",
  accent: "border-ink bg-accent text-white hover:bg-ink",
  outline: "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
  inverted: "border-ink bg-ink text-white hover:border-white hover:bg-white hover:text-ink",
  onDark: "border-paper bg-ink text-white hover:border-accent hover:bg-accent",
};
const sizes = { md: "px-[26px] py-[15px]", sm: "px-[18px] py-2.5 text-[0.95rem]" };

/** button("primary", "sm") -> class string; works on <button> and <Link>/<a>. */
export const button = (variant = "primary", size = "md") => `${base} ${variants[variant]} ${sizes[size]}`;

export const sectionPad = "py-14 sm:py-[70px]";
