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
  },
  {
    quote: "La tua bimba mi fa il rating al cock",
    info: "Radical - Tomy (Rip, 2021)"
  },
  {
    quote: "Ne parliamo dopo con calma",
    info: "Friman - LONTANO DA TE 2 (#UNRELEASED, 2022)
  },
  {
    quote: "Gli ho dato un malrovescio, di notte, per strada",
    info: "Tony 2Milli - LONTANO DA TE 2 (#UNRELEASED, 2022)
  },
  {
    quote: "Gli ho dato un malrovescio per il reddito di cittadinanza, so come alzarli ma non ho studiato finanza",
    info: "Tony 2Milli - LONTANO DA TE 2 (#UNRELEASED, 20222)
  },
  {
    quote: "[...] tagliare la merce e poi farne di più, come ha fatto con i pesci gesù, quel brother ha paccato un villaggio: tagliato la merce e gli ha dato un vinaccio del cazzo",
    info: "Tony 2Milli - LONTANO DA TE 2 (#UNRELEASED, 2022)
  },
  {
    quote: "Ho voglia di scoparmi una con il culo grosso con i tatuaggi",
    info: "Glasond - Siamo nelle T (Urania Deluxe: Atto Finale, 2021)
  },
  {
    quote: "Prima o poi pagherò i miei debiti... nah, non è vero",
    info: "Dat Boi M - Siamo nelle T (Urania Deluxe: Atto Finale, 2021)
  }
]

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length)
  random = Math.floor(Math.random() * quotes.length
  quote.textContent = quotes[random].quote
  info.textContent = quotes[random].info
})
