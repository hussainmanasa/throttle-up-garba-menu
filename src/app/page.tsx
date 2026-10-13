import { DietMark } from "@/components/DietMark";
import { Mandala } from "@/components/Mandala";
import { Ornament } from "@/components/Ornament";
import { menu, type MenuItem } from "@/data/menu";
import { site } from "@/data/site";

const formatPrice = (price: number) => price.toLocaleString("en-IN");

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-baseline gap-3 py-2.5">
      <DietMark diet={item.diet} className="mt-[0.3rem] self-start" />
      <span className="min-w-0">
        <span className="font-medium">{item.name}</span>
        {item.note && <span className="block text-sm text-muted">{item.note}</span>}
      </span>
      {/* Dotted leader from the name to the price, as on a printed menu card. */}
      <span aria-hidden className="mb-1 min-w-6 flex-1 self-end border-b border-dotted border-muted/40" />
      <span className="shrink-0 font-display text-lg font-medium tabular-nums tracking-wide">
        <span className="sr-only">Rupees </span>
        <span aria-hidden className="mr-0.5 text-sm text-accent-text">₹</span>
        {formatPrice(item.price)}
      </span>
    </li>
  );
}

export default function GarbaMenuPage() {
  return (
    <>
      <div aria-hidden className="toran" />

      <header className="relative isolate overflow-hidden px-4 pb-10 pt-10 text-center sm:pt-14">
        <Mandala className="animate-spin-slow pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[min(130vw,46rem)] -translate-x-1/2 -translate-y-1/2 opacity-[0.13]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_35%,rgba(200,33,39,0.22),transparent_65%)]"
        />

        {/* eslint-disable-next-line @next/next/no-img-element -- static export; logo is already optimised */}
        <img
          src={site.logo.src}
          width={site.logo.width}
          height={site.logo.height}
          alt={`${site.name} Sports Lounge`}
          className="mx-auto block h-auto w-[min(100%,18rem)] rounded-sm shadow-[0_10px_40px_-10px_rgba(200,33,39,0.6)]"
        />

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.35em] text-accent-text">Navratri Special</p>
        <h1 className="mt-3 font-display text-6xl font-bold uppercase leading-none tracking-[0.04em] sm:text-8xl">
          Garba <span className="text-accent">Night</span>
        </h1>
        <Ornament className="mt-6" />
        <p className="mt-5 text-muted">Dance all night. Refuel between the rounds.</p>
      </header>

      <nav
        aria-label="Menu sections"
        className="sticky top-0 z-20 border-y border-border bg-background/85 backdrop-blur-md"
      >
        <ul className="no-scrollbar mx-auto flex max-w-2xl gap-2 overflow-x-auto px-4 py-3 sm:justify-center">
          {menu.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className="inline-flex min-h-9 items-center rounded-full border border-border px-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto max-w-2xl px-3 pb-12 pt-8 sm:px-4">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div aria-hidden className="h-1 bg-accent" />
          {menu.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className={`px-5 py-8 sm:px-8 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent-text">
                {section.kicker}
              </p>
              <h2
                id={`${section.id}-heading`}
                className="mt-1.5 text-center font-display text-3xl font-semibold uppercase tracking-[0.06em] sm:text-4xl"
              >
                {section.title}
              </h2>

              <div className="mt-5 space-y-6">
                {section.groups.map((group, j) => (
                  <div key={group.title ?? j}>
                    {group.title && (
                      <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                        {group.title}
                        <span aria-hidden className="h-px flex-1 bg-border" />
                      </h3>
                    )}
                    <ul className="mt-1">
                      {group.items.map((item) => (
                        <ItemRow key={item.name} item={item} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-8 text-center text-sm text-muted">
          <p className="flex items-center justify-center gap-5">
            <span className="inline-flex items-center gap-2">
              <DietMark diet="veg" /> Veg
            </span>
            <span className="inline-flex items-center gap-2">
              <DietMark diet="non-veg" /> Non-veg
            </span>
          </p>
          <p className="mt-3">All prices in ₹ · Taxes as applicable</p>
          <Ornament className="mt-8" />
          <p className="mt-4 font-display text-base uppercase tracking-[0.3em] text-foreground">
            {site.name} <span className="text-accent-text">·</span> Sports Lounge
          </p>
        </footer>
      </main>

      <div aria-hidden className="toran rotate-180" />
    </>
  );
}
