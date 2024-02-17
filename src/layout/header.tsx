import title from "/thais_et_adrien.png"

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <img src={title} alt="Thaïs et Adrien" className="w-48 lg:w-[300px]" />
      <p className="text-lg font-light pt-4">Samedi 18 mai 2024</p>
    </header>
  )
}
