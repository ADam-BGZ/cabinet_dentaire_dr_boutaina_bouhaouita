"use client";

import { PhoneIcon, ShieldIcon, AwardIcon, HeartIcon, AccessibilityIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: HeartIcon, text: "Accueil chaleureux et grande écoute" },
  { icon: ShieldIcon, text: "Soins doux et précis, explications claires" },
  { icon: AwardIcon, text: "Cabinet moderne, propre et bien équipé" },
];

const accessibility = [
  { icon: AccessibilityIcon, text: "Entrée accessible en fauteuil roulant" },
  { icon: AccessibilityIcon, text: "Toilettes adaptées aux PMR" },
  { icon: AccessibilityIcon, text: "Parking gratuit à proximité" },
  { icon: AccessibilityIcon, text: "Ponctualité exemplaire, pas d'attente" },
];

export function About() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div ref={left.refCallback} className={`flex-1 ${left.animationClass}`}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              À propos
            </span>
            <h2 className="section-title text-foreground mt-4 mb-6">
              Cabinet Dentaire Dr. Boutaina Bouhaouita
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Le Dr. Boutaina Bouhaouita, Chirurgien-Dentiste omnipratique, vous accueille à Tétouan dans un cabinet moderne, propre et bien équipé. Reconnue pour son accueil chaleureux et son professionnalisme, elle met un point d&apos;honneur à offrir des soins de qualité dans une ambiance rassurante.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Soins généraux, esthétique dentaire et prothèses — chaque traitement est précédé d&apos;explications claires, et chaque étape est réalisée avec douceur et précision. La ponctualité et le suivi personnalisé font la différence.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature, i) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 transition-default"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-default hover:bg-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Accessibilité */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
                Accessibilité
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accessibility.map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
              href="tel:+212667766771"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-base transition-all-fast hover:bg-primary/90"
              >
                <PhoneIcon className="w-5 h-5" />
                Contactez-nous
              </a>
              <a
              href="tel:+212667766771"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-base transition-all-fast hover:bg-primary hover:text-white"
            >
              +212 667-766-771
              </a>
            </div>
          </div>

          {/* Right — Logo */}
          <div ref={right.refCallback} className={`flex-1 relative ${right.animationClass}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-12 transition-default hover:shadow-3xl flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-4xl">B</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  Dr. Boutaina Bouhaouita
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Chirurgien-Dentiste
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-foreground px-6 py-4 rounded-xl shadow-lg transition-default hover:scale-105">
              <div className="text-2xl font-bold">5,0</div>
              <div className="text-sm font-medium">/ 102 avis Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
