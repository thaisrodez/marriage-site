import mairie from "/mairie.png"
import diner from '/diner.png'
import brunch from "/brunch.png"
import Countdown from "../CountDown"


export const Program = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <Countdown />

      <h3 className="font-medium text-green">Samedi</h3>

      <div className="flex items-center">
        <img src={mairie} alt="Mairie" className="w-32 lg:w-[200px]" />
        <p>Rendez-vous un peu avant 14h à la <a href="https://maps.app.goo.gl/CZZFGE7cLjoSGst78" className="text-green hover:cursor-pointer">Mairie du 6e et 8e arrondissement de Marseille</a></p>
      </div>

      <div className="flex items-center">
        <img src={diner} alt="Diner" className="w-32 lg:w-[200px]" />
        <p>Rendez-vous à partir de 17h30 au <a href="https://maps.app.goo.gl/hr4aKRqf523SLQB98" className="text-green hover:cursor-pointer">Pavillon d'Aurabelle</a> pour un cocktail suivi d'un diner</p>
      </div>

      <h4 className="font-medium text-green">Dimanche</h4>
      <div className="flex items-center">
        <img src={brunch} alt="Brunch" className="w-32 lg:w-[150px]" />
        <p>Brunch, pétanque, piscine et farniente toute la journée.
          (Pensez à prendre votre maillot de bain).
        </p>
      </div>
    </div>
  )
}
