import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

/**
 * Home page - Hero section with introduction to the gnome truth
 * Design: Vintage conspiracy aesthetic with warm beige background and forest green/burnt orange accents
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-16 pb-20 px-4">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663526598276/7mdpff44cJYeQRpNSqH5SQ/hero-gnome-truth-X9FHCHmYT73UsPz9e74DL8.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center">
          <div className="mb-8 inline-block">
            <div className="border-4 border-accent px-6 py-3 bg-background/80 backdrop-blur-sm">
              <p className="text-accent font-bold text-sm tracking-widest uppercase">CLASSIFIED INFORMATION</p>
            </div>
          </div>

          <h1 className="font-georgia text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Gnomes Aren't Elves
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-georgia italic">
            The Truth They Don't Want You to Know
          </p>

          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            For decades, popular culture has perpetuated a grand deception. The Keebler Elf, Snap, Crackle, Pop, and even Santa's workshop helpers have been systematically misidentified. We have the evidence. We have the proof. These are not elves—they are gnomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="no-underline">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                Read the Evidence
              </Button>
            </Link>
            <Link href="/characters" className="no-underline">
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold">
                View the Files
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="bg-card py-16 px-4 border-t-4 border-accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-georgia text-4xl font-bold text-foreground mb-12 text-center">
            The Gnome Truth
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 border-l-4 border-primary">
              <h3 className="font-georgia text-2xl font-bold text-primary mb-3">Pointed Hats</h3>
              <p className="text-foreground/70">
                Gnomes wear distinctive pointed hats. Elves have pointed ears. These are fundamentally different anatomical features.
              </p>
            </div>

            <div className="bg-background p-6 border-l-4 border-accent">
              <h3 className="font-georgia text-2xl font-bold text-accent mb-3">Blue-Collar Workers</h3>
              <p className="text-foreground/70">
                Gnomes are industrious craftspeople. They build, they create, they work with their hands. This is gnome behavior.
              </p>
            </div>

            <div className="bg-background p-6 border-l-4 border-primary">
              <h3 className="font-georgia text-2xl font-bold text-primary mb-3">Earthbound Nature</h3>
              <p className="text-foreground/70">
                Gnomes are connected to the earth and gardens. Elves are mystical forest spirits. The distinction is clear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
