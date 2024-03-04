import { DropDown } from "../layout/DropDown"

export const FAQ = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <DropDown
        title="Comment on fait pour vous répondre ?"
        text="On sera ravis de vous entendre ou de vous lire par sms ou mail ! Précisez-nous si vous souhaitez reservé des lits sur place et si vous avec des régimes alimentaires particuliers."
      />
      <DropDown
        title="Vous n'avez pas de liste de mariage ?"
        text="Non effectivement nous n'avons pas souhaité en faire. Pour ceux qui le souhaitent (merci !), nous mettrons à disposition une jolie boite où vous pourrez nous laisser une participation à un voyage en Italie que nous ferons en septembre et à l'achat d'un canapé super confortable pour vous accueillir chez nous."
      />
      <DropDown
        title="Est-ce qu'on va s'amuser ?"
        text="OUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"
      />
    </div>
  )
}
