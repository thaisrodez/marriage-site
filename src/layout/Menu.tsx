import { Tabs } from "../App"

export const Menu = ({ currentTab, setCurrentTab }: { currentTab: string, setCurrentTab: (tab: Tabs) => void }) => {
  return (
    <menu className='w-full justify-center py-8 flex flex-col lg:flex-row lg:space-x-16 space-y-2 font-medium text-lg'>
      <button
        onClick={() => setCurrentTab(Tabs.PROGRAM)}
        className={currentTab === Tabs.PROGRAM ? 'text-green underline underline-offset-4' : ''}
      >
        {Tabs.PROGRAM}
      </button>
      <button
        onClick={() => setCurrentTab(Tabs.HOUSING)}
        className={currentTab === Tabs.HOUSING ? 'text-green underline underline-offset-4' : ''}

      >
        {Tabs.HOUSING}
      </button>
      <button
        onClick={() => setCurrentTab(Tabs.CARPOOL)}
        className={currentTab === Tabs.CARPOOL ? 'text-green underline underline-offset-4' : ''}

      >
        {Tabs.CARPOOL}
      </button>
      {/* <button onClick={() => setCurrentTab(Tabs.CONTACT)} >{Tabs.CONTACT}</button> */}
    </menu>
  )
}
