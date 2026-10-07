import { Reveal } from '../components/Reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Non so nulla di tecnologia, è un problema?',
    a: 'Assolutamente no. Pensiamo a tutto noi: dominio, hosting, configurazione email, pubblicazione. Tu ci racconti la tua attività e approvi il risultato. Stop.',
  },
  {
    q: 'Quanto tempo serve per avere il sito online?',
    a: 'In media 7 giorni lavorativi dal momento in cui riceviamo materiali e informazioni. Per i siti più complessi, circa 10 giorni.',
  },
  {
    q: 'Ci sono costi ricorrenti nascosti?',
    a: 'No. Il prezzo è una tantum e include dominio e hosting per il primo anno. Dal secondo anno il rinnovo costa circa €80/anno: te lo diciamo prima, per iscritto.',
  },
  {
    q: 'Il sito sarà mio o vostro?',
    a: 'Tuo al 100%. Dominio, contenuti, testi e foto restano di tua proprietà. Se un giorno vorrai gestire tutto da solo, ti consegniamo ogni accesso.',
  },
  {
    q: 'E se mi serve una modifica dopo la consegna?',
    a: 'I pacchetti includono un periodo di assistenza gratuita. Dopo, le piccole modifiche (orari, prezzi, foto) partono da €30. Niente contratti vincolanti.',
  },
  {
    q: 'Lavorate anche con attività fuori dalla mia città?',
    a: 'Sì, lavoriamo in tutta Italia da remoto. Ci sentiamo in videochiamata o per telefono, raccogliamo tutto online e il risultato non cambia.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="dots-pattern py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-4 text-center font-mono-tech text-xs font-semibold uppercase tracking-[0.3em] text-[#0284c7]">
            Domande frequenti
          </p>
          <h2 className="font-display mb-14 text-center text-4xl font-bold tracking-tight md:text-5xl">
            Quello che ci chiedono tutti.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border-2 border-foreground bg-white px-6 transition-shadow data-[state=open]:shadow-[6px_6px_0px_#38bdf8]"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-foreground/60">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
