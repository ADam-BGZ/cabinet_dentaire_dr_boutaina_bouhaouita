"use client";

import { StarIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    name: "Rahma H.",
    rating: 5,
    text: "Accueil chaleureux, personnel très professionnel et à l'écoute. La docteure prend le temps d'expliquer chaque étape du traitement, ce qui met vraiment en confiance. Les soins sont réalisés avec douceur et précision. J'ai particulièrement apprécié le respect des horaires et la qualité du suivi.",
  },
  {
    name: "Nada B.",
    rating: 5,
    text: "Mon expérience avec le Dr Boutaina a été très rassurante. Elle a été à l'écoute tout au long du traitement. Je la recommande vivement.",
  },
  {
    name: "Nihad B.",
    rating: 5,
    text: "Excellente dentiste, très professionnelle, douce et à l'écoute. Les soins sont impeccables et je me suis sentie en confiance dès le premier rendez-vous.",
  },
  {
    name: "Hamza S.",
    rating: 5,
    text: "Excellent cabinet. L'équipe est très professionnelle, le local est propre et les équipements sont modernes.",
  },
  {
    name: "Anas E.",
    rating: 5,
    text: "Excellente clinique avec des équipements très modernes. Ponctualité exemplaire dans les rendez-vous, pas d'attente, et accueil très professionnel.",
  },
  {
    name: "Mohamed A.",
    rating: 5,
    text: "Professionnel et chaleureux, très bon dentiste, à l'écoute et rassurant. Le cabinet est propre, moderne et bien équipé.",
  },
  {
    name: "Samir B.",
    rating: 5,
    text: "Le Dr Boutaina Bouhaouita est très gentille, travail de qualité, pratique très douce et à l'écoute. Étant anxieux, elle a su me mettre à l'aise.",
  },
  {
    name: "Reda K.",
    rating: 5,
    text: "Le Dr Boutaina Bouhaouita est une praticienne très professionnelle, consciencieuse et à l'écoute. Je la recommande vivement.",
  },
];

export function Testimonials() {
  const header = useScrollAnimation("down");
  const grid = useScrollAnimation("up");
  const cta = useScrollAnimation("up");

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Avis Google
          </span>

          {/* 5.0 Rating Hero */}
          <div className="flex items-center justify-center gap-2 mt-6 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="w-8 h-8 text-secondary" />
            ))}
          </div>
          <div className="text-5xl sm:text-6xl font-bold text-primary font-heading">
            5,0
          </div>
          <p className="text-muted-foreground text-base mt-2">
            sur <strong className="text-foreground">102 avis Google</strong>
          </p>

          <h2 className="section-title text-foreground mt-8 mb-6">
            Ce que nos patients disent
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            La satisfaction de nos patients est notre meilleure carte de visite.
          </p>
        </div>

        {/* Reviews Grid */}
        <div ref={grid.refCallback} className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ${grid.animationClass}`}>
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover-card border border-border/40"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-xs">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-foreground text-sm block">
                    {review.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Patient vérifié
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div ref={cta.refCallback} className={`text-center ${cta.animationClass}`}>
          <p className="text-muted-foreground text-sm mb-6">
            Retrouvez tous nos avis sur Google
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-primary hover:text-white hover:shadow-lg min-h-[44px]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Voir tous nos avis Google
          </a>
        </div>
      </div>
    </section>
  );
}
