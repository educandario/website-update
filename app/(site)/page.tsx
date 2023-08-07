import { getEvent, getEvents } from "@/sanity/service/getEvents"
import { getGeneric } from "@/sanity/service/getGeneric"
import { getHome } from "@/sanity/service/getHome"
import { getHowToHelp } from "@/sanity/service/getHowToHelp"
import { getNav } from "@/sanity/service/getNav"
import { getAllNews, getNews } from "@/sanity/service/getNews"
import { getTransparency } from "@/sanity/service/getTransparency"

export default async function Home() {
  const events = await getEvents()
  // const event = await getEvent("passa-um-slug-aqui")
  const news = await getAllNews()
  // const news = await getNews("passa-um-slug-aqui")
  const nav = await getNav()
  const transparency = await getTransparency()
  const genericPage = await getGeneric("uma-pagina-pica-das-galaxias")
  const howToHelp = await getHowToHelp()
  const home = await getHome()

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold "><span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Educandário</span> no futuro em</h1>
      
      <p className="mt-3 text-xl text-gray-600">Esse site vai se foda em</p>
    
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">eventos</h2>
      {events.map((event) => (
            <div key={event._id} className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {event.title}
            </div>
        ))} 
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">noticias</h2>
      {news.map((news) => (
            <div key={news._id} className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {news.title}
            </div>
        ))}
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">links do header</h2>  
        {nav.header.links.map((link) => (
            <div key={link._key} className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {link.name}
            </div>
        ))}
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">transparencia</h2>
      <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{transparency.description}</div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">descricao de uma pagina generica</h2>
      <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{genericPage.description}</div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">dados do como ajudar</h2>
      {howToHelp.banks.map((bank) => (
            <div key={bank._key} className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {bank.bankName}
            </div>
        ))}

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">descricao da advertisement section da home 👍</h2>
      <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{home.advertisementSection.description}</div>    
    </div>
  )
}
