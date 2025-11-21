import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CountryTag } from "../components/CountryTag";
import { SectionLabel } from "../components/SectionLabel";
import { Button } from "../components/ui/button";

interface ArticlePageProps {
  onNavigate: (page: 'home') => void;
}

export function ArticlePage({ onNavigate }: ArticlePageProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Back button */}
      <div className="max-w-[680px] mx-auto px-6 pt-8">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('home')}
          className="mb-6 sans text-[14px]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to analysis
        </Button>
      </div>

      {/* Article */}
      <article className="max-w-[680px] mx-auto px-6 pb-16">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <SectionLabel>Politics</SectionLabel>
            <CountryTag country="Argentina" />
          </div>

          <h1 className="serif text-foreground mb-6">
            Argentina's Legislative Stalemate Deepens Amid Economic Reforms
          </h1>

          <p className="text-[18px] text-foreground/80 leading-relaxed mb-6 pl-6 border-l-4 border-gold italic">
            The Argentine Congress faces mounting pressure as President Milei's proposed 
            economic reforms meet fierce resistance from traditional political blocs. 
            This analysis examines the constitutional implications and the region's 
            historical patterns of executive-legislative conflict.
          </p>

          <div className="flex items-center gap-4 text-[13px] text-muted-foreground sans mb-8">
            <span>By Eduardo Martínez</span>
            <span>•</span>
            <span>November 18, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <div className="relative aspect-[16/9] mb-8 rounded overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1645462620421-781b28500309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmdlbnRpbmElMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNTM3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Argentine Congress building"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Body */}
        <div className="article-body">
          <p className="drop-cap">
            The current impasse in Argentina's National Congress represents more than a temporary 
            political disagreement. It reflects deep structural tensions within the country's 
            constitutional framework—tensions that have periodically surfaced throughout the nation's 
            democratic history since 1983.
          </p>

          <p>
            President Javier Milei's ambitious economic reform package, which includes fundamental 
            changes to labor law, privatization of state enterprises, and fiscal restructuring, has 
            encountered coordinated opposition from the Peronist bloc, the UCR centrists, and even 
            factions within his own coalition. The legislative arithmetic is unforgiving: without 
            substantial cross-party support, these reforms cannot advance through either chamber.
          </p>

          <h2>Constitutional Constraints</h2>

          <p>
            Argentina's 1994 constitutional reforms sought to limit presidential decree power 
            following the excesses of the Menem era. The current administration, however, has tested 
            these limits with a series of "necessity and urgency decrees" (DNUs) that bypass normal 
            legislative procedure. Legal scholars debate whether economic reform qualifies as the 
            kind of emergency that justifies such extraordinary measures.
          </p>

          <blockquote>
            "What we're witnessing is a fundamental tension between electoral mandates and 
            constitutional process. The president claims a popular mandate for radical reform, 
            but Congress invokes its constitutional prerogatives to deliberate and modify."
            <footer className="text-[14px] text-muted-foreground mt-3 not-italic sans">
              — Dr. María Rodríguez, Constitutional Law Professor, Universidad de Buenos Aires
            </footer>
          </blockquote>

          <p>
            The Supreme Court's reluctance to intervene adds another layer of complexity. Historically, 
            Argentina's high court has avoided direct confrontation with strong executives, preferring 
            procedural delays to outright nullification. This pattern may continue, leaving the political 
            branches to resolve their differences through negotiation or electoral competition.
          </p>

          <h2>Regional Historical Context</h2>

          <p>
            This is not Argentina's first encounter with executive-legislative deadlock. The De la Rúa 
            administration collapsed in 2001 partly because it could not secure legislative support for 
            economic measures deemed necessary by international creditors. The Fernández de Kirchner 
            years saw similar tensions, with the executive frequently resorting to decree power.
          </p>

          <p>
            Across the Southern Cone, Brazil's recent impeachment processes, Chile's constitutional 
            debates, and Uruguay's plebiscitary traditions all demonstrate different approaches to 
            resolving conflicts between branches of government. Argentina's current crisis offers 
            insights into the distinctive features of its political culture: strong presidentialism 
            combined with fragmented party systems and a tradition of street mobilization as political 
            pressure.
          </p>

          <h2>Looking Forward</h2>

          <p>
            The coming months will test whether Argentina's institutions can accommodate significant 
            policy change without constitutional crisis. Three scenarios appear most likely: gradual 
            negotiated compromise that produces diluted versions of the proposed reforms; continued 
            executive reliance on decree power with uncertain judicial outcomes; or early elections 
            that effectively function as a referendum on the reform agenda.
          </p>

          <p>
            For observers of Latin American politics, Argentina once again serves as a laboratory for 
            democratic governance under economic stress. The outcome will influence debates throughout 
            the region about the proper balance between executive energy and legislative deliberation, 
            between rapid reform and constitutional process, between electoral mandates and institutional 
            constraints.
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-[rgba(31,34,39,0.1)]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0"></div>
            <div>
              <h4 className="text-foreground mb-1 sans">Eduardo Martínez</h4>
              <p className="text-[14px] sans text-foreground/70 leading-relaxed">
                Senior editor covering Argentine politics and constitutional law. Previously wrote 
                for <em>Clarín</em> and taught political science at Universidad Nacional de La Plata.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <div className="bg-white border-t border-[rgba(31,34,39,0.1)] py-12">
        <div className="max-w-[680px] mx-auto px-6">
          <h3 className="serif text-foreground mb-6">Related Analysis</h3>
          <div className="space-y-6">
            {[
              {
                section: 'Politics',
                country: 'Brazil',
                title: "The Evolution of Executive Power in Post-Redemocratization Brazil",
                author: "Ana Costa",
                date: "Nov 12"
              },
              {
                section: 'Economy',
                country: 'Argentina',
                title: "Currency Controls and Capital Flight: Argentina's Recurring Dilemma",
                author: "Pablo Ramírez",
                date: "Nov 10"
              }
            ].map((article, index) => (
              <article 
                key={index}
                className="pb-6 border-b border-[rgba(31,34,39,0.08)] last:border-0 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <SectionLabel>{article.section}</SectionLabel>
                  <CountryTag country={article.country} />
                </div>
                <h4 className="text-[18px] serif text-foreground group-hover:text-accent transition-colors mb-2">
                  {article.title}
                </h4>
                <div className="text-[13px] text-muted-foreground sans">
                  {article.author} • {article.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
