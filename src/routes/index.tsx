import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import carpetHero from "@/assets/carpet-hero.jpg";
import carpetCream from "@/assets/carpet-cream.jpg";
import quoteCarpet from "@/assets/quote-carpet.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import bridePortrait from "@/assets/bride-p.jpg";
import groomPortrait from "@/assets/groom-p.jpg";

import { Reveal } from "@/components/azure/Reveal";
import { Atmosphere, LightLeak } from "@/components/azure/Atmosphere";
import { Opening, TIDE_EVENT } from "@/components/azure/Opening";
import { Countdown } from "@/components/azure/Countdown";
import { Music } from "@/components/azure/Music";
import { SmoothScroll } from "@/components/azure/SmoothScroll";
import {
  ArabesqueIcon,
  ArchIcon,
  BotehIcon,
  Divider,
  LanternIcon,
  MedallionIcon,
  PinIcon,
  RingsIcon,
  StarIcon,
} from "@/components/azure/LineArt";
import { useParallax } from "@/components/azure/use-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaheen OP & Alshida — Persian Carpet Wedding Invitation" },
      {
        name: "description",
        content:
          "شاهين وألشيدا — Shaheen OP & Alshida invite you to their wedding on 8 August 2026. A Persian-carpet, crimson-and-cream digital invitation with Arabic calligraphy, countdown and RSVP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Shaheen OP & Alshida — 08.08.2026" },
      {
        property: "og:description",
        content:
          "A crimson and cream Persian-carpet wedding invitation. Arabic calligraphy, live countdown and RSVP.",
      },
      { name: "twitter:title", content: "Shaheen OP & Alshida — 08.08.2026" },
      {
        name: "twitter:description",
        content: "Shaheen OP & Alshida · 8 August 2026 · Qasr Al Warda, Dubai.",
      },
    ],
  }),
  component: CrimsonLoom,
});

const MAPS_URL =
  "https://maps.app.goo.gl/DKGqEoxW6wSmKAwh9";

const postcards = [
  {
    src: p1,
    rotate: "-2.5deg",
    caption: "The first knot on the loom",
    ar: "أوّل عُقدة",
    place: "Isfahan",
    stamp: "I",
    year: "Spring 2020",
  },
  {
    src: p2,
    rotate: "1.8deg",
    caption: "A courtyard, a lantern, one long evening",
    ar: "فِناءٌ ومصباح",
    place: "Shiraz",
    stamp: "II",
    year: "Autumn 2022",
  },
  {
    src: p3,
    rotate: "-1.4deg",
    caption: "Dates, roses, and a promise",
    ar: "تمرٌ ووعد",
    place: "Dubai",
    stamp: "III",
    year: "Winter 2024",
  },
  {
    src: p4,
    rotate: "2.2deg",
    caption: "Henna drying, heart racing",
    ar: "الحنّاء",
    place: "Kozhikode",
    stamp: "IV",
    year: "Spring 2026",
  },
  {
    src: p5,
    rotate: "-1.8deg",
    caption: "Two rings on an open page",
    ar: "خاتمان",
    place: "The Nikah",
    stamp: "V",
    year: "August 2026",
  },
];

const itinerary = [
  {
    day: "Day One",
    ar: "الحنّاء",
    date: "6 August",
    title: "Mehndi & Henna Night",
    detail:
      "Carpets rolled out under lantern light, oud and tabla, henna cones passed hand to hand until the courtyard smells of rose and clove.",
    Icon: BotehIcon,
  },
  {
    day: "Day Two",
    ar: "عقد القران",
    date: "7 August",
    title: "The Nikah",
    detail:
      "The contract read beneath the great arch at noon, witnessed by both families, followed by dates, gahwa and a long unhurried lunch.",
    Icon: ArchIcon,
  },
  {
    day: "Day Three",
    ar: "الوليمة",
    date: "8 August",
    title: "The Walima",
    detail:
      "Vows at golden hour on the crimson carpet, then a banquet of eighty, live strings, and dancing until the lanterns burn low.",
    Icon: RingsIcon,
  },
];

