import { useState } from "react";
import { FileText, Newspaper, Copy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { SectionLabel } from "../components/SectionLabel";
import { CountryTag } from "../components/CountryTag";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Article = {
  section: string;
  country: string;
  countryId: string;
  title: string;
  standfirst: string;
  author: string;
  date: string;
  image?: string;
  featured?: boolean;
};

type ArticleDraft = Article & {
  insertAtTop: boolean;
};

type Brief = {
  source: string;
  title: string;
  summary: string;
  country: string;
  countryId: string;
  date: string;
};

type BriefDraft = Brief & {
  insertAtTop: boolean;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function AdminPage() {
  const [activeTab, setActiveTab] = useState<"analysis" | "briefing">(
    "analysis",
  );

  const [articleDraft, setArticleDraft] = useState<ArticleDraft>({
    section: "",
    country: "",
    countryId: "",
    title: "",
    standfirst: "",
    author: "",
    date: "",
    image: "",
    featured: false,
    insertAtTop: true,
  });
  const [articleCountryIdDirty, setArticleCountryIdDirty] = useState(false);
  const [articleJson, setArticleJson] = useState("");

  const [briefDraft, setBriefDraft] = useState<BriefDraft>({
    source: "",
    title: "",
    summary: "",
    country: "",
    countryId: "",
    date: "",
    insertAtTop: true,
  });
  const [briefCountryIdDirty, setBriefCountryIdDirty] = useState(false);
  const [briefJson, setBriefJson] = useState("");

  const handleCopy = async (payload: string) => {
    if (!payload) return;
    if (!("clipboard" in navigator)) {
      return;
    }
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      // best-effort, no user-facing error required
    }
  };

  const generateArticleJson = () => {
    const { insertAtTop, ...article } = articleDraft;
    const cleaned: Article = {
      ...article,
      image: article.image || undefined,
      featured: article.featured ? true : undefined,
    };
    const json = JSON.stringify(cleaned, null, 2);
    setArticleJson(json);
  };

  const generateBriefJson = () => {
    const { insertAtTop, ...brief } = briefDraft;
    const cleaned: Brief = {
      ...brief,
    };
    const json = JSON.stringify(cleaned, null, 2);
    setBriefJson(json);
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-wide text-muted-foreground sans mb-1">
            Writing Studio
          </p>
          <h1 className="serif text-3xl text-foreground mb-2">
            Southern Brief editorial workspace
          </h1>
          <p className="text-[14px] sans text-muted-foreground max-w-2xl">
            Compose opinion pieces and briefs locally. When you are ready,
            generate JSON and paste it into the corresponding data file in{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
              src/data
            </code>
            .
          </p>
        </header>

        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as "analysis" | "briefing")
          }
        >
          <TabsList>
            <TabsTrigger value="analysis">
              <FileText className="size-4" />
              <span>Opinion</span>
            </TabsTrigger>
            <TabsTrigger value="briefing">
              <Newspaper className="size-4" />
              <span>Briefing</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Opinion form */}
              <section className="bg-card rounded border border-[rgba(31,34,39,0.08)] p-6 space-y-5">
                <h2 className="serif text-[20px] text-foreground">
                  Opinion details
                </h2>

                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Section
                      </Label>
                      <Input
                        value={articleDraft.section}
                        onChange={(e) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            section: e.target.value,
                          }))
                        }
                        placeholder="Politics, Economy, Culture…"
                      />
                    </div>
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Country
                      </Label>
                      <Input
                        value={articleDraft.country}
                        onChange={(e) => {
                          const value = e.target.value;
                          setArticleDraft((prev) => ({
                            ...prev,
                            country: value,
                            countryId: articleCountryIdDirty
                              ? prev.countryId
                              : slugify(value),
                          }));
                        }}
                        placeholder="Argentina"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Country ID (slug)
                      </Label>
                      <Input
                        value={articleDraft.countryId}
                        onChange={(e) => {
                          setArticleCountryIdDirty(true);
                          setArticleDraft((prev) => ({
                            ...prev,
                            countryId: e.target.value,
                          }));
                        }}
                        placeholder="argentina"
                      />
                    </div>
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Date label
                      </Label>
                      <Input
                        value={articleDraft.date}
                        onChange={(e) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            date: e.target.value,
                          }))
                        }
                        placeholder="Nov 21, 14:30"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Headline
                      </Label>
                      <Input
                        value={articleDraft.title}
                        onChange={(e) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Argentina's Legislative Stalemate Deepens Amid Economic Reforms"
                      />
                    </div>

                    <div>
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Standfirst / summary
                      </Label>
                      <Textarea
                        value={articleDraft.standfirst}
                        onChange={(e) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            standfirst: e.target.value,
                          }))
                        }
                        placeholder="One or two sentences summarising the argument and context…"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Author
                      </Label>
                      <Input
                        value={articleDraft.author}
                        onChange={(e) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            author: e.target.value,
                          }))
                        }
                        placeholder="Byline"
                      />
                    </div>
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Image URL (optional)
                      </Label>
                      <Input
                        value={articleDraft.image}
                        onChange={(e) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            image: e.target.value,
                          }))
                        }
                        placeholder="https://…"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <label className="inline-flex items-center gap-2 text-[13px] sans text-foreground">
                      <Checkbox
                        checked={articleDraft.featured}
                        onCheckedChange={(checked) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            featured: checked === true,
                          }))
                        }
                      />
                      <span>Mark as featured opinion</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-[13px] sans text-foreground">
                      <Checkbox
                        checked={articleDraft.insertAtTop}
                        onCheckedChange={(checked) =>
                          setArticleDraft((prev) => ({
                            ...prev,
                            insertAtTop: checked !== false,
                          }))
                        }
                      />
                      <span>Insert at top of list</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Analysis preview */}
              <section className="bg-card rounded border border-[rgba(31,34,39,0.08)] p-6">
                <h2 className="serif text-[20px] text-foreground mb-4">
                  Live preview
                </h2>
                <article className="bg-card rounded border border-[rgba(31,34,39,0.08)] p-5 cursor-default group">
                  {articleDraft.image && (
                    <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded">
                      <ImageWithFallback
                        src={articleDraft.image}
                        alt={articleDraft.title || "Preview image"}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    {articleDraft.section && (
                      <SectionLabel>{articleDraft.section}</SectionLabel>
                    )}
                    {articleDraft.country && (
                      <CountryTag country={articleDraft.country} />
                    )}
                  </div>

                  <h3 className="text-[20px] serif text-foreground mb-2">
                    {articleDraft.title || "Headline preview"}
                  </h3>

                  {articleDraft.standfirst && (
                    <p className="text-[14px] text-foreground/70 leading-relaxed mb-3">
                      {articleDraft.standfirst}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-[12px] text-muted-foreground sans">
                    {articleDraft.author && <span>{articleDraft.author}</span>}
                    {articleDraft.author && articleDraft.date && <span>•</span>}
                    {articleDraft.date && <span>{articleDraft.date}</span>}
                  </div>
                </article>
              </section>
            </div>

            <section className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-6 items-start">
              <div>
                <Button
                  type="button"
                  onClick={generateArticleJson}
                  className="sans text-[14px]"
                  variant="outline"
                >
                  Generate JSON
                </Button>
                <p className="text-[12px] sans text-muted-foreground mt-2">
                  This builds a single analysis object matching{" "}
                  <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                    src/data/articles.json
                  </code>
                  . When &ldquo;Insert at top&rdquo; is checked, paste it near
                  the start of the array.
                </p>
              </div>
              {articleJson && (
                <div className="justify-self-end">
                  <Button
                    type="button"
                    onClick={() => handleCopy(articleJson)}
                    size="sm"
                    variant="ghost"
                    className="sans text-[13px]"
                  >
                    <Copy className="size-3.5" />
                    Copy JSON
                  </Button>
                </div>
              )}
            </section>

            {articleJson && (
              <section className="mt-4">
                <Textarea
                  readOnly
                  value={articleJson}
                  className="font-mono text-xs leading-snug h-48"
                />
              </section>
            )}
          </TabsContent>

          <TabsContent value="briefing" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Briefing form */}
              <section className="bg-card rounded border border-[rgba(31,34,39,0.08)] p-6 space-y-5">
                <h2 className="serif text-[20px] text-foreground">
                  Briefing details
                </h2>

                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Source
                      </Label>
                      <Input
                        value={briefDraft.source}
                        onChange={(e) =>
                          setBriefDraft((prev) => ({
                            ...prev,
                            source: e.target.value,
                          }))
                        }
                        placeholder="La Nación, Reuters…"
                      />
                    </div>
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Country
                      </Label>
                      <Input
                        value={briefDraft.country}
                        onChange={(e) => {
                          const value = e.target.value;
                          setBriefDraft((prev) => ({
                            ...prev,
                            country: value,
                            countryId: briefCountryIdDirty
                              ? prev.countryId
                              : slugify(value),
                          }));
                        }}
                        placeholder="Brazil"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Country ID (slug)
                      </Label>
                      <Input
                        value={briefDraft.countryId}
                        onChange={(e) => {
                          setBriefCountryIdDirty(true);
                          setBriefDraft((prev) => ({
                            ...prev,
                            countryId: e.target.value,
                          }));
                        }}
                        placeholder="brazil"
                      />
                    </div>
                    <div className="flex-1">
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Date label
                      </Label>
                      <Input
                        value={briefDraft.date}
                        onChange={(e) =>
                          setBriefDraft((prev) => ({
                            ...prev,
                            date: e.target.value,
                          }))
                        }
                        placeholder="Nov 21, 14:30"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Headline
                      </Label>
                      <Input
                        value={briefDraft.title}
                        onChange={(e) =>
                          setBriefDraft((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Short brief-style headline"
                      />
                    </div>

                    <div>
                      <Label className="sans text-[13px] text-muted-foreground mb-1 block">
                        Summary sentence
                      </Label>
                      <Textarea
                        value={briefDraft.summary}
                        onChange={(e) =>
                          setBriefDraft((prev) => ({
                            ...prev,
                            summary: e.target.value,
                          }))
                        }
                        placeholder="One or two sentences describing the development."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <label className="inline-flex items-center gap-2 text-[13px] sans text-foreground">
                      <Checkbox
                        checked={briefDraft.insertAtTop}
                        onCheckedChange={(checked) =>
                          setBriefDraft((prev) => ({
                            ...prev,
                            insertAtTop: checked !== false,
                          }))
                        }
                      />
                      <span>Insert at top of list</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Briefing preview */}
              <section className="bg-card rounded border border-[rgba(31,34,39,0.08)] p-6">
                <h2 className="serif text-[20px] text-foreground mb-4">
                  Live preview
                </h2>
                <article className="bg-card rounded border border-[rgba(31,34,39,0.08)] p-5 cursor-default">
                  <span className="text-[12px] sans text-muted-foreground font-semibold">
                    {briefDraft.source || "Source"}
                  </span>
                  <h3 className="text-[14px] sans text-foreground my-1 leading-snug">
                    {briefDraft.title || "Brief headline preview"}
                  </h3>
                  {briefDraft.summary && (
                    <p className="text-[13px] sans text-foreground/60 leading-relaxed mb-2">
                      {briefDraft.summary}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] sans text-muted-foreground">
                      {briefDraft.date || "Date"}
                    </span>
                    {briefDraft.country && (
                      <CountryTag country={briefDraft.country} />
                    )}
                  </div>
                </article>
              </section>
            </div>

            <section className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-6 items-start">
              <div>
                <Button
                  type="button"
                  onClick={generateBriefJson}
                  className="sans text-[14px]"
                  variant="outline"
                >
                  Generate JSON
                </Button>
                <p className="text-[12px] sans text-muted-foreground mt-2">
                  This builds a single brief object matching{" "}
                  <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                    src/data/briefs.json
                  </code>
                  . When &ldquo;Insert at top&rdquo; is checked, paste it near
                  the start of the array.
                </p>
              </div>
              {briefJson && (
                <div className="justify-self-end">
                  <Button
                    type="button"
                    onClick={() => handleCopy(briefJson)}
                    size="sm"
                    variant="ghost"
                    className="sans text-[13px]"
                  >
                    <Copy className="size-3.5" />
                    Copy JSON
                  </Button>
                </div>
              )}
            </section>

            {briefJson && (
              <section className="mt-4">
                <Textarea
                  readOnly
                  value={briefJson}
                  className="font-mono text-xs leading-snug h-40"
                />
              </section>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
