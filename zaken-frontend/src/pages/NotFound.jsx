import { Link } from "react-router-dom";
import SectionHead from "../components/ui/SectionHead.jsx";
import { button, sectionPad } from "../components/ui/styles.js";

export default function NotFound() {
  return (
    <section className={sectionPad}>
      <div className="wrap">
        <SectionHead label="404" title="Page not found">
          The page you're looking for doesn't exist.
        </SectionHead>
        <Link to="/" className={button("primary")}>Back to home</Link>
      </div>
    </section>
  );
}
