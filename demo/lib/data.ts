export const movies = [
  {
    id: "1",
    title: "Dina: Drugi deo",
    genre: "Naučna fantastika",
    duration: 166,
    director: "Deni Vilnev",
    cast: "Timoti Šalame, Zendaja, Ostin Batler",
    description:
      "Pol Atrejdes se ujedinjuje sa Fremenima kako bi osvetio one koji su uništili njegovu porodicu, suočavajući se sa izborom između ljubavi i sudbine univerzuma.",
    poster: "/dune-part-2-poster.jpeg",
    showtimes: [
      { id: "1a", date: "15.01.2026", time: "14:00", price: 650, hall: "Sala 1" },
      { id: "1b", date: "15.01.2026", time: "18:00", price: 750, hall: "Sala 1" },
      { id: "1c", date: "16.01.2026", time: "20:00", price: 900, hall: "IMAX" },
    ],
  },
  {
    id: "2",
    title: "Openhajmer",
    genre: "Drama",
    duration: 180,
    director: "Kristofer Nolan",
    cast: "Kilijan Marfi, Emili Blant, Robert Dauni Jr.",
    description:
      "Priča o Dž. Robertu Openhajmeru i njegovoj ulozi u razvoju atomske bombe tokom Drugog svetskog rata.",
    poster: "/oppenheimer-poster.jpeg",
    showtimes: [
      { id: "2a", date: "15.01.2026", time: "16:00", price: 600, hall: "Sala 2" },
      { id: "2b", date: "15.01.2026", time: "20:00", price: 700, hall: "Sala 2" },
    ],
  },
  {
    id: "3",
    title: "Džon Vik: Četvrti čin",
    genre: "Akcija",
    duration: 169,
    director: "Čed Stahelski",
    cast: "Kijanu Rivs, Doni Jen, Bil Skašgord",
    description:
      "Džon Vik otkriva put ka porazu Visokog stola, ali mora da se suoči sa novim neprijateljem sa moćnim saveznicima širom sveta.",
    poster: "/john-wick-poster.jpeg",
    showtimes: [
      { id: "3a", date: "15.01.2026", time: "15:00", price: 550, hall: "Sala 3" },
      { id: "3b", date: "15.01.2026", time: "21:00", price: 650, hall: "Sala 3" },
    ],
  },
]

export const currentUser = {
  name: "",
  email: "",
  bonusPoints: 500,
}

export const POINTS_PER_RSD = 1
export const POINTS_EARNED_PER_100_RSD = 10

export function getMovie(id: string) {
  return movies.find((m) => m.id === id)
}

export function getShowtime(movieId: string, showtimeId: string) {
  const movie = getMovie(movieId)
  return movie?.showtimes.find((s) => s.id === showtimeId)
}
