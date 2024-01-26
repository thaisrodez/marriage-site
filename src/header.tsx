import Countdown from "./CountDown"

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <p>Samedi 18 mai 2024</p>
      <Countdown />
    </header>
  )
}
