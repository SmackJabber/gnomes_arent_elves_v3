import { Link } from "wouter";
import Navigation from "@/components/Navigation";

/**
 * About page - Educational content explaining gnome vs. elf distinctions
 * Design: Vintage conspiracy aesthetic with document-style layout
 */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-block border-4 border-accent px-4 py-2 mb-6 bg-card">
            <p className="text-accent font-bold text-xs tracking-widest uppercase">EVIDENCE REPORT</p>
          </div>
          <h1 className="font-georgia text-5xl font-bold text-foreground mb-4">
            The Gnome vs. Elf Distinction
          </h1>
          <p className="text-lg text-foreground/70 font-georgia italic">
            A comprehensive analysis of folklore, characteristics, and the misidentification of popular culture icons
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1: Folklore Differences */}
          <section className="bg-card p-8 border-l-4 border-primary">
            <h2 className="font-georgia text-3xl font-bold text-primary mb-4">
              Folklore & Historical Distinctions
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                In traditional European folklore, gnomes and elves represent fundamentally different supernatural beings. These distinctions have been documented across centuries and multiple cultures.
              </p>
              <p>
                <strong className="text-foreground">Elves</strong> in classical folklore are ethereal, magical beings—often described as forest spirits with pointed ears, immortal nature, and connection to the fae realm. They are otherworldly, mysterious, and associated with magic and enchantment.
              </p>
              <p>
                <strong className="text-foreground">Gnomes</strong>, by contrast, are earthbound humanoids. They are typically depicted as small, sturdy creatures with beards and pointed hats, living in gardens, forests, and underground. They are industrious, practical, and connected to the physical world—not the mystical realm.
              </p>
            </div>
          </section>

          {/* Section 2: Physical Characteristics */}
          <section className="bg-card p-8 border-l-4 border-accent">
            <h2 className="font-georgia text-3xl font-bold text-accent mb-4">
              Physical Characteristics
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-georgia text-xl font-bold text-foreground mb-3">Gnome Features</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>✓ Pointed, conical hat (red or green)</li>
                  <li>✓ Long beard (often white or gray)</li>
                  <li>✓ Short stature (typically 2-3 feet tall)</li>
                  <li>✓ Stocky, robust build</li>
                  <li>✓ Round nose and rosy cheeks</li>
                  <li>✓ Practical, work-oriented clothing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-georgia text-xl font-bold text-foreground mb-3">Elf Features</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>✗ Pointed ears (not hat)</li>
                  <li>✗ Often beardless or minimal facial hair</li>
                  <li>✗ Typically taller and more slender</li>
                  <li>✗ Graceful, ethereal build</li>
                  <li>✗ Delicate, angular features</li>
                  <li>✗ Magical, ornate clothing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Behavioral Patterns */}
          <section className="bg-card p-8 border-l-4 border-primary">
            <h2 className="font-georgia text-3xl font-bold text-primary mb-4">
              Behavioral & Cultural Patterns
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                The behavior and cultural practices of gnomes align perfectly with the characters we see in popular culture, while elf characteristics do not.
              </p>
              <p>
                <strong className="text-foreground">Gnomes are:</strong> Industrious craftspeople who work with their hands. They build, create, and maintain. They are practical, organized, and focused on tangible results. They live in communities and work cooperatively on projects. They have a "blue-collar" approach to existence.
              </p>
              <p>
                <strong className="text-foreground">Elves are:</strong> Magical, often solitary or in small groups. They are associated with nature magic, music, and the mystical arts. They are immortal and operate on a different plane of existence than humans. They are rarely depicted as factory workers or cookie makers.
              </p>
            </div>
          </section>

          {/* Section 4: The Misidentification */}
          <section className="bg-card p-8 border-l-4 border-accent">
            <h2 className="font-georgia text-3xl font-bold text-accent mb-4">
              Why the Misidentification Occurred
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                The term "elf" has been used colloquially in modern marketing and popular culture to describe small, magical helpers. However, this represents a fundamental misunderstanding of folklore taxonomy. Marketing departments chose "elf" for its whimsical connotations, not for its folkloric accuracy.
              </p>
              <p>
                In reality, these characters—the cookie-making helpers, the cereal mascots, Santa's workshop assistants—all exhibit gnome characteristics: pointed hats, beards, industrious work ethic, and earthbound practicality. The evidence is overwhelming.
              </p>
            </div>
          </section>

          {/* Section 5: Supporting Evidence */}
          <section className="bg-card p-8 border-l-4 border-primary">
            <h2 className="font-georgia text-3xl font-bold text-primary mb-4">
              Supporting Evidence
            </h2>
            <div className="space-y-3 text-foreground/80">
              <p className="font-bold text-foreground">Visual Analysis:</p>
              <p>
                Examine the Keebler Elf, Snap, Crackle, and Pop, and Santa's workshop helpers. Every single one wears a pointed hat—a defining gnome characteristic. None have pointed ears. This is not coincidence; it is evidence.
              </p>
              <p className="font-bold text-foreground mt-4">Occupational Analysis:</p>
              <p>
                Gnomes are known for craftsmanship and industrious work. Cookie making, cereal production, toy manufacturing—these are gnome professions. Elves, in contrast, are associated with magic and nature, not factory work.
              </p>
              <p className="font-bold text-foreground mt-4">Behavioral Analysis:</p>
              <p>
                These characters work in organized groups, follow instructions, and produce tangible goods. This is gnome behavior. Elves are typically depicted as independent, magical, and otherworldly.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-accent text-accent-foreground p-8 border-4 border-primary text-center">
            <p className="font-georgia text-2xl font-bold mb-4">
              The Truth is Undeniable
            </p>
            <p className="mb-6">
              Once you see it, you cannot unsee it. Explore the individual case files to examine the evidence for each character.
            </p>
            <Link href="/characters" className="inline-block bg-primary text-primary-foreground px-6 py-3 font-bold hover:bg-primary/90 transition-colors no-underline">
              View Character Files →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
