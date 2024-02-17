import { useState } from 'react'
import { Header } from './layout/header'
import { Program } from './sections/Program'
import { Housing } from './sections/Housing'
import { CarPool } from './sections/CarPool'
import { Menu } from './layout/Menu'

export enum Tabs {
  PROGRAM = 'Jour J',
  HOUSING = 'Logements',
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
        {currentTab === Tabs.HOUSING && <Housing />}
        {currentTab === Tabs.CARPOOL && <CarPool />}
      </main>
    </div>
  )
}

export default App
