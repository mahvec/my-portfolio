import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ResumeContactSection() {
  return (
    <section className="w-full bg-primary py-12 sm:py-16 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full p-3 sm:p-4 flex flex-col items-center gap-4 sm:gap-6"
      >
        <a
          href="/resume.pdf"
          download
          className="px-5 sm:px-6 py-2 sm:py-3 rounded bg-highlight text-primary font-bold shadow hover:bg-accent hover:text-highlight transition text-base sm:text-lg"
        >
          Download CV
        </a>
        <div className="text-center mt-2 sm:mt-4">
          <span className="text-highlight/90 text-base sm:text-lg">
            Want to work together?
          </span>
          <br />
          <Link
            to="/contact"
            className="inline-block mt-2 px-5 sm:px-6 py-2 sm:py-3 rounded border-2 border-highlight text-highlight font-bold hover:bg-highlight hover:text-primary transition text-base sm:text-lg"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
