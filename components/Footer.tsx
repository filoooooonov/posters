import React from "react";

export default function Footer() {
  return (
    <footer className="absolute left-0 bottom-0 h-20 w-full text-center">
      <p className="text-neutral-600">
        Made in Otaniemi by{" "}
        <a
          target="_blank"
          href="https://alekseifilonov.com"
          className="hover:text-neutral-400 transition-all duration-300 hover:font-medium"
        >
          Aleksei
        </a>
      </p>
    </footer>
  );
}
