import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/nexus-card-tech-icon-white.png"
            alt="Nexus Card Tech"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-text-secondary text-sm">
            &copy; 2026 Nexus Card Tech. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-text-secondary text-sm hover:text-text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-text-secondary text-sm hover:text-text-primary transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-text-secondary text-sm hover:text-text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
