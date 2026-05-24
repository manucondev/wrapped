// ============================================
// FANTASY WRAPPED 25/26 - REAL DATA
// ============================================
// Datos generados desde managers_real_data_corrected.csv
// y lineups_real_data_corrected.csv.
// Imágenes de jugadores asignadas desde el fichero Pegado text.txt.
// La pantalla de premios personalizados se conserva al final.
// ============================================

export type MatchdayPlayer = {
  name: string
  image: string
  jornadaPoints: number
}

export type PlayerMetric = {
  name: string
  image: string
  totalPoints: number
  appearances: number
  captainTimes?: number
  baseCaptainPoints?: number
  doubledCaptainPoints?: number
}

export type SinglePlayerGameweekScore = {
  name: string
  image: string
  points: number
  gameweek: number
  context?: string
}

export type ManagerWrapped = {
  id: string
  name: string
  tagline: string
  image?: string
  rank: number
  totalPoints: number
  averagePoints: number
  bestGameweek: number
  bestGameweekPoints: number
  worstGameweek: number
  worstGameweekPoints: number
  bestGameweekLineup: MatchdayPlayer[]
  worstGameweekLineup: MatchdayPlayer[]
  mvpPlayer: PlayerMetric
  bestCaptain: PlayerMetric
  mostUsedPlayer: PlayerMetric
  bestSinglePlayerScore?: SinglePlayerGameweekScore
  worstSinglePlayerScore?: SinglePlayerGameweekScore
  managerStyle: string
  traits: {
    regularity: number
    explosiveness: number
    captainDependency: number
  }
  personalAward: {
    title: string
    description: string
  }
}

export type LeagueAwards = {
  bestMatchday: {
    managerId: string
    managerName: string
    value: number
    gameweek: number
  }
  worstMatchdayNonZero: {
    managerId: string
    managerName: string
    value: number
    gameweek: number
  }
  bestSinglePlayerScore: {
    managerId?: string
    managerName?: string
    playerName: string
    value: number
    context?: string
  }
  worstSinglePlayerScore: {
    managerId?: string
    managerName?: string
    playerName: string
    value: number
    context?: string
  }
  mostExpensiveTeam: {
    managerId: string
    managerName: string
    teamValue: string
    description?: string
  }
}

