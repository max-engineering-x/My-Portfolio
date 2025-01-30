import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center px-4 py-8 mx-4 gap-8 z-30 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg md:gap-6 text-center mb-16 transition-transform duration-300 hover:scale-105"
    >
      <div className="flex flex-col md:flex-row gap-4 md:justify-center w-full">
        <h2 className="font-bold text-3xl md:text-5xl leading-snug text-gray-800 dark:text-white">
          Want me on your team?
          <br />
          <span className="text-primary block">
            Let&#39;s make it happen ✨
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <a
          href="mailto:moalsaadi18@gmail.com"
          className="bg-primary text-white px-4 py-2 rounded-lg flex gap-3 items-center text-lg md:text-xl font-medium shadow-md hover:shadow-lg hover:bg-primary-dark transition-all duration-300"
        >
          Let&#8217;s get in touch
          <img src="/mail_icon.svg" alt="Mail icon" className="w-6 h-6" />
        </a>
        <div className="flex gap-6 justify-center items-center">
          <a
            href="https://github.com/max-engineering-x"
            target="_blank"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <img
              src="/github_logo_dark.svg"
              alt="Github logo for dark mode"
              className="w-6 h-6 hidden dark:block"
            />
            <img
              src="/github_logo.svg"
              alt="Github logo"
              className="w-6 h-6 dark:hidden"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-alzahrani321/"
            target="_blank"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <img
              src="/linkedln_logo_dark.svg"
              alt="LinkedIn logo for dark mode"
              className="w-6 h-6 hidden dark:block"
            />
            <img
              src="/linkedln_logo.svg"
              alt="LinkedIn logo"
              className="w-6 h-6 dark:hidden"
            />
          </a>
        </div>
      </div>
      <small className="text-gray-500 dark:text-gray-400 mt-4">
        Copyright&copy; Mohammed Alzahrani 2025
      </small>
    </section>
  );
};

export default Contact;
