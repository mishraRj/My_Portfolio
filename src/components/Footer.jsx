import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center classic-font">
      <p>
        © 2025 Rajat Mishra. Portfolio website. Inspired by Pedro
        Machado/@PedroTechnologies.
      </p>
      <div class="flex justify-center gap-4 mt-2">
        <a href="https://github.com/mishraRj" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mishrarj/" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:rajatmishra392003@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
