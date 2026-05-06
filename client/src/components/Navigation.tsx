import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Navigation component - Vintage conspiracy aesthetic header
 * Design: Forest green background with cream text, serif branding
 */
export default function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 border-b-4 border-accent shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="text-3xl font-georgia font-bold">🧙</div>
          <div className="hidden sm:block">
            <h1 className="font-georgia text-xl font-bold">Gnomes Aren't Elves</h1>
            <p className="text-xs opacity-80">The Truth Revealed</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/about" className="no-underline">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 font-georgia font-bold">
              Evidence
            </Button>
          </Link>
          <Link href="/characters" className="no-underline">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 font-georgia font-bold">
              Files
            </Button>
          </Link>
          <Link href="/merch" className="no-underline">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 font-georgia font-bold">
              Merch
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
