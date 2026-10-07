import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Stats from '../sections/Stats'
import Services from '../sections/Services'
import Process from '../sections/Process'
import Pricing from '../sections/Pricing'
import Faq from '../sections/Faq'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
