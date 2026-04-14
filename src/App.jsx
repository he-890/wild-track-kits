import React from "react";
import { ShoppingBag, Leaf, BookOpen, Footprints, BrushCleaning, PawPrint, Backpack, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Kits empreintes d’animaux",
    text: "Tampons de pattes réalistes imprimés en 3D pour créer des traces dans la boue, observer, dessiner et faire des moulages en plâtre.",
    price: "Dès CHF 29",
    icon: PawPrint,
  },
  {
    title: "Fiches pédagogiques",
    text: "Activités prêtes à l’emploi pour l’école dehors, l’observation, le vocabulaire et la description scientifique.",
    price: "Dès CHF 9",
    icon: BookOpen,
  },
  {
    title: "Matériel de moulage et nettoyage",
    text: "Plâtre, brosses, sacs de rangement et accessoires pensés pour les activités de terrain et la classe.",
    price: "Dès CHF 6",
    icon: BrushCleaning,
  },
  {
    title: "Histoires et guides",
    text: "Histoires illustrées, guidages pour l’enseignant et idées pour prolonger chaque activité dans la nature.",
    price: "Dès CHF 12",
    icon: Leaf,
  },
];

const steps = [
  {
    title: "Créer des traces dehors",
    text: "Appuyez la patte dans la boue, la terre ou un bac préparé pour obtenir des empreintes réalistes.",
  },
  {
    title: "Observer et décrire",
    text: "Les enfants comparent les formes, discutent des indices et dessinent ce qu’ils remarquent comme de petits naturalistes.",
  },
  {
    title: "Mouler avec du plâtre",
    text: "Transformez l’empreinte en moulage solide que les élèves peuvent conserver, comparer et exposer.",
  },
];

const highlights = [
  "Conçu pour l’éducation en plein air et la manipulation",
  "Activités claires et adaptées aux enfants",
  "Accessoires utiles pour la classe et le terrain",
  "Idéal pour enseignants, parents, écoles en forêt et animateurs",
];

export default function PawTrailsStorefront() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white">
              <Footprints className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Boutique d’éducation en plein air</p>
              <h1 className="text-lg font-semibold tracking-tight">Wild Track Kits</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#products" className="transition hover:text-zinc-600">Boutique</a>
            <a href="#how" className="transition hover:text-zinc-600">Comment ça marche</a>
            <a href="#schools" className="transition hover:text-zinc-600">Pour les écoles</a>
            <a href="#faq" className="transition hover:text-zinc-600">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="rounded-full">Connexion</Button>
            <Button className="rounded-full px-5">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Panier (0)
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-zinc-200 bg-[radial-gradient(circle_at_top,rgba(240,240,240,0.9),white_50%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
                <Star className="h-4 w-4" />
                Apprentissage concret de la nature pour les enfants
              </p>
              <h2 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
                Faites vivre les traces animales.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                Kits de pattes réalistes, fiches d’activités, histoires, matériel de moulage en plâtre et accessoires pratiques pour explorer dehors.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full px-6">
                  Explorer la boutique
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6">
                  Voir les packs écoles
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden rounded-[2rem] border-zinc-200 shadow-2xl shadow-zinc-200/50">
              <CardContent className="grid gap-6 p-8">
                <div className="rounded-[1.5rem] bg-zinc-100 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {["Renard", "Loup", "Blaireau", "Cerf"].map((name) => (
                      <div key={name} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
                          <PawPrint className="h-5 w-5" />
                        </div>
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-zinc-500">Patte réaliste</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-zinc-200 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-sm text-zinc-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Boutique</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Tout le nécessaire pour une activité de terrain</h3>
            </div>
            <p className="max-w-2xl text-zinc-600">
              Composez votre kit complet ou choisissez uniquement les ressources pédagogiques et accessoires utiles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.title} className="rounded-[2rem] border-zinc-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-semibold tracking-tight">{product.title}</h4>
                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{product.text}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-medium">{product.price}</span>
                      <Button variant="outline" className="rounded-full">Voir</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="how" className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Comment ça marche</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Une activité simple avec une vraie profondeur pédagogique</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <Card key={step.title} className="rounded-[2rem] border-zinc-200 bg-white">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-lg font-semibold text-white">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-semibold tracking-tight">{step.title}</h4>
                    <p className="mt-3 text-zinc-600">{step.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="schools" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <Card className="rounded-[2rem] border-zinc-200 bg-zinc-900 text-white">
              <CardContent className="p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Backpack className="h-5 w-5" />
                </div>
                <h3 className="text-3xl font-semibold tracking-tight">Pour les enseignants, les écoles et les ateliers nature</h3>
                <p className="mt-4 max-w-2xl text-zinc-300">
                  Proposez des activités marquantes qui mêlent sciences, observation, langage, créativité et lien avec la nature.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Packs petits groupes",
                    "Kits classe complète",
                    "Fiches d’activités imprimables",
                    "Guides pour l’enseignant",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-zinc-200">
              <CardContent className="p-10">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Packs suggérés</p>
                <div className="mt-6 space-y-5">
                  {[
                    ["Kit nature découverte", "2 pattes + plâtre + brosse + fiche d’activité"],
                    ["Pack classe", "6 pattes + guides + fiches imprimables + accessoires"],
                    ["Pack histoires", "Histoire thématique + consignes d’observation + idées de prolongement"],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl bg-zinc-50 p-5">
                      <h4 className="font-semibold">{title}</h4>
                      <p className="mt-1 text-sm text-zinc-600">{desc}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 w-full rounded-full">Demander une offre école</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-10 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">FAQ</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">Questions fréquentes</h3>
            </div>

            <div className="space-y-4">
              {[
                ["Les tampons de pattes sont-ils réalistes ?", "Oui. Ils sont conçus pour créer des empreintes crédibles qui favorisent l’observation et la comparaison."],
                ["Est-ce adapté aux classes ?", "Oui. Les kits sont pensés pour l’école, l’éducation en plein air, les clubs nature et les activités en famille."],
                ["Puis-je acheter uniquement des ressources pédagogiques numériques ?", "Oui. La boutique peut proposer des fiches imprimables, des guides et des histoires séparément."],
                ["Puis-je demander un pack personnalisé ?", "Oui. Un formulaire pour les écoles ou événements peut être ajouté au site."],
              ].map(([q, a]) => (
                <Card key={q} className="rounded-[1.5rem] border-zinc-200 bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold">{q}</h4>
                    <p className="mt-2 text-zinc-600">{a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Wild Track Kits</p>
            <p className="text-sm text-zinc-500">Des empreintes réalistes pour découvrir et apprendre dehors.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-full">Instagram</Button>
            <Button variant="outline" className="rounded-full">Contact</Button>
            <Button className="rounded-full">Acheter</Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

