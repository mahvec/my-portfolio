import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-light)]">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-[var(--color-white)] mb-4 sm:mb-6">
              Let's Work
              <span className="text-[var(--color-highlight)]"> Together</span>
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-[var(--color-highlight)] mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-light)] max-w-3xl mx-auto leading-relaxed px-4">
              Ready to bring your ideas to life? I'm here to help you create
              something amazing. Let's discuss your project and make it happen.
            </p>
          </motion.div>

          {/* Contact Form and Info */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8 sm:gap-12items-start"
          >
            {/* Contact Form */}
            <div className="bg-[var(--color-primary)] p-3 sm:p-6 lg:p-8 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-white)] mb-6 sm:mb-8">
                Send Message
              </h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[var(--color-light)] font-medium mb-2 sm:text-base">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--color-bg)] border border-[var(--color-light)] rounded-lg text-[var(--color-white)] focus:outline-none focus:border-[var(--color-highlight)] transition-colors text-sm sm:text-base"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--color-light)] font-medium mb-2 sm:text-base">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--color-bg)] border border-[var(--color-light)] rounded-lg text-[var(--color-white)] focus:outline-none focus:border-[var(--color-highlight)] transition-colors text-sm sm:text-base"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[var(--color-light)] font-medium mb-2 sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--color-bg)] border border-[var(--color-light)] rounded-lg text-[var(--color-white)] focus:outline-none focus:border-[var(--color-highlight)] transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-light)] font-medium mb-2 sm:text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--color-bg)] border border-[var(--color-light)] rounded-lg text-[var(--color-white)] focus:outline-none focus:border-[var(--color-highlight)] transition-colors text-sm sm:text-base"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-light)] font-medium mb-2 sm:text-base">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--color-bg)] border border-[var(--color-light)] rounded-lg text-[var(--color-white)] focus:outline-none focus:border-[var(--color-highlight)] transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--color-highlight)] text-[var(--color-bg)] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-[var(--color-white)] transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-white)] mb-6 sm:mb-8">
                  Get In Touch
                </h2>
                <p className="text-base sm:text-lg text-[var(--color-light)] leading-relaxed mb-6 sm:mb-8">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Let's create
                  something extraordinary together.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[var(--color-accent)] rounded-xl border border-[var(--color-highlight)]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-highlight)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-bg)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-white)]">
                      Email
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--color-light)] break-all">
                      oponevictor@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[var(--color-accent)] rounded-xl border border-[var(--color-highlight)]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-highlight)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-bg)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-white)]">
                      Phone
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--color-light)]">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[var(--color-accent)] rounded-xl border border-[var(--color-highlight)]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-highlight)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-bg)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-white)]">
                      Location
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--color-light)]">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-white)] mb-3 sm:mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-highlight)] rounded-lg flex items-center justify-center hover:bg-[var(--color-white)] transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-bg)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-highlight)] rounded-lg flex items-center justify-center hover:bg-[var(--color-white)] transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-bg)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-highlight)] rounded-lg flex items-center justify-center hover:bg-[var(--color-white)] transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-bg)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