const couple = [
  {
    name:"Shaheen OP"
  },
  {
    name:"Alshida"
  }
];
function CrimsonLoom() {
  const scroll = useParallax();

  return (
    <div id="top" className="grain relative overflow-x-clip bg-background">
      <SmoothScroll />
      <Opening />
      <Music />

      {/* ————————————————— HERO ————————————————— */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-crimson-deep">
        <img
          src={carpetHero}
          alt="Antique Persian carpet with a crimson field and gold medallion"
          width={1920}
          height={1280}
          className="film-tint absolute inset-0 h-[118%] w-full object-cover"
          style={{ transform: `translate3d(0, ${scroll * 0.28}px, 0) scale(1.06)` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.2 0.085 24 / 0.82) 0%, oklch(0.24 0.095 24 / 0.6) 45%, oklch(0.2 0.085 24 / 0.86) 100%)",
          }}
        />
        <div className="girih pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <LightLeak />
        <Atmosphere count={26} />

        {/* slowly turning medallion behind the title */}
        <MedallionIcon className="animate-slow-spin pointer-events-none absolute h-[46rem] w-[46rem] text-gold/10" />
        <StarIcon className="animate-slow-spin-reverse pointer-events-none absolute h-[30rem] w-[30rem] text-gold/10" />

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-cream">
          <Reveal>
            <p className="arabic text-[clamp(1rem,2.6vw,1.35rem)] text-gold-soft">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم
            </p>
          </Reveal>

          <Reveal delay={180}>
            <h1 className="mt-8 flex flex-col items-center">
              <span className="arabic-display gold-text text-[clamp(2.6rem,9vw,5.4rem)] leading-tight">
                شاهين &amp; الشيدا
              </span>
              <span className="display-xl mt-6 text-[clamp(1.8rem,7vw,4.4rem)]">
                Shaheen OP
              </span>
              <span className="script gold-text my-1 text-[clamp(1.6rem,4vw,2.4rem)]">و</span>
              <span className="display-xl text-[clamp(1.8rem,7vw,4.4rem)] font-light italic">
                Alshida
              </span>
            </h1>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10">
              <Divider>
                <ArabesqueIcon className="h-6 w-28" />
              </Divider>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <p className="label-line mt-9 text-cream">
              08 · 08 · 2026 &nbsp;—&nbsp; Nambiyath Auditorium
            </p>
          </Reveal>
</div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/85">
          <span className="eyebrow">Scroll</span>
          <span className="animate-scroll-hint block h-12 w-px bg-gold-soft" />
        </div>
      </section>

      {/* ————————————————— COUNTDOWN ————————————————— */}
      <section
        id="countdown"
        className="grain vignette relative overflow-hidden py-24 text-cream sm:py-32"
        style={{ background: "var(--gradient-dusk)" }}
      >
        <div className="girih pointer-events-none absolute inset-0 opacity-45" aria-hidden />
        <LightLeak />
        <Atmosphere count={14} seed={13} />
        <LanternIcon className="animate-sway pointer-events-none absolute -left-8 top-10 h-48 w-48 text-gold/20" />
        <LanternIcon className="animate-sway pointer-events-none absolute -right-6 top-24 h-36 w-36 text-gold/15" />
        <BotehIcon className="pointer-events-none absolute bottom-10 left-10 hidden h-24 w-24 text-gold/15 lg:block" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="arabic text-[clamp(1rem,2.4vw,1.3rem)] text-gold-soft">
              العدّ التنازلي
            </p>
            <h2 className="display-xl mt-5 text-[clamp(1.6rem,4.6vw,2.9rem)]">
              Counting the Knots
            </h2>
            <p className="arabic mx-auto mt-6 max-w-xl text-[clamp(1.05rem,2.4vw,1.4rem)] text-cream/90">
              «كلُّ عُقدةٍ في السجّادة تُقرّبنا خُطوة»
            </p>
            <p className="pull-quote mx-auto mt-3 max-w-xl text-[clamp(0.95rem,2vw,1.15rem)] text-cream/75">
              “Every knot in the carpet brings us one step closer.”
            </p>
            <div className="mt-8 flex justify-center">
              <Divider>
                <StarIcon className="h-6 w-6" />
              </Divider>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-14">
              <Countdown />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-col items-center gap-6">
              <ArabesqueIcon className="h-6 w-44 text-gold/65" />
              <p className="label-line text-cream/85">
                Saturday, 8 August 2026 · 11:30 · Nambiyath Auditorium
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— INVITATION ————————————————— */}
      <section
        id="story"
        className="weave relative overflow-hidden py-28 sm:py-40"
        style={{ background: "var(--gradient-cream)" }}
      >
        <img
          src={carpetCream}
          alt=""
          aria-hidden
          loading="lazy"
          width={1408}
          height={1408}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14]"
        />
        <Atmosphere count={12} seed={19} />
        <BotehIcon className="animate-sway pointer-events-none absolute -left-8 top-16 h-52 w-52 text-crimson/15" />
        <BotehIcon className="animate-sway pointer-events-none absolute -right-6 bottom-16 h-40 w-40 -scale-x-100 text-crimson/12" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow text-crimson/75">Chapter One</p>
            <p className="arabic-display mt-5 text-[clamp(1.8rem,5.6vw,3rem)] text-crimson">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            </p>
            <p className="pull-quote mx-auto mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.25rem)] text-foreground/75">
              “And among His signs is that He created for you mates from among yourselves, that
              you may find tranquility in them; and He placed between you affection and mercy.”
              <span className="eyebrow mt-3 block text-crimson/60">Ar-Rum 30:21</span>
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="display-xl mt-12 text-[clamp(1.7rem,4.6vw,3rem)] text-crimson-deep">
              Together with their families
            </h2>
            <p className="mt-8 font-serif text-[clamp(1.1rem,2.2vw,1.45rem)] font-light leading-relaxed text-foreground/80">
              Two houses, two looms, one pattern. We would be honoured to have you walk the
              length of the carpet with us on the eighth of August.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="arabic-display mt-12 gold-text text-[clamp(2rem,6vw,3.2rem)]">
              شرِّفونا بحضوركم
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-12 flex flex-col items-center gap-8">
              <Divider>
                <MedallionIcon className="h-7 w-7" />
              </Divider>
              <dl className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
                {[
                  ["The Date", "التاريخ", "Saturday, 8 August 2026"],
                  ["The Hour", "الساعة", "Golden hour, 11:30"],
                  ["The Place", "المكان", "Nambiyath Auditorium"],
                ].map(([k, ar, v]) => (
                  <div key={k} className="card-lux frame-gold px-5 py-7">
                    <dt className="eyebrow text-[0.78rem] font-semibold tracking-[0.3em] text-crimson-deep">
                      {k}
                    </dt>
                    <p className="arabic mt-2 text-lg text-crimson/80">{ar}</p>
                    <dd className="font-display mt-3 text-[clamp(1.05rem,2.2vw,1.35rem)] font-semibold leading-snug tracking-wide text-crimson-deep">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— QUOTE BAND ————————————————— */}
      <QuoteBand
        image={quoteCarpet}
        alt="A vast candlelit hall laid with an antique crimson Persian carpet"
        arabic="الحُبُّ نَسيجٌ لا يَبلى"
        quote="love is a weave that never wears thin"
        attribution="An old Persian saying"
        offset={scroll}
      />

      {/* ————————————————— THE COUPLE ————————————————— */}
<section
  id="couple"
  className="relative overflow-hidden py-32 sm:py-44"
  style={{ background: "var(--gradient-cream)" }}
>

  <Atmosphere count={12} seed={33} />

  {/* background ornament */}
  <MedallionIcon className="pointer-events-none absolute left-1/2 top-20 h-[35rem] w-[35rem] -translate-x-1/2 text-crimson/5" />

  <div className="relative z-10 mx-auto max-w-6xl px-6">

    <Reveal>
      <div className="text-center">

        <p className="eyebrow text-crimson/70">
          The Beginning of Forever
        </p>

        <h2 className="display-xl mt-6 text-crimson-deep text-[clamp(2rem,5vw,3.5rem)]">
          Shaheen & Alshida
        </h2>

        <div className="mt-8 flex justify-center">
          <Divider>
            <RingsIcon className="h-7 w-7 text-gold" />
          </Divider>
        </div>

      </div>
    </Reveal>


    <div className="mt-24 grid grid-cols-1 items-center gap-16 md:grid-cols-2">


      {/* GROOM */}
      <Reveal delay={150}>
        <div className="group text-center">

          <div className="relative mx-auto max-w-sm">

            <div className="
              absolute -inset-5
              border border-gold/50
              rounded-t-full
            "/>


            <img
              src={groomPortrait}
              alt="Shaheen OP"
              className="
              relative
              aspect-[3/4]
              w-full
              object-cover
              rounded-t-full
              film-tint
              "
            />


            <div className="
              absolute inset-0
              rounded-t-full
              bg-gradient-to-t
              from-crimson-deep/40
              to-transparent
            "/>

          </div>


          <p className="mt-10 eyebrow text-gold">
            THE GROOM
          </p>


          <h3 className="
            mt-4
            font-display
            text-4xl
            text-crimson-deep
          ">
            Shaheen OP
          </h3>


          <p className="
            mt-3
            font-serif
            italic
            text-crimson/70
          ">
            A new chapter begins
          </p>


        </div>
      </Reveal>



      {/* BRIDE */}
      <Reveal delay={300}>
        <div className="group text-center">

          <div className="relative mx-auto max-w-sm">

            <div className="
              absolute -inset-5
              border border-gold/50
              rounded-t-full
            "/>


            <img
              src={bridePortrait}
              alt="Alshida"
              className="
              relative
              aspect-[3/4]
              w-full
              object-cover
              rounded-t-full
              film-tint
              "
            />


            <div className="
              absolute inset-0
              rounded-t-full
              bg-gradient-to-t
              from-crimson-deep/40
              to-transparent
            "/>

          </div>


          <p className="mt-10 eyebrow text-gold">
            THE BRIDE
          </p>


          <h3 className="
            mt-4
            font-display
            text-4xl
            text-crimson-deep
          ">
            Alshida
          </h3>


          <p className="
            mt-3
            font-serif
            italic
            text-crimson/70
          ">
            The heart of this story
          </p>


        </div>
      </Reveal>


    </div>


    <Reveal delay={500}>
      <div className="mt-24 text-center">

        <p className="
          arabic-display
          text-[clamp(1.5rem,4vw,2.4rem)]
          text-crimson
        ">
          وَجَعَلْنَا بَيْنَكُم مَوَدَّةً وَرَحْمَةً
        </p>


        <p className="
          mt-5
          max-w-xl
          mx-auto
          font-serif
          text-lg
          italic
          text-foreground/70
        ">
          "And He placed between you affection and mercy."
        </p>

      </div>
    </Reveal>


  </div>

</section>
      {/* ————————————————— THE VENUE ————————————————— */}
      <section
        id="venue"
        className="weave relative overflow-hidden py-28 sm:py-40"
        style={{ background: "var(--gradient-cream)" }}
      >
        <Atmosphere count={10} seed={71} />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[19rem] lg:mx-0">
              <img
                src={p2}
                alt="A candlelit Persian courtyard with carved arches and hanging lanterns"
                loading="lazy"
                width={912}
                height={1104}
                className="film-tint arch-mask aspect-[4/5] w-full object-cover"
              />
              <span className="pointer-events-none absolute -inset-3 border border-gold/55" />
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <p className="eyebrow text-crimson/75">Chapter Five</p>
              <p className="arabic-display mt-4 text-[clamp(1.6rem,4.2vw,2.4rem)] text-crimson">
                مكان الاحتفال
              </p>
              <h2 className="display-xl mt-3 text-[clamp(1.6rem,4.2vw,2.8rem)] text-crimson-deep">
                Finding the Hall
              </h2>
              <div className="mt-8 h-px w-24 bg-gold" />
            <p className="mt-8 font-serif text-lg font-light leading-relaxed text-foreground/80">
  Located at Nambiyath Auditorium, our celebration awaits surrounded by
  warmth, blessings, and the presence of our loved ones. Follow the map
  to join us for an unforgettable evening filled with happiness, prayers,
  and beautiful memories.
</p>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="label-line group mt-10 inline-flex items-center gap-3 border border-crimson-deep/25 bg-crimson-deep px-8 py-4 text-cream transition-all duration-700 hover:bg-gold hover:text-crimson-deep"
              >
                <PinIcon className="h-4 w-4" />
                Open in Google Maps
                <span
                  className="transition-transform duration-700 group-hover:translate-x-1"
                  aria-hidden
                >
                  ↗
                </span>
              </a>

              <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  ["Arrival", "Doors open 11:30"],
                  ["Gifts", "Your duas and your presence, truly"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-border pt-5">
                    <dt className="eyebrow text-crimson/65">{k}</dt>
                    <dd className="mt-3 font-serif text-lg font-light text-crimson-deep">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

    

      {/* ————————————————— FOOTER ————————————————— */}
      <footer className="grain relative overflow-hidden bg-crimson-deep py-16 text-cream">
        <div className="girih pointer-events-none absolute inset-0 opacity-35" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <MedallionIcon className="h-9 w-9 text-gold" />
          <p className="arabic-display gold-text text-3xl">شاهين و الشيدا</p>
          <p className="eyebrow text-cream/85">Woven with love · 08 · 08 · 2026</p>
          <span className="gold-rule w-40" />
          <p className="arabic text-lg text-cream/70">وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
        </div>
        <div className="gold-rule mx-auto mt-14 h-px w-48 sm:w-72" />

        <div className="mt-10 flex flex-col items-center text-center">
          <span className="font-display text-[11px] tracking-[0.5em] text-champagne/90 uppercase sm:text-[12px]">
            Crafted by
          </span>
          <span
            className="mt-3 font-script text-5xl leading-[1.3] text-gold-gradient sm:text-6xl"
            style={{ animation: "breathe 6s ease-in-out infinite" }}
          >
            Aurelle Vows
          </span>
        </div>
      </footer>
    </div>
  );
}

function QuoteBand({
  image,
  alt,
  arabic,
  quote,
  attribution,
  offset,
}: {
  image: string;
  alt: string;
  arabic: string;
  quote: string;
  attribution: string;
  offset: number;
}) {
  return (
    <section className="vignette relative h-[62vh] min-h-[24rem] overflow-hidden bg-crimson-deep">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width={1920}
        height={1088}
        className="film-tint absolute inset-0 h-[130%] w-full object-cover"
        style={{ transform: `translate3d(0, ${Math.min(offset * 0.05, 110) - 55}px, 0)` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.2 0.085 24 / 0.7) 0%, oklch(0.24 0.095 24 / 0.42) 50%, oklch(0.2 0.085 24 / 0.75) 100%)",
        }}
      />
      <Atmosphere count={10} seed={41} />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <Reveal>
          <div className="max-w-3xl text-center text-cream">
            <ArabesqueIcon className="mx-auto h-6 w-28 text-gold-soft" />
            <p className="arabic-display mt-8 text-[clamp(2rem,6vw,3.6rem)] leading-tight text-gold-soft">
              {arabic}
            </p>
            <p className="pull-quote mt-5 text-[clamp(1.1rem,2.6vw,1.6rem)] text-cream/90">
              “{quote}”
            </p>
            <p className="eyebrow mt-7 text-cream/80">{attribution}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}