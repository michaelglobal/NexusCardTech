import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider py-8 sm:py-10 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/nexus-card-tech-icon-white.png"
            alt="Nexus Card Tech"
            width={120}
            height={120}
            className="h-5 w-auto"
          />
          <span className="text-text-secondary text-xs sm:text-sm">
            &copy; 2026 Nexus Card Tech. All rights reserved.
          </span>
        </div>
        <div className="flex gap-5 sm:gap-6">
          <Link
            href="/privacy"
            className="text-text-secondary text-xs sm:text-sm hover:text-text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-text-secondary text-xs sm:text-sm hover:text-text-primary transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-text-secondary text-xs sm:text-sm hover:text-text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
