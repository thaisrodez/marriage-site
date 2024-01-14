import Countdown from "./CountDown"
import title from "/thais_et_adrien.png"

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <img src={title} alt="Thaïs et Adrien" width="300px" />
      <p>Samedi 18 mai 2024</p>
      <Countdown />
    </header>
  )
}
