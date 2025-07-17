import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "oponevictor33@gmail.com",
    link: "mailto:oponevictor33@gmail.com",
  },
  { label: "Phone", value: "+234 (704) 871-2405", link: "tel:+2347048712405" },
  { label: "GitHub", value: "mahvec", link: "https://github.com/mahvec" },
  {
    label: "LinkedIn",
    value: "opone-victor-7a334527b",
    link: "https://linkedin.com/in/opone-victor-7a334527b",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section
      id="contact"
      className="w-full bg-[var(--color-bg)] py-16 sm:py-20 md:py-24 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="container w-full flex flex-col md:flex-row items-start justify-between gap-8 p-3 sm:gap-12 sm:px-6"
      >
        {/* Left: CTA */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-white)] mb-2">
            Have a project?
            <br />
            Let&apos;s talk!
          </h2>
          <div className="flex flex-col gap-2 mt-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-[var(--color-highlight)] hover:text-[var(--color-white)] transition-colors font-medium w-fit hover:underline underline-offset-2 break-all"
              >
                <span className="font-semibold text-[var(--color-highlight)] mr-2">
                  {info.label}:
                </span>
                {info.value}
              </a>
            ))}
          </div>
        </div>
        {/* Right: Form */}
        <form
          className="flex-1 flex flex-col gap-3 sm:gap-4 bg-[var(--color-bg)] rounded-xl md:p-6 w-full mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            required
            type="text"
            placeholder="Name"
            className="px-3 sm:px-4 py-2 y-3 bg-transparent border border-[var(--color-highlight)] text-[var(--color-white)] placeholder:text-[var(--color-light)] focus:outline-none focus:border-[var(--color-highlight)] text-sm sm:text-base"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="px-3 sm:px-4 py-2 y-3 bg-transparent border border-[var(--color-highlight)] text-[var(--color-white)] placeholder:text-[var(--color-light)] focus:outline-none focus:border-[var(--color-highlight)] text-sm sm:text-base"
          />
          <textarea
            required
            placeholder="Message"
            rows={4}
            className="px-3 sm:px-4 py-2 y-3 bg-transparent border border-[var(--color-highlight)] text-[var(--color-white)] placeholder:text-[var(--color-light)] focus:outline-none focus:border-[var(--color-highlight)] text-sm sm:text-base resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-5 sm:px-6 py-2 sm:py-3 bg-[var(--color-highlight)] text-[var(--color-bg)] font-bold shadow hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] transition text-sm sm:text-base"
          >
            Submit
          </button>
          {submitted && (
            <span className="text-[var(--color-highlight)] mt-2 text-sm sm:text-base">
              Thank you! I'll be in touch soon.
            </span>
          )}
        </form>
      </motion.div>
    </section>
  );
}
