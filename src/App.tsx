import { useState } from 'react'
import { Header } from './layout/header'
import { Program } from './sections/Program'
import { Hosting } from './sections/Hosting'
import { CarPool } from './sections/CarPool'
import { Contact } from './sections/Contact'
import { Footer } from './layout/Footer'
import { Menu } from './layout/Menu'

export enum Tabs {
  PROGRAM = 'Déroulé de la journée',
  HOSTING = 'Les logements',
  CARPOOL = 'Co-voiturage',
  CONTACT = 'Contact'
}

function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.PROGRAM)

  return (
    <div className='my-4 mx-4 lg:mx-10 text-black'>
      <Header />
      <Menu currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className='my-8'>
        {currentTab === Tabs.PROGRAM && <Program />}
        {currentTab === Tabs.HOSTING && <Hosting />}
        {currentTab === Tabs.CARPOOL && <CarPool />}
      </main>
    </div>
  )
}

export default App
