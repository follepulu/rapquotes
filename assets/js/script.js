let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let info = document.querySelector('.info')
let temp

/* PER CHI AGGIUNGE:
formato delle info DEVE essere il seguente
Artista - Titolo (Album, Anno)
esempio: Glasond - Dentro al Taglio (AEE Deluxe, 2021)
*/

const quotes = [
  {
    quote: "Sono spregevole, per davvero",
    info: "Kidhakku - Invincibile (HOLLOW, 2021)"
  },
  {
    quote: "Gioco con i laser perché mi diverto",
    info: "Friman - COME NOI (MAINFRAME: RESPAWN, 2021)"
  },
  {
    quote: "Lei sul mio cazzo, fa bungee jumping",
    info: "Zyrtck - TOO EASY (EVOL, 2022)"
  },
  {
    quote: "Mi sposo coi soldi ci tirano il riso",
    info: "Radical - TOO EASY (EVOL, 2022)"
  },
  {
    quote: "Scopo tua madre, tua zia e la tua sis",
    info: "Radical - TOO EASY (EVOL, 2022)"
  }
]

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length)
  if (random === temp) {
    random = Math.floor(Math.random() * quotes.length)
  }
  quote.textContent = quotes[random].quote
  info.textContent = quotes[random].info
  temp = random
})