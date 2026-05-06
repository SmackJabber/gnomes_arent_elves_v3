import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

/**
 * Characters page - Individual case files for each gnome
 * Design: Vintage conspiracy file folder aesthetic with expandable details
 */
export default function Characters() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const cases = [
    {
      id: "keebler",
      name: "The Keebler Gnome",
      alias: "Marketed as: The Keebler Elf",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663526598276/7mdpff44cJYeQRpNSqH5SQ/keebler-elf-investigation-P36pMvHwnSAPxi6wvpDQCE.webp",
      status: "ACTIVE",
      evidence: [
        "Wears a distinctive pointed RED HAT—classic gnome identifier",
        "Lives in a TREEHOUSE—earthbound gnome habitat",
        "Engages in COOKIE PRODUCTION—blue-collar gnome work",
        "Works as part of an ORGANIZED TEAM—typical gnome community structure",
        "Has a BEARD—gnome characteristic",
        "Displays PRACTICAL CRAFTSMANSHIP—gnome expertise"
      ],
      details: "The Keebler Gnome has been operating since 1968 under the false designation of 'elf.' Analysis of visual records confirms all identifying characteristics of a gnome. The pointed hat, the bearded appearance, the practical work ethic, and the community-based production model are all consistent with gnome behavior. The treehouse residence is a typical gnome dwelling adapted for industrial cookie production."
    },
    {
      id: "snapcracklepop",
      name: "Snap, Crackle & Pop",
      alias: "Marketed as: Rice Krispies Elves",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663526598276/7mdpff44cJYeQRpNSqH5SQ/snap-crackle-pop-gnomes-CGLUgcJTPZgji6TmHQMx7p.webp",
      status: "ACTIVE",
      evidence: [
        "Three gnomes wearing GREEN and ORANGE POINTED HATS",
        "Engaged in CEREAL MANUFACTURING—industrial gnome work",
        "Wearing CHEF'S UNIFORMS—practical gnome attire",
        "Work in COORDINATED TEAM EFFORT—gnome community behavior",
        "Display BEARDS and ROUND FEATURES—gnome physiology",
        "Historical records show they were originally identified as GNOMES before rebranding"
      ],
      details: "Snap, Crackle, and Pop represent a clear case of deliberate misidentification. Historical documentation from Kellogg's archives reveals these characters were originally designed as gnomes. The rebranding to 'elves' occurred purely for marketing purposes. The pointed hats, chef's uniforms, and coordinated work in cereal production are unmistakably gnome characteristics. The fact that they work together in an organized kitchen environment further confirms gnome identity."
    },
    {
      id: "santa",
      name: "Santa's Workshop Helpers",
      alias: "Marketed as: Santa's Elves",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663526598276/7mdpff44cJYeQRpNSqH5SQ/christmas-elves-gnomes-VniQesYmhqpFZ2zRScrVUd.webp",
      status: "ACTIVE",
      evidence: [
        "Wear RED and GREEN POINTED HATS—definitive gnome marker",
        "Engaged in TOY MANUFACTURING—skilled gnome craftsmanship",
        "Work in ORGANIZED WORKSHOP ENVIRONMENT—gnome community structure",
        "Display BEARDS and STOCKY BUILD—gnome physiology",
        "Demonstrate PRACTICAL PROBLEM-SOLVING—gnome expertise",
        "Live in EARTHBOUND WORKSHOP—gnome habitat (not magical realm)"
      ],
      details: "Perhaps the most widespread misidentification involves Santa's workshop helpers. These gnomes have been systematically called 'elves' for generations, but the evidence is irrefutable. The pointed hats, the beards, the organized workshop structure, the focus on practical toy manufacturing—all are gnome characteristics. The North Pole workshop is a physical, earthbound location where gnomes work cooperatively, not a magical realm where elves would operate."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-block border-4 border-accent px-4 py-2 mb-6 bg-card">
            <p className="text-accent font-bold text-xs tracking-widest uppercase">CLASSIFIED FILES</p>
          </div>
          <h1 className="font-georgia text-5xl font-bold text-foreground mb-4">
            Case Files
          </h1>
          <p className="text-lg text-foreground/70 font-georgia italic">
            Individual investigations into three major gnome misidentifications
          </p>
        </div>

        {/* Case Files Grid */}
        <div className="space-y-6">
          {cases.map((caseFile) => (
            <div
              key={caseFile.id}
              className="bg-card border-4 border-primary overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Case Header */}
              <div className="bg-primary text-primary-foreground p-6 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="font-georgia text-3xl font-bold">{caseFile.name}</h2>
                    <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-bold rounded">
                      {caseFile.status}
                    </span>
                  </div>
                  <p className="text-primary-foreground/80 font-georgia italic">{caseFile.alias}</p>
                </div>
              </div>

              {/* Case Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={caseFile.image}
                      alt={caseFile.name}
                      className="w-full h-auto border-4 border-accent"
                    />
                  </div>

                  {/* Evidence List */}
                  <div className="md:col-span-2">
                    <h3 className="font-georgia text-xl font-bold text-foreground mb-4">
                      Key Evidence
                    </h3>
                    <ul className="space-y-2">
                      {caseFile.evidence.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/80">
                          <span className="text-accent font-bold flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expandable Details */}
                <div className="border-t-2 border-border pt-6">
                  <button
                    onClick={() => setExpandedCase(expandedCase === caseFile.id ? null : caseFile.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between hover:opacity-70 transition-opacity">
                      <h4 className="font-georgia text-lg font-bold text-primary">
                        Investigator Notes
                      </h4>
                      <span className="text-2xl text-accent">
                        {expandedCase === caseFile.id ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  {expandedCase === caseFile.id && (
                    <div className="mt-4 p-4 bg-background border-l-4 border-accent">
                      <p className="text-foreground/80 leading-relaxed font-georgia">
                        {caseFile.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-card p-8 border-4 border-accent">
          <h3 className="font-georgia text-2xl font-bold text-foreground mb-4">
            Conclusion
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The evidence is overwhelming. Three major cases, three clear patterns of misidentification. The Keebler Gnome, Snap/Crackle/Pop, and Santa's workshop helpers are unquestionably gnomes—not elves. They wear pointed hats, not pointed ears. They work with their hands in practical crafts. They live in earthbound communities. They demonstrate all the hallmarks of gnome behavior and physiology.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            This is not a matter of opinion. This is a matter of folklore taxonomy, visual evidence, and behavioral analysis. The truth is clear: gnomes aren't elves, and these iconic characters are gnomes.
          </p>
        </div>
      </main>
    </div>
  );
}
