import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { Mail, Send, ArrowUpRight } from 'lucide-react'

const EMAIL = 'matteogpplm@gmail.com'

export default function Contact() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Richiesta preventivo — ${business || name}`)
    const body = encodeURIComponent(
      `Ciao! Sono ${name}.\nAttività: ${business}.\n\n${message}\n\n— inviato dal sito vetrina.`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contatti" className="bg-[#38bdf8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-4 font-mono-tech text-xs font-semibold uppercase tracking-[0.3em]">
              Parliamone
            </p>
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Porta la tua attività
              <span className="text-stroke-ink"> dove guardano tutti.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/70">
              Scrivici due righe: ti rispondiamo entro 24 ore con una proposta
              concreta, senza impegno.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 font-display text-lg font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-5 w-5 text-[#38bdf8]" />
              {EMAIL}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={submit}
              className="rounded-2xl border-2 border-foreground bg-white p-8 shadow-[10px_10px_0px_#111111]"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold" htmlFor="nome">
                    Come ti chiami?
                  </label>
                  <input
                    id="nome"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Mario Rossi"
                    className="w-full rounded-lg border-2 border-foreground/15 bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold" htmlFor="attivita">
                    La tua attività
                  </label>
                  <input
                    id="attivita"
                    required
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="Bar Centrale, Milano"
                    className="w-full rounded-lg border-2 border-foreground/15 bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold" htmlFor="messaggio">
                    Di cosa hai bisogno?
                  </label>
                  <textarea
                    id="messaggio"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Vorrei un sito con menu e prenotazioni…"
                    className="w-full resize-none rounded-lg border-2 border-foreground/15 bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground py-4 font-display font-semibold text-background transition-colors hover:bg-[#0284c7] hover:text-foreground"
                >
                  Invia la richiesta
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-foreground/50">
                  Il pulsante apre la tua email con il messaggio già pronto.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
