import { useState } from 'react'
import { Header } from './header'
import { Program } from './Program'
import { Hosting } from './Hosting'
import { CarPool } from './CarPool'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Menu } from './Menu'

export enum Tabs {
  PROGRAM = 'Déroulé de la journée',
  HOSTING = 'Les logements',
  CARPOOL = 'Co-voiturage',
  CONTACT = 'Contact'
}

function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.PROGRAM)

  return (
    <div className='my-4 mx-10'>
      <Header />
      <Menu setCurrentTab={setCurrentTab} />
      <main>
        {currentTab === Tabs.PROGRAM && <Program />}
        {currentTab === Tabs.HOSTING && <Hosting />}
        {currentTab === Tabs.CARPOOL && <CarPool />}
        {currentTab === Tabs.CONTACT && <Contact />}
      </main>
      <p> Pidou j'ai réussi
      </p>
      <p>Je t'aime</p>
      <Footer />
    </div>
  )
}

export default App
