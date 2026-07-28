"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Comment prendre rendez-vous au cabinet du Dr. Boutaina Bouhaouita ?",
    answer:
      "Vous pouvez prendre rendez-vous par téléphone au +212 667-766-771, via WhatsApp, ou en nous contactant directement. Le cabinet reçoit sur rendez-vous, du lundi au samedi — contactez-nous pour les horaires précis.",
  },
  {
    question: "Quels types de soins propose le cabinet ?",
    answer:
      "Le cabinet du Dr. Boutaina Bouhaouita propose des soins généraux (consultations, détartrage, caries, prévention), de l'esthétique dentaire (blanchiment professionnel, facettes) et des prothèses dentaires (couronnes, bridges, fixes et amovibles).",
  },
  {
    question: "Faut-il une ordonnance pour consulter ?",
    answer:
      "Non, aucune ordonnance n'est nécessaire pour consulter. Vous pouvez prendre rendez-vous directement par téléphone au +212 667-766-771 ou via notre site. Le Dr. Boutaina Bouhaouita établira un plan de traitement personnalisé lors de votre première visite.",
  },
  {
    question: "Acceptez-vous les enfants ?",
    answer:
      "Oui, le cabinet accueille les patients de tous les âges dans un environnement rassurant, avec des soins adaptés à chaque tranche d'âge.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements en espèces, par carte bancaire et par chèque. Des facilités de paiement peuvent être proposées pour les traitements de longue durée.",
  },
  {
    question: "Où se situe le cabinet du Dr. Boutaina Bouhaouita ?",
    answer:
      "Le cabinet est situé au Bureau n°3, Résidence Cielo Azul, Avenue Sidi Mohamed Al Kharaz, Tétouan. Un parking est disponible à proximité et l'accès est facilité pour les personnes à mobilité réduite.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const header = useScrollAnimation("down");
  const list = useScrollAnimation("up");

  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto px-4">
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Questions Fréquentes
          </span>
          <h2 className="section-title text-foreground mt-4 mb-6">
            Vos Questions, Nos Réponses
          </h2>
        </div>

        <div ref={list.refCallback} className={`flex flex-col gap-4 ${list.animationClass}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border overflow-hidden transition-all ${
                openIndex === index
                  ? "border-primary bg-white shadow-md"
                  : "border-border bg-white hover:border-primary/30"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left min-h-[48px]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronRightIcon
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