// ============================================
// REAL MANAGERS DATA
// ============================================
export const mockManagers: ManagerWrapped[] = [

  {
    id: "mrpablada",
    name: "MrPablada",
    tagline: "",
    image: "/managers/mrpablada.jpeg",
    rank: 4,
    totalPoints: 2379,
    averagePoints: 62.61,
    bestGameweek: 13,
    bestGameweekPoints: 104,
    worstGameweek: 4,
    worstGameweekPoints: 20,
    bestGameweekLineup:
    [
          { name: "Aarón", image: "https://assets.analiticafantasy.com/jugadores/46673.png?width=300&height=300&version=31", jornadaPoints: 17 },
          { name: "David Costa", image: "https://assets.analiticafantasy.com/jugadores/47429.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Catena", image: "https://assets.analiticafantasy.com/jugadores/47533.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "Bartra", image: "https://assets.analiticafantasy.com/jugadores/1561.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Sow", image: "https://assets.analiticafantasy.com/jugadores/957.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Febas", image: "https://assets.analiticafantasy.com/jugadores/46711.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "L. Milla", image: "https://assets.analiticafantasy.com/jugadores/47085.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Thomas", image: "https://assets.analiticafantasy.com/jugadores/49.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Fermín", image: "https://assets.analiticafantasy.com/jugadores/340626.png?width=300&height=300&version=31", jornadaPoints: 15 },
          { name: "Akor", image: "https://assets.analiticafantasy.com/jugadores/57446.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Vargas", image: "https://assets.analiticafantasy.com/jugadores/48471.png?width=300&height=300&version=31", jornadaPoints: 3 },
        ]
    ,
    worstGameweekLineup:
    [
          { name: "Courtois", image: "https://assets.analiticafantasy.com/jugadores/730.png?width=300&height=300&version=31", jornadaPoints: 4 },
          { name: "Marcao", image: "https://assets.analiticafantasy.com/jugadores/433.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Suazo", image: "https://assets.analiticafantasy.com/jugadores/11421.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "C. Romero", image: "https://assets.analiticafantasy.com/jugadores/184420.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Lemar", image: "https://assets.analiticafantasy.com/jugadores/45.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Agoumé", image: "https://assets.analiticafantasy.com/jugadores/21004.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "R. Mendoza", image: "https://assets.analiticafantasy.com/jugadores/341371.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Gueye", image: "https://assets.analiticafantasy.com/jugadores/20696.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Hugo Duro", image: "https://assets.analiticafantasy.com/jugadores/47264.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Javi Llabrés", image: "https://assets.analiticafantasy.com/jugadores/293604.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Lamine", image: "https://assets.analiticafantasy.com/jugadores/386828.png?width=300&height=300&version=31", jornadaPoints: 0 },
        ]
    ,
    mvpPlayer:
    {
      name: "Unai Simón",
      image: "https://assets.analiticafantasy.com/jugadores/47270.png?width=300&height=300&version=31",
      totalPoints: 144,
      appearances: 25,
    }
    ,
    bestCaptain:
    {
      name: "A. Moleiro",
      image: "https://assets.analiticafantasy.com/jugadores/182519.png?width=300&height=300&version=31",
      totalPoints: 66,
      appearances: 4,
      captainTimes: 4,
      baseCaptainPoints: 33,
      doubledCaptainPoints: 66,
    }
    ,
    mostUsedPlayer:
    {
      name: "Unai Simón",
      image: "https://assets.analiticafantasy.com/jugadores/47270.png?width=300&height=300&version=31",
      totalPoints: 144,
      appearances: 25,
    }
    ,
    bestSinglePlayerScore:
    {
      name: "A. Moleiro",
      image: "https://assets.analiticafantasy.com/jugadores/182519.png?width=300&height=300&version=31",
      points: 34,
      gameweek: 23,
      context: "Jornada 23",
    }
    ,
    worstSinglePlayerScore:
    {
      name: "C. Romero",
      image: "https://assets.analiticafantasy.com/jugadores/184420.png?width=300&height=300&version=31",
      points: -2,
      gameweek: 28,
      context: "Jornada 28",
    }
    ,
    managerStyle: "El competitivo",
    traits: {
      regularity: 81,
      explosiveness: 82,
      captainDependency: 20,
    },
    personalAward: {
      title: "Premio Resistencia",
      description: "Aguantó la temporada hasta el final.",
    },
  },
  {
    id: "pedrolgp01",
    name: "pedrolgp01",
    tagline: "",
    image: "/managers/pedrolgp01.jpeg",
    rank: 6,
    totalPoints: 2144,
    averagePoints: 56.42,
    bestGameweek: 11,
    bestGameweekPoints: 115,
    worstGameweek: 36,
    worstGameweekPoints: 0,
    bestGameweekLineup:
    [
          { name: "Sivera", image: "https://assets.analiticafantasy.com/jugadores/47353.png?width=300&height=300&version=31", jornadaPoints: 4 },
          { name: "Boyomo", image: "https://assets.analiticafantasy.com/jugadores/279822.png?width=300&height=300&version=31", jornadaPoints: 8 },
          { name: "Matías Moreno", image: "https://assets.analiticafantasy.com/jugadores/421807.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Raillo", image: "https://assets.analiticafantasy.com/jugadores/46733.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Natan", image: "https://assets.analiticafantasy.com/jugadores/195100.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "Mario Martín", image: "https://assets.analiticafantasy.com/jugadores/343205.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "Brais Méndez", image: "https://assets.analiticafantasy.com/jugadores/47440.png?width=300&height=300&version=31", jornadaPoints: 16 },
          { name: "Santamaría", image: "https://assets.analiticafantasy.com/jugadores/21153.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Marc Roca", image: "https://assets.analiticafantasy.com/jugadores/47341.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Comesaña", image: "https://assets.analiticafantasy.com/jugadores/47541.png?width=300&height=300&version=31", jornadaPoints: 13 },
          { name: "Antony", image: "https://assets.analiticafantasy.com/jugadores/9971.png?width=300&height=300&version=31", jornadaPoints: 20 },
        ]
    ,
    worstGameweekLineup:
    [
          { name: "Sivera", image: "https://assets.analiticafantasy.com/jugadores/47353.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "A. Pedraza", image: "https://assets.analiticafantasy.com/jugadores/1702.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Arnau", image: "https://assets.analiticafantasy.com/jugadores/283668.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Pacha", image: "https://assets.analiticafantasy.com/jugadores/46759.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Nacho Vidal", image: "https://assets.analiticafantasy.com/jugadores/46657.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Isco", image: "https://assets.analiticafantasy.com/jugadores/745.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Buchanan", image: "https://assets.analiticafantasy.com/jugadores/51016.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Antony", image: "https://assets.analiticafantasy.com/jugadores/9971.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Sorloth", image: "https://assets.analiticafantasy.com/jugadores/8492.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Ramazani", image: "https://assets.analiticafantasy.com/jugadores/138776.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Sin jugador", image: "", jornadaPoints: 0 },
        ]
    ,
    mvpPlayer:
    {
      name: "Antony",
      image: "https://assets.analiticafantasy.com/jugadores/9971.png?width=300&height=300&version=31",
      totalPoints: 241,
      appearances: 26,
    }
    ,
    bestCaptain:
    {
      name: "Antony",
      image: "https://assets.analiticafantasy.com/jugadores/9971.png?width=300&height=300&version=31",
      totalPoints: 178,
      appearances: 12,
      captainTimes: 12,
      baseCaptainPoints: 89,
      doubledCaptainPoints: 178,
    }
    ,
    mostUsedPlayer:
    {
      name: "Sivera",
      image: "https://assets.analiticafantasy.com/jugadores/47353.png?width=300&height=300&version=31",
      totalPoints: 123,
      appearances: 29,
    }
    ,
    bestSinglePlayerScore:
    {
      name: "Antony",
      image: "https://assets.analiticafantasy.com/jugadores/9971.png?width=300&height=300&version=31",
      points: 40,
      gameweek: 11,
      context: "Jornada 11",
    }
    ,
    worstSinglePlayerScore:
    {
      name: "Maffeo",
      image: "https://assets.analiticafantasy.com/jugadores/26302.png?width=300&height=300&version=31",
      points: -2,
      gameweek: 14,
      context: "Jornada 14",
    }
    ,
    managerStyle: "El creyente del brazalete",
    traits: {
      regularity: 73,
      explosiveness: 91,
      captainDependency: 40,
    },
    personalAward: {
      title: "Premio Jornada Grande",
      description: "Tuvo una jornada de las que se recuerdan.",
    },
  },
  {
    id: "toniiarias",
    name: "toniiarias_",
    tagline: "",
    image: "/managers/toniiarias.jpeg",
    rank: 7,
    totalPoints: 2079,
    averagePoints: 54.71,
    bestGameweek: 20,
    bestGameweekPoints: 89,
    worstGameweek: 31,
    worstGameweekPoints: 0,
    bestGameweekLineup:
    [
          { name: "Iñaki Peña", image: "https://assets.analiticafantasy.com/jugadores/126.png?width=300&height=300&version=31", jornadaPoints: 4 },
          { name: "Valentin", image: "https://assets.analiticafantasy.com/jugadores/355004.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Natan", image: "https://assets.analiticafantasy.com/jugadores/195100.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "V. Chust", image: "https://assets.analiticafantasy.com/jugadores/162058.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Gudelj", image: "https://assets.analiticafantasy.com/jugadores/1489.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Guedes", image: "https://assets.analiticafantasy.com/jugadores/925.png?width=300&height=300&version=31", jornadaPoints: 16 },
          { name: "Colombo", image: "https://assets.analiticafantasy.com/jugadores/0.png", jornadaPoints: 5 },
          { name: "Mbappé", image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31", jornadaPoints: 14 },
          { name: "Victor M.", image: "https://assets.analiticafantasy.com/jugadores/338751.png?width=300&height=300&version=31", jornadaPoints: 10 },
          { name: "T. Martinez", image: "https://assets.analiticafantasy.com/jugadores/47181.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Ferran", image: "https://assets.analiticafantasy.com/jugadores/931.png?width=300&height=300&version=31", jornadaPoints: 3 },
        ]
    ,
    worstGameweekLineup:
    [
          { name: "Dmitrovic", image: "https://assets.analiticafantasy.com/jugadores/2813.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Catena", image: "https://assets.analiticafantasy.com/jugadores/47533.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Starfelt", image: "https://assets.analiticafantasy.com/jugadores/47988.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "O. Mingueza", image: "https://assets.analiticafantasy.com/jugadores/162712.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Alvaro G.", image: "https://assets.analiticafantasy.com/jugadores/47543.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Marc Roca", image: "https://assets.analiticafantasy.com/jugadores/47341.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Pol Lozano", image: "https://assets.analiticafantasy.com/jugadores/127426.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "B. Iglesias", image: "https://assets.analiticafantasy.com/jugadores/47348.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "F. Vinas", image: "https://assets.analiticafantasy.com/jugadores/51530.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Mateo Joseph", image: "https://assets.analiticafantasy.com/jugadores/313059.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Luis Vazquez", image: "https://assets.analiticafantasy.com/jugadores/6490.png?width=300&height=300&version=31", jornadaPoints: 0 },
        ]
    ,
    mvpPlayer:
    {
      name: "Mbappé",
      image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31",
      totalPoints: 177,
      appearances: 7,
    }
    ,
    bestCaptain:
    {
      name: "Mbappé",
      image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31",
      totalPoints: 166,
      appearances: 6,
      captainTimes: 6,
      baseCaptainPoints: 83,
      doubledCaptainPoints: 166,
    }
    ,
    mostUsedPlayer:
    {
      name: "Dmitrovic",
      image: "https://assets.analiticafantasy.com/jugadores/2813.png?width=300&height=300&version=31",
      totalPoints: 76,
      appearances: 15,
    }
    ,
    bestSinglePlayerScore:
    {
      name: "Mbappé",
      image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31",
      points: 48,
      gameweek: 19,
      context: "Jornada 19",
    }
    ,
    worstSinglePlayerScore:
    {
      name: "Muriqi",
      image: "https://assets.analiticafantasy.com/jugadores/50048.png?width=300&height=300&version=31",
      points: -3,
      gameweek: 1,
      context: "Jornada 1",
    }
    ,
    managerStyle: "El creyente del brazalete",
    traits: {
      regularity: 71,
      explosiveness: 70,
      captainDependency: 38,
    },
    personalAward: {
      title: "Premio Resistencia",
      description: "Aguantó la temporada hasta el final.",
    },
  },
  {
    id: "serlliii",
    name: "serlliii",
    tagline: "",
    image: "/managers/serlliii.jpeg",
    rank: 5,
    totalPoints: 2226,
    averagePoints: 58.58,
    bestGameweek: 17,
    bestGameweekPoints: 106,
    worstGameweek: 26,
    worstGameweekPoints: 0,
    bestGameweekLineup:
    [
          { name: "A. Valles", image: "https://assets.analiticafantasy.com/jugadores/46990.png?width=300&height=300&version=31", jornadaPoints: 11 },
          { name: "Abel Bretones", image: "https://assets.analiticafantasy.com/jugadores/181259.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Koundé", image: "https://assets.analiticafantasy.com/jugadores/1257.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "David C.", image: "https://assets.analiticafantasy.com/jugadores/47429.png?width=300&height=300&version=31", jornadaPoints: 11 },
          { name: "Álvaro N.", image: "https://assets.analiticafantasy.com/jugadores/182661.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "Héctor F.", image: "https://assets.analiticafantasy.com/jugadores/386859.png?width=300&height=300&version=31", jornadaPoints: 12 },
          { name: "Arriaga", image: "https://assets.analiticafantasy.com/jugadores/125239.png?width=300&height=300&version=31", jornadaPoints: 1 },
          { name: "Rubén García", image: "https://assets.analiticafantasy.com/jugadores/46658.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Gorrotxa", image: "https://assets.analiticafantasy.com/jugadores/287654.png?width=300&height=300&version=31", jornadaPoints: 4 },
          { name: "Bellingham", image: "https://assets.analiticafantasy.com/jugadores/129718.png?width=300&height=300&version=31", jornadaPoints: 14 },
          { name: "Tsygankov", image: "https://assets.analiticafantasy.com/jugadores/2182.png?width=300&height=300&version=31", jornadaPoints: 3 },
        ]
    ,
    worstGameweekLineup:
    [
          { name: "Iñaki Peña", image: "https://assets.analiticafantasy.com/jugadores/126.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Abel Bretones", image: "https://assets.analiticafantasy.com/jugadores/181259.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Manu Sánchez", image: "https://assets.analiticafantasy.com/jugadores/64309.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Dela", image: "https://assets.analiticafantasy.com/jugadores/734.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Gayà", image: "https://assets.analiticafantasy.com/jugadores/918.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Pedri", image: "https://assets.analiticafantasy.com/jugadores/133609.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Rubén García", image: "https://assets.analiticafantasy.com/jugadores/46658.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Aitor Ruibal", image: "https://assets.analiticafantasy.com/jugadores/47119.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Gerard", image: "https://assets.analiticafantasy.com/jugadores/1707.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Raphinha", image: "https://assets.analiticafantasy.com/jugadores/1496.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Sin jugador", image: "", jornadaPoints: 0 },
        ]
    ,
    mvpPlayer:
    {
      name: "Pedri",
      image: "https://assets.analiticafantasy.com/jugadores/133609.png?width=300&height=300&version=31",
      totalPoints: 154,
      appearances: 19,
    }
    ,
    bestCaptain:
    {
      name: "Mbappé",
      image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31",
      totalPoints: 72,
      appearances: 10,
      captainTimes: 10,
      baseCaptainPoints: 36,
      doubledCaptainPoints: 72,
    }
    ,
    mostUsedPlayer:
    {
      name: "Manu Sánchez",
      image: "https://assets.analiticafantasy.com/jugadores/64309.png?width=300&height=300&version=31",
      totalPoints: 68,
      appearances: 25,
    }
    ,
    bestSinglePlayerScore:
    {
      name: "Raphinha",
      image: "https://assets.analiticafantasy.com/jugadores/1496.png?width=300&height=300&version=31",
      points: 40,
      gameweek: 28,
      context: "Jornada 28",
    }
    ,
    worstSinglePlayerScore:
    {
      name: "Morlanes",
      image: "https://assets.analiticafantasy.com/jugadores/1701.png?width=300&height=300&version=31",
      points: -2,
      gameweek: 1,
      context: "Jornada 1",
    }
    ,
    managerStyle: "El superviviente",
    traits: {
      regularity: 76,
      explosiveness: 83,
      captainDependency: 20,
    },
    personalAward: {
      title: "Premio Resistencia",
      description: "Aguantó la temporada hasta el final.",
    },
  },
  {
    id: "elhijoprodigo",
    name: "el hijo prodigo",
    tagline: "",
    image: "/managers/elhijoprodigo.jpeg",
    rank: 1,
    totalPoints: 2945,
    averagePoints: 77.50,
    bestGameweek: 14,
    bestGameweekPoints: 123,
    worstGameweek: 24,
    worstGameweekPoints: 34,
    bestGameweekLineup:
    [
          { name: "Aarón", image: "https://assets.analiticafantasy.com/jugadores/46673.png?width=300&height=300&version=31", jornadaPoints: 8 },
          { name: "Juan Iglesias", image: "https://assets.analiticafantasy.com/jugadores/119742.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Hancko", image: "https://assets.analiticafantasy.com/jugadores/30399.png?width=300&height=300&version=31", jornadaPoints: 13 },
          { name: "A. Pedraza", image: "https://assets.analiticafantasy.com/jugadores/1702.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Copete", image: "https://assets.analiticafantasy.com/jugadores/181582.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Trent", image: "https://assets.analiticafantasy.com/jugadores/283.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "C. Soler", image: "https://assets.analiticafantasy.com/jugadores/930.png?width=300&height=300&version=31", jornadaPoints: 11 },
          { name: "Ounahi", image: "https://assets.analiticafantasy.com/jugadores/129678.png?width=300&height=300&version=31", jornadaPoints: 10 },
          { name: "A. Moleiro", image: "https://assets.analiticafantasy.com/jugadores/182519.png?width=300&height=300&version=31", jornadaPoints: 15 },
          { name: "Julián Álvarez", image: "https://assets.analiticafantasy.com/jugadores/6009.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Lamine Yamal", image: "https://assets.analiticafantasy.com/jugadores/386828.png?width=300&height=300&version=31", jornadaPoints: 18 },
        ]
    ,
    worstGameweekLineup:
    [
          { name: "Vlachodimos", image: "https://assets.analiticafantasy.com/jugadores/557.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Ruggeri", image: "https://assets.analiticafantasy.com/jugadores/162012.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Rüdiger", image: "https://assets.analiticafantasy.com/jugadores/2285.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Jon Martin", image: "https://assets.analiticafantasy.com/jugadores/405073.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "F. Garcés", image: "https://assets.analiticafantasy.com/jugadores/6638.png?width=300&height=300&version=31", jornadaPoints: 4 },
          { name: "Guedes", image: "https://assets.analiticafantasy.com/jugadores/925.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "F. De Jong", image: "https://assets.analiticafantasy.com/jugadores/538.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Julián Álvarez", image: "https://assets.analiticafantasy.com/jugadores/6009.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Lamine Yamal", image: "https://assets.analiticafantasy.com/jugadores/386828.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Lookman", image: "https://assets.analiticafantasy.com/jugadores/18767.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Budimir", image: "https://assets.analiticafantasy.com/jugadores/46746.png?width=300&height=300&version=31", jornadaPoints: 4 },
        ]
    ,
    mvpPlayer:
    {
      name: "Lamine Yamal",
      image: "https://assets.analiticafantasy.com/jugadores/386828.png?width=300&height=300&version=31",
      totalPoints: 442,
      appearances: 19,
    }
    ,
    bestCaptain:
    {
      name: "Lamine Yamal",
      image: "https://assets.analiticafantasy.com/jugadores/386828.png?width=300&height=300&version=31",
      totalPoints: 442,
      appearances: 19,
      captainTimes: 19,
      baseCaptainPoints: 221,
      doubledCaptainPoints: 442,
    }
    ,
    mostUsedPlayer:
    {
      name: "Julián Álvarez",
      image: "https://assets.analiticafantasy.com/jugadores/6009.png?width=300&height=300&version=31",
      totalPoints: 109,
      appearances: 21,
    }
    ,
    bestSinglePlayerScore:
    {
      name: "Lamine Yamal",
      image: "https://assets.analiticafantasy.com/jugadores/386828.png?width=300&height=300&version=31",
      points: 48,
      gameweek: 31,
      context: "Jornada 31",
    }
    ,
    worstSinglePlayerScore:
    {
      name: "Agirrezabala",
      image: "https://assets.analiticafantasy.com/jugadores/183848.png?width=300&height=300&version=31",
      points: -2,
      gameweek: 4,
      context: "Jornada 4",
    }
    ,
    managerStyle: "El campeón",
    traits: {
      regularity: 100,
      explosiveness: 97,
      captainDependency: 100,
    },
    personalAward: {
      title: "Premio Campeón",
      description: "Dominó la temporada de principio a fin.",
    },
  },
  {
    id: "andrewskills",
    name: "AndrewSkills",
    tagline: "",
    image: "/managers/andrewskills.jpeg",
    rank: 3,
    totalPoints: 2419,
    averagePoints: 63.66,
    bestGameweek: 38,
    bestGameweekPoints: 93,
    worstGameweek: 4,
    worstGameweekPoints: 27,
    bestGameweekLineup:
    [
          { name: "Oblak", image: "https://assets.analiticafantasy.com/jugadores/29.png?width=300&height=300&version=31", jornadaPoints: 12 },
          { name: "Vitor Reis", image: "https://assets.analiticafantasy.com/jugadores/414359.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Arnau", image: "https://assets.analiticafantasy.com/jugadores/283668.png?width=300&height=300&version=31", jornadaPoints: 8 },
          { name: "C. Romero", image: "https://assets.analiticafantasy.com/jugadores/184420.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "Hancko", image: "https://assets.analiticafantasy.com/jugadores/30399.png?width=300&height=300&version=31", jornadaPoints: -3 },
          { name: "Germán V.", image: "https://assets.analiticafantasy.com/jugadores/161963.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Fornals", image: "https://assets.analiticafantasy.com/jugadores/1697.png?width=300&height=300&version=31", jornadaPoints: 10 },
          { name: "Darder", image: "https://assets.analiticafantasy.com/jugadores/47336.png?width=300&height=300&version=31", jornadaPoints: 8 },
          { name: "Bellingham", image: "https://assets.analiticafantasy.com/jugadores/129718.png?width=300&height=300&version=31", jornadaPoints: 10 },
          { name: "T. Martínez", image: "https://assets.analiticafantasy.com/jugadores/47181.png?width=300&height=300&version=31", jornadaPoints: 8 },
          { name: "Muriqi", image: "https://assets.analiticafantasy.com/jugadores/50048.png?width=300&height=300&version=31", jornadaPoints: 12 },
        ]
    ,
    worstGameweekLineup:
    [
          { name: "Nyland", image: "https://assets.analiticafantasy.com/jugadores/19172.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Cardona", image: "https://assets.analiticafantasy.com/jugadores/70500.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Affengruber", image: "https://assets.analiticafantasy.com/jugadores/126640.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Tárrega", image: "https://assets.analiticafantasy.com/jugadores/333672.png?width=300&height=300&version=31", jornadaPoints: -5 },
          { name: "Boyomo", image: "https://assets.analiticafantasy.com/jugadores/279822.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Kike Salas", image: "https://assets.analiticafantasy.com/jugadores/297311.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Buchanan", image: "https://assets.analiticafantasy.com/jugadores/51016.png?width=300&height=300&version=31", jornadaPoints: 1 },
          { name: "Germán V.", image: "https://assets.analiticafantasy.com/jugadores/161963.png?width=300&height=300&version=31", jornadaPoints: 0 },
          { name: "Riquelme", image: "https://assets.analiticafantasy.com/jugadores/136117.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Berenguer", image: "https://assets.analiticafantasy.com/jugadores/30510.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Isi", image: "https://assets.analiticafantasy.com/jugadores/131546.png?width=300&height=300&version=31", jornadaPoints: 1 },
        ]
    ,
    mvpPlayer:
    {
      name: "Fornals",
      image: "https://assets.analiticafantasy.com/jugadores/1697.png?width=300&height=300&version=31",
      totalPoints: 162,
      appearances: 19,
    }
    ,
    bestCaptain:
    {
      name: "Fornals",
      image: "https://assets.analiticafantasy.com/jugadores/1697.png?width=300&height=300&version=31",
      totalPoints: 80,
      appearances: 6,
      captainTimes: 6,
      baseCaptainPoints: 40,
      doubledCaptainPoints: 80,
    }
    ,
    mostUsedPlayer:
    {
      name: "Oblak",
      image: "https://assets.analiticafantasy.com/jugadores/29.png?width=300&height=300&version=31",
      totalPoints: 160,
      appearances: 27,
    }
    ,
    bestSinglePlayerScore:
    {
      name: "Bellingham",
      image: "https://assets.analiticafantasy.com/jugadores/129718.png?width=300&height=300&version=31",
      points: 36,
      gameweek: 13,
      context: "Jornada 13",
    }
    ,
    worstSinglePlayerScore:
    {
      name: "Tárrega",
      image: "https://assets.analiticafantasy.com/jugadores/333672.png?width=300&height=300&version=31",
      points: -5,
      gameweek: 4,
      context: "Jornada 4",
    }
    ,
    managerStyle: "El aspirante",
    traits: {
      regularity: 82,
      explosiveness: 73,
      captainDependency: 20,
    },
    personalAward: {
      title: "Premio Podio",
      description: "Terminó la temporada entre los tres mejores.",
    },
  },
  {
    id: "javigaleano11",
    name: "Javigaleano11",
    tagline: "",
    image: "/managers/javigaleano11.jpeg",
    rank: 2,
    totalPoints: 2679,
    averagePoints: 70.50,
    bestGameweek: 34,
    bestGameweekPoints: 127,
    worstGameweek: 35,
    worstGameweekPoints: 41,
    bestGameweekLineup:
    [
          { name: "Lunin", image: "https://assets.analiticafantasy.com/jugadores/47400.png?width=300&height=300&version=31", jornadaPoints: 12 },
          { name: "Llorente", image: "https://assets.analiticafantasy.com/jugadores/753.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Daley Blind", image: "https://assets.analiticafantasy.com/jugadores/531.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Cancelo", image: "https://assets.analiticafantasy.com/jugadores/855.png?width=300&height=300&version=31", jornadaPoints: 5 },
          { name: "Bellerín", image: "https://assets.analiticafantasy.com/jugadores/1439.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Tchouaméni", image: "https://assets.analiticafantasy.com/jugadores/1271.png?width=300&height=300&version=31", jornadaPoints: 8 },
          { name: "Fermín", image: "https://assets.analiticafantasy.com/jugadores/340626.png?width=300&height=300&version=31", jornadaPoints: 11 },
          { name: "Bellingham", image: "https://assets.analiticafantasy.com/jugadores/129718.png?width=300&height=300&version=31", jornadaPoints: 12 },
          { name: "Lewandowski", image: "https://assets.analiticafantasy.com/jugadores/521.png?width=300&height=300&version=31", jornadaPoints: 9 },
          { name: "Vini Jr.", image: "https://assets.analiticafantasy.com/jugadores/762.png?width=300&height=300&version=31", jornadaPoints: 15 },
          { name: "Pepe", image: "https://assets.analiticafantasy.com/jugadores/3246.png?width=300&height=300&version=31", jornadaPoints: 19 },
        ]
    ,
    worstGameweekLineup:
    [
          { name: "Vlachodimos", image: "https://assets.analiticafantasy.com/jugadores/557.png?width=300&height=300&version=31", jornadaPoints: 8 },
          { name: "Llorente", image: "https://assets.analiticafantasy.com/jugadores/753.png?width=300&height=300&version=31", jornadaPoints: 1 },
          { name: "Daley Blind", image: "https://assets.analiticafantasy.com/jugadores/531.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Bellerín", image: "https://assets.analiticafantasy.com/jugadores/1439.png?width=300&height=300&version=31", jornadaPoints: -1 },
          { name: "Kike Salas", image: "https://assets.analiticafantasy.com/jugadores/297311.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Fermín", image: "https://assets.analiticafantasy.com/jugadores/340626.png?width=300&height=300&version=31", jornadaPoints: 6 },
          { name: "Samu Costa", image: "https://assets.analiticafantasy.com/jugadores/190485.png?width=300&height=300&version=31", jornadaPoints: 3 },
          { name: "Lewandowski", image: "https://assets.analiticafantasy.com/jugadores/521.png?width=300&height=300&version=31", jornadaPoints: 2 },
          { name: "Vini Jr.", image: "https://assets.analiticafantasy.com/jugadores/762.png?width=300&height=300&version=31", jornadaPoints: 1 },
          { name: "Budimir", image: "https://assets.analiticafantasy.com/jugadores/46746.png?width=300&height=300&version=31", jornadaPoints: 7 },
          { name: "Pepe", image: "https://assets.analiticafantasy.com/jugadores/3246.png?width=300&height=300&version=31", jornadaPoints: 2 },
        ]
    ,
    mvpPlayer:
    {
      name: "Mbappé",
      image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31",
      totalPoints: 235,
      appearances: 12,
    }
    ,
    bestCaptain:
    {
      name: "Mbappé",
      image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31",
      totalPoints: 222,
      appearances: 11,
      captainTimes: 11,
      baseCaptainPoints: 111,
      doubledCaptainPoints: 222,
    }
    ,
    mostUsedPlayer:
    {
      name: "Vini Jr.",
      image: "https://assets.analiticafantasy.com/jugadores/762.png?width=300&height=300&version=31",
      totalPoints: 186,
      appearances: 14,
    }
    ,
    bestSinglePlayerScore:
    {
      name: "Mbappé",
      image: "https://assets.analiticafantasy.com/jugadores/278.png?width=300&height=300&version=31",
      points: 36,
      gameweek: 6,
      context: "Jornada 6",
    }
    ,
    worstSinglePlayerScore:
    {
      name: "Courtois",
      image: "https://assets.analiticafantasy.com/jugadores/730.png?width=300&height=300&version=31",
      points: -3,
      gameweek: 25,
      context: "Jornada 25",
    }
    ,
    managerStyle: "El aspirante",
    traits: {
      regularity: 91,
      explosiveness: 100,
      captainDependency: 50,
    },
    personalAward: {
      title: "Premio Podio",
      description: "Terminó la temporada entre los tres mejores.",
    },
  },
]

// ============================================
// OBJECTIVE LEAGUE AWARDS DATA
// ============================================
// Este bloque no alimenta la pantalla actual de premios personalizados,
// pero se deja actualizado por coherencia con los datos reales.
export const leagueAwardsData: LeagueAwards = {
  bestMatchday: {
    managerId: "javigaleano11",
    managerName: "Javigaleano11",
    value: 127,
    gameweek: 34,
  },
  worstMatchdayNonZero: {
    managerId: "mrpablada",
    managerName: "MrPablada",
    value: 20,
    gameweek: 4,
  },
  bestSinglePlayerScore: {
    managerId: "toniiarias",
    managerName: "toniiarias_",
    playerName: "Mbappé",
    value: 48,
    context: "Jornada 19",
  },
  worstSinglePlayerScore: {
    managerId: "andrewskills",
    managerName: "AndrewSkills",
    playerName: "Tárrega",
    value: -5,
    context: "Jornada 4",
  },
  mostExpensiveTeam: {
    managerId: "mrpablada",
    managerName: "MrPablada",
    teamValue: "Pendiente",
    description: "Dato manual no usado por la pantalla actual de premios",
  },
}

// ============================================
// PODIUM DATA
// ============================================
export const podiumPrizes = {
  first: 112,
  second: 30,
  third: 10,
}

// ============================================
// HELPER FUNCTIONS
// ============================================
export function getManagerById(id: string): ManagerWrapped | undefined {
  return mockManagers.find((m) => m.id === id)
}

export function getChampion(): ManagerWrapped {
  return mockManagers.find((m) => m.rank === 1)!
}

export function getRankedManagers(): ManagerWrapped[] {
  return [...mockManagers].sort((a, b) => a.rank - b.rank)
}

export function getTop3Managers(): ManagerWrapped[] {
  return getRankedManagers().slice(0, 3)
}


// ============================================
// CUSTOM LEAGUE AWARDS
// ============================================

export type CustomLeagueAward = {
  id: string
  title: string
  managerId: string
  managerName: string
  reason: string
  image: string
  accentColor: string
}

export const customLeagueAwards: CustomLeagueAward[] = [
  {
    id: "mayor-caida",
    title: "La mayor caída",
    managerId: "serlliii",
    managerName: "serlliii",
    reason: "Pasar del 2º al 5º puesto",
    image: "/managers/serlliii.jpeg",
    accentColor: "#EF4444",
  },
  {
    id: "hasta-el-90",
    title: "Hasta el 90",
    managerId: "andrewskills",
    managerName: "AndrewSkills",
    reason: "Pasar del último al tercer puesto",
    image: "/managers/andrewskills.jpeg",
    accentColor: "#00A3FF",
  },
  {
    id: "jornada-historica",
    title: "Jornada histórica",
    managerId: "javigaleano11",
    managerName: "Javigaleano11",
    reason: "Hacer 127 puntos en una jornada",
    image: "/managers/javigaleano11.jpeg",
    accentColor: "#00FF85",
  },
  {
    id: "abuson",
    title: "Abusón",
    managerId: "el-hijo-prodigo",
    managerName: "el hijo prodigo",
    reason: "Estar primero 28 jornadas",
    image: "/managers/elhijoprodigo.jpeg",
    accentColor: "#FACC15",
  },
  {
    id: "fe",
    title: "Fe",
    managerId: "pedrolgp01",
    managerName: "pedrolgp01",
    reason: "Aguantó a Isco lesionado durante 21 jornadas",
    image: "/managers/pedrolgp01.jpeg",
    accentColor: "#A855F7",
  },
  {
    id: "casta",
    title: "Casta",
    managerId: "mrpablada",
    managerName: "MrPablada",
    reason: "Tener representación sevillista en su equipo 26 jornadas",
    image: "/managers/mrpablada.jpeg",
    accentColor: "#22C55E",
  },
  {
    id: "hansi-arias",
    title: "Hansi Arias",
    managerId: "toniiarias",
    managerName: "toniiarias",
    reason: "Llevar a Hansi Flick 35 jornadas",
    image: "/managers/toniiarias.jpeg",
    accentColor: "#38BDF8",
  },
]