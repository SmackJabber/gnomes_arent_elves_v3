import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

/**
 * Merch page - Placeholder for future merchandise store
 * Design: Vintage conspiracy aesthetic with "coming soon" messaging
 */
export default function Merch() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block border-4 border-accent px-4 py-2 mb-6 bg-card">
              <p className="text-accent font-bold text-xs tracking-widest uppercase">Coming Soon</p>
            </div>
            <h1 className="font-georgia text-5xl font-bold text-foreground mb-4">
              Gnome Truth Merchandise
            </h1>
            <p className="text-lg text-foreground/70 font-georgia italic">
              Spread the word. Wear the evidence.
            </p>
          </div>

          {/* Content Box */}
          <div className="bg-card border-4 border-primary p-12">
            <div className="mb-8">
              <p className="text-6xl mb-4">📦</p>
              <h2 className="font-georgia text-3xl font-bold text-primary mb-4">
                Under Development
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                We're preparing an exclusive line of merchandise to help you share the gnome truth with the world. T-shirts, hats, stickers, and more—all featuring the evidence and celebrating the real identity of these iconic gnomes.
              </p>
            </div>

            {/* Teaser Items */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 border-2 border-accent">
                <p className="text-4xl mb-3">👕</p>
                <h3 className="font-georgia font-bold text-foreground mb-2">T-Shirts</h3>
                <p className="text-sm text-foreground/70">
                  Classic designs featuring the gnome truth evidence
                </p>
              </div>
              <div className="bg-background p-6 border-2 border-accent">
                <p className="text-4xl mb-3">🧢</p>
                <h3 className="font-georgia font-bold text-foreground mb-2">Hats</h3>
                <p className="text-sm text-foreground/70">
                  Vintage-style hats celebrating gnome identity
                </p>
              </div>
              <div className="bg-background p-6 border-2 border-accent">
                <p className="text-4xl mb-3">🏷️</p>
                <h3 className="font-georgia font-bold text-foreground mb-2">Stickers</h3>
                <p className="text-sm text-foreground/70">
                  Spread the truth with gnome-themed stickers
                </p>
              </div>
              <div className="bg-background p-6 border-2 border-accent">
                <p className="text-4xl mb-3">📚</p>
                <h3 className="font-georgia font-bold text-foreground mb-2">Posters</h3>
                <p className="text-sm text-foreground/70">
                  Vintage conspiracy-style educational posters
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-accent text-accent-foreground p-6 border-2 border-primary">
              <p className="font-georgia text-lg font-bold mb-3">
                Want to be notified when merchandise launches?
              </p>
              <p className="text-sm mb-4">
                Check back soon for updates on our gnome truth merchandise collection.
              </p>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                onClick={() => alert("Merchandise notifications coming soon!")}
              >
                Notify Me
              </Button>
            </div>
          </div>

          {/* Back to Evidence */}
          <div className="mt-8">
            <Link href="/characters" className="text-primary hover:text-primary/80 font-georgia font-bold no-underline">
              ← Back to Case Files
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
