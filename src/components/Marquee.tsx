"use client";

export function Marquee() {
  // TODO: le client pourra ajouter de vrais chiffres ici (nombre de patients, années d'expérience, etc.)
  const items = [
    "Cabinet Dentaire Dr. Boutaina Bouhaouita",
    "Chirurgien-Dentiste à Tétouan",
    "Soins Généraux · Esthétique Dentaire · Prothèses",
    "Bureau n°3, Résidence Cielo Azul, Av. Sidi Mohamed Al Kharaz, Tétouan",
    "+212 667-766-771",
    "Sur rendez-vous — contactez-nous pour les horaires précis",
  ];

  return (
    <div className="bg-primary text-white py-2.5 marquee-container">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-medium whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
