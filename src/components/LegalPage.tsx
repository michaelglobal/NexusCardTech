import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="border-b border-divider">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/nexus-card-tech-logo-white.png"
              alt="Nexus Card Tech"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-text-secondary text-sm hover:text-text-primary transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">{title}</h1>
        <div className="prose-invert space-y-6 text-text-secondary leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
