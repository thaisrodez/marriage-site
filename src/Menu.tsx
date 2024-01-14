import { Tabs } from "./App"

export const Menu = ({ setCurrentTab }: { setCurrentTab: (tab: Tabs) => void }) => {
  return (
    <menu className='flex space-x-4'>
      <button onClick={() => setCurrentTab(Tabs.PROGRAM)} >{Tabs.PROGRAM}</button>
      <button onClick={() => setCurrentTab(Tabs.HOSTING)} >{Tabs.HOSTING}</button>
      <button onClick={() => setCurrentTab(Tabs.CARPOOL)} >{Tabs.CARPOOL}</button>
      <button onClick={() => setCurrentTab(Tabs.CONTACT)} >{Tabs.CONTACT}</button>
    </menu>
  )
}
