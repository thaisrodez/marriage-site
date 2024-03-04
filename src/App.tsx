import { useState } from 'react'
import { Header } from './layout/header'
import { Program } from './sections/Program'
import { Housing } from './sections/Housing'
import { CarPool } from './sections/CarPool'
import { Menu } from './layout/Menu'
import { FAQ } from './sections/FAQ'

export enum Tabs {
  PROGRAM = 'Jour J',
  HOUSING = 'Logements',
  CARPOOL = 'Co-voiturage',
  FAQ = 'FAQ'
}

function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.PROGRAM)

  return (
    <div className='my-4 mx-4 lg:mx-10 text-black'>
      <Header />
      <Menu currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className='my-8'>
        {currentTab === Tabs.PROGRAM && <Program />}
        {currentTab === Tabs.HOUSING && <Housing />}
        {currentTab === Tabs.CARPOOL && <CarPool />}
        {currentTab === Tabs.FAQ && <FAQ />}
      </main>
    </div>
  )
}

export default App
