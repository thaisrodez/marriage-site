import { useState } from 'react'
import { Header } from './header'
import { Program } from './Program'
import { Hosting } from './Hosting'
import { CarPool } from './CarPool'
import { Contact } from './Contact'
import { Footer } from './Footer'

enum Tabs {
  PROGRAM = 'Déroulé de la journée',
  HOSTING = 'Les logements',
  CARPOOL = 'Co-voiturage',
  CONTACT = 'Contact'
}

function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.PROGRAM)

  return (
    <>
      <Header />
      <menu className='flex space-x-4'>
        <button onClick={() => setCurrentTab(Tabs.PROGRAM)} >{Tabs.PROGRAM}</button>
        <button onClick={() => setCurrentTab(Tabs.HOSTING)} >{Tabs.HOSTING}</button>
        <button onClick={() => setCurrentTab(Tabs.CARPOOL)} >{Tabs.CARPOOL}</button>
        <button onClick={() => setCurrentTab(Tabs.CONTACT)} >{Tabs.CONTACT}</button>
      </menu>
      <main>
        {currentTab === Tabs.PROGRAM && <Program />}
        {currentTab === Tabs.HOSTING && <Hosting />}
        {currentTab === Tabs.CARPOOL && <CarPool />}
        {currentTab === Tabs.CONTACT && <Contact />}
      </main>
      <Footer />
    </>
  )
}

export default App
