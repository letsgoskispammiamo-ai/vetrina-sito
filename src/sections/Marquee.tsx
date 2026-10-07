const items = [
  'Sito vetrina',
  'Prenotazioni online',
  'Menu digitale',
  'Google Maps',
  'SEO locale',
  'Email professionale',
  'Assistenza continua',
]

function Row({ reverse = false, dark = false }: { reverse?: boolean; dark?: boolean }) {
  const list = [...items, ...items]
  return (
    <div
      className={`overflow-hidden border-y py-4 ${
        dark ? 'border-foreground bg-foreground text-background' : 'border-foreground bg-[#38bdf8] text-foreground'
      }`}
    >
      <div className={`flex w-max gap-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {list.map((item, i) => (
          <span key={i} className="flex items-center font-display text-xl font-semibold uppercase tracking-wide md:text-2xl">
            <span className="px-6">{item}</span>
            <span className={`text-2xl ${dark ? 'text-[#38bdf8]' : ''}`}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="rotate-0">
      <Row />
      <Row reverse dark />
    </div>
  )
}
