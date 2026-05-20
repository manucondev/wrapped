// ============================================
// FANTASY WRAPPED 25/26 - MOCK DATA
// ============================================
// This file contains all mock data for the Fantasy Wrapped app.
// Replace this data with real CSV/JSON data when available.
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
  image?: string // Manager photo
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
// MOCK MANAGERS DATA
// ============================================
export const mockManagers: ManagerWrapped[] = [
  {
    id: "mrpablada",
    name: "MrPablada",
    tagline: "El estratega del mercado",
    image: "/managers/mrpablada.png",
    rank: 1,
    totalPoints: 2847,
    averagePoints: 74.9,
    bestGameweek: 28,
    bestGameweekPoints: 112,
    worstGameweek: 5,
    worstGameweekPoints: 34,
    bestGameweekLineup: [
      { name: "Oblak", image: "/players/oblak.png", jornadaPoints: 9 },
      { name: "Carvajal", image: "/players/carvajal.png", jornadaPoints: 8 },
      { name: "Araujo", image: "/players/araujo.png", jornadaPoints: 7 },
      { name: "Grimaldo", image: "/players/grimaldo.png", jornadaPoints: 11 },
      { name: "Cancelo", image: "/players/cancelo.png", jornadaPoints: 6 },
      { name: "Pedri", image: "/players/pedri.png", jornadaPoints: 10 },
      { name: "Bellingham", image: "/players/bellingham.png", jornadaPoints: 14 },
      { name: "Lamine Yamal", image: "/players/lamine-yamal.png", jornadaPoints: 18 },
      { name: "Raphinha", image: "/players/raphinha.png", jornadaPoints: 12 },
      { name: "Griezmann", image: "/players/griezmann.png", jornadaPoints: 9 },
      { name: "Lewandowski", image: "/players/lewandowski.png", jornadaPoints: 8 },
    ],
    worstGameweekLineup: [
      { name: "Oblak", image: "/players/oblak.png", jornadaPoints: 2 },
      { name: "Carvajal", image: "/players/carvajal.png", jornadaPoints: 3 },
      { name: "Araujo", image: "/players/araujo.png", jornadaPoints: 1 },
      { name: "Grimaldo", image: "/players/grimaldo.png", jornadaPoints: 4 },
      { name: "Cancelo", image: "/players/cancelo.png", jornadaPoints: 2 },
      { name: "Pedri", image: "/players/pedri.png", jornadaPoints: 5 },
      { name: "Bellingham", image: "/players/bellingham.png", jornadaPoints: 3 },
      { name: "Lamine Yamal", image: "/players/lamine-yamal.png", jornadaPoints: 4 },
      { name: "Raphinha", image: "/players/raphinha.png", jornadaPoints: 2 },
      { name: "Griezmann", image: "/players/griezmann.png", jornadaPoints: 6 },
      { name: "Lewandowski", image: "/players/lewandowski.png", jornadaPoints: 2 },
    ],
    mvpPlayer: {
      name: "Lamine Yamal",
      image: "/players/lamine-yamal.png",
      totalPoints: 287,
      appearances: 35,
    },
    bestCaptain: {
      name: "Lamine Yamal",
      image: "/players/lamine-yamal.png",
      totalPoints: 412,
      appearances: 18,
      captainTimes: 18,
      baseCaptainPoints: 206,
      doubledCaptainPoints: 412,
    },
    mostUsedPlayer: {
      name: "Oblak",
      image: "/players/oblak.png",
      totalPoints: 198,
      appearances: 38,
    },
    managerStyle: "El creyente de Lamine",
    traits: {
      regularity: 85,
      explosiveness: 72,
      captainDependency: 90,
    },
    personalAward: {
      title: "Premio Lamine y diez más",
      description: "Cuando Lamine rinde, tú rindes. Simple.",
    },
  },
  {
    id: "pedrolgp01",
    name: "pedrolgp01",
    tagline: "La consistencia hecha persona",
    image: "/managers/pedrolgp01.png",
    rank: 2,
    totalPoints: 2756,
    averagePoints: 72.5,
    bestGameweek: 15,
    bestGameweekPoints: 98,
    worstGameweek: 22,
    worstGameweekPoints: 41,
    bestGameweekLineup: [
      { name: "Courtois", image: "/players/courtois.png", jornadaPoints: 8 },
      { name: "Nacho", image: "/players/nacho.png", jornadaPoints: 7 },
      { name: "Kounde", image: "/players/kounde.png", jornadaPoints: 9 },
      { name: "Alba", image: "/players/alba.png", jornadaPoints: 6 },
      { name: "Mendy", image: "/players/mendy.png", jornadaPoints: 5 },
      { name: "Valverde", image: "/players/valverde.png", jornadaPoints: 11 },
      { name: "Kroos", image: "/players/kroos.png", jornadaPoints: 8 },
      { name: "Griezmann", image: "/players/griezmann.png", jornadaPoints: 15 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 12 },
      { name: "Morata", image: "/players/morata.png", jornadaPoints: 9 },
      { name: "Álvarez", image: "/players/alvarez.png", jornadaPoints: 8 },
    ],
    worstGameweekLineup: [
      { name: "Courtois", image: "/players/courtois.png", jornadaPoints: 3 },
      { name: "Nacho", image: "/players/nacho.png", jornadaPoints: 4 },
      { name: "Kounde", image: "/players/kounde.png", jornadaPoints: 3 },
      { name: "Alba", image: "/players/alba.png", jornadaPoints: 2 },
      { name: "Mendy", image: "/players/mendy.png", jornadaPoints: 4 },
      { name: "Valverde", image: "/players/valverde.png", jornadaPoints: 5 },
      { name: "Kroos", image: "/players/kroos.png", jornadaPoints: 4 },
      { name: "Griezmann", image: "/players/griezmann.png", jornadaPoints: 6 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 3 },
      { name: "Morata", image: "/players/morata.png", jornadaPoints: 4 },
      { name: "Álvarez", image: "/players/alvarez.png", jornadaPoints: 3 },
    ],
    mvpPlayer: {
      name: "Griezmann",
      image: "/players/griezmann.png",
      totalPoints: 256,
      appearances: 36,
    },
    bestCaptain: {
      name: "Griezmann",
      image: "/players/griezmann.png",
      totalPoints: 324,
      appearances: 14,
      captainTimes: 14,
      baseCaptainPoints: 162,
      doubledCaptainPoints: 324,
    },
    mostUsedPlayer: {
      name: "Griezmann",
      image: "/players/griezmann.png",
      totalPoints: 256,
      appearances: 36,
    },
    managerStyle: "El cholista",
    traits: {
      regularity: 92,
      explosiveness: 45,
      captainDependency: 65,
    },
    personalAward: {
      title: "Premio Simeone: partido a partido",
      description: "Sin prisa pero sin pausa. Así se ganan ligas.",
    },
  },
  {
    id: "toniiarias",
    name: "toniiarias_",
    tagline: "Explosivo cuando menos lo esperas",
    image: "/managers/toniiarias.png",
    rank: 3,
    totalPoints: 2689,
    averagePoints: 70.8,
    bestGameweek: 32,
    bestGameweekPoints: 118,
    worstGameweek: 8,
    worstGameweekPoints: 28,
    bestGameweekLineup: [
      { name: "Ter Stegen", image: "/players/ter-stegen.png", jornadaPoints: 10 },
      { name: "Balde", image: "/players/balde.png", jornadaPoints: 9 },
      { name: "Cubarsí", image: "/players/cubarsi.png", jornadaPoints: 8 },
      { name: "Carvajal", image: "/players/carvajal.png", jornadaPoints: 11 },
      { name: "Reguilón", image: "/players/reguilon.png", jornadaPoints: 7 },
      { name: "Pedri", image: "/players/pedri.png", jornadaPoints: 12 },
      { name: "Gavi", image: "/players/gavi.png", jornadaPoints: 9 },
      { name: "Raphinha", image: "/players/raphinha.png", jornadaPoints: 19 },
      { name: "Lamine Yamal", image: "/players/lamine-yamal.png", jornadaPoints: 14 },
      { name: "Lewandowski", image: "/players/lewandowski.png", jornadaPoints: 11 },
      { name: "Griezmann", image: "/players/griezmann.png", jornadaPoints: 8 },
    ],
    worstGameweekLineup: [
      { name: "Ter Stegen", image: "/players/ter-stegen.png", jornadaPoints: 1 },
      { name: "Balde", image: "/players/balde.png", jornadaPoints: 2 },
      { name: "Cubarsí", image: "/players/cubarsi.png", jornadaPoints: 3 },
      { name: "Carvajal", image: "/players/carvajal.png", jornadaPoints: 2 },
      { name: "Reguilón", image: "/players/reguilon.png", jornadaPoints: 3 },
      { name: "Pedri", image: "/players/pedri.png", jornadaPoints: 4 },
      { name: "Gavi", image: "/players/gavi.png", jornadaPoints: 2 },
      { name: "Raphinha", image: "/players/raphinha.png", jornadaPoints: 3 },
      { name: "Lamine Yamal", image: "/players/lamine-yamal.png", jornadaPoints: 2 },
      { name: "Lewandowski", image: "/players/lewandowski.png", jornadaPoints: 4 },
      { name: "Griezmann", image: "/players/griezmann.png", jornadaPoints: 2 },
    ],
    mvpPlayer: {
      name: "Raphinha",
      image: "/players/raphinha.png",
      totalPoints: 243,
      appearances: 34,
    },
    bestCaptain: {
      name: "Raphinha",
      image: "/players/raphinha.png",
      totalPoints: 286,
      appearances: 12,
      captainTimes: 12,
      baseCaptainPoints: 143,
      doubledCaptainPoints: 286,
    },
    mostUsedPlayer: {
      name: "Ter Stegen",
      image: "/players/ter-stegen.png",
      totalPoints: 167,
      appearances: 32,
    },
    managerStyle: "El kamikaze de las jornadas",
    traits: {
      regularity: 58,
      explosiveness: 95,
      captainDependency: 55,
    },
    personalAward: {
      title: "Premio Jornada Milagrosa",
      description: "118 puntos en la J32. Leyenda.",
    },
  },
  {
    id: "serlliii",
    name: "serlliii",
    tagline: "El calculador silencioso",
    image: "/managers/serlliii.png",
    rank: 4,
    totalPoints: 2612,
    averagePoints: 68.7,
    bestGameweek: 19,
    bestGameweekPoints: 95,
    worstGameweek: 3,
    worstGameweekPoints: 38,
    bestGameweekLineup: [
      { name: "Courtois", image: "/players/courtois.png", jornadaPoints: 9 },
      { name: "Militão", image: "/players/militao.png", jornadaPoints: 7 },
      { name: "Rüdiger", image: "/players/rudiger.png", jornadaPoints: 8 },
      { name: "Mendy", image: "/players/mendy.png", jornadaPoints: 6 },
      { name: "Carvajal", image: "/players/carvajal.png", jornadaPoints: 5 },
      { name: "Bellingham", image: "/players/bellingham.png", jornadaPoints: 16 },
      { name: "Valverde", image: "/players/valverde.png", jornadaPoints: 10 },
      { name: "Modric", image: "/players/modric.png", jornadaPoints: 8 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 11 },
      { name: "Rodrygo", image: "/players/rodrygo.png", jornadaPoints: 7 },
      { name: "Mbappé", image: "/players/mbappe.png", jornadaPoints: 8 },
    ],
    worstGameweekLineup: [
      { name: "Courtois", image: "/players/courtois.png", jornadaPoints: 4 },
      { name: "Militão", image: "/players/militao.png", jornadaPoints: 3 },
      { name: "Rüdiger", image: "/players/rudiger.png", jornadaPoints: 2 },
      { name: "Mendy", image: "/players/mendy.png", jornadaPoints: 3 },
      { name: "Carvajal", image: "/players/carvajal.png", jornadaPoints: 4 },
      { name: "Bellingham", image: "/players/bellingham.png", jornadaPoints: 5 },
      { name: "Valverde", image: "/players/valverde.png", jornadaPoints: 4 },
      { name: "Modric", image: "/players/modric.png", jornadaPoints: 3 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 4 },
      { name: "Rodrygo", image: "/players/rodrygo.png", jornadaPoints: 3 },
      { name: "Mbappé", image: "/players/mbappe.png", jornadaPoints: 3 },
    ],
    mvpPlayer: {
      name: "Bellingham",
      image: "/players/bellingham.png",
      totalPoints: 267,
      appearances: 33,
    },
    bestCaptain: {
      name: "Bellingham",
      image: "/players/bellingham.png",
      totalPoints: 356,
      appearances: 16,
      captainTimes: 16,
      baseCaptainPoints: 178,
      doubledCaptainPoints: 356,
    },
    mostUsedPlayer: {
      name: "Courtois",
      image: "/players/courtois.png",
      totalPoints: 189,
      appearances: 37,
    },
    managerStyle: "El estratega frío",
    traits: {
      regularity: 78,
      explosiveness: 62,
      captainDependency: 75,
    },
    personalAward: {
      title: "Premio Capitán de Hierro",
      description: "Bellingham con el brazalete. Sin negociación.",
    },
  },
  {
    id: "elhijoprodigo",
    name: "el hijo prodigo",
    tagline: "Volvió para quedarse",
    image: "/managers/elhijoprodigo.png",
    rank: 5,
    totalPoints: 2534,
    averagePoints: 66.7,
    bestGameweek: 11,
    bestGameweekPoints: 102,
    worstGameweek: 27,
    worstGameweekPoints: 31,
    bestGameweekLineup: [
      { name: "Mamardashvili", image: "/players/mamardashvili.png", jornadaPoints: 8 },
      { name: "Gayà", image: "/players/gaya.png", jornadaPoints: 7 },
      { name: "Diakhaby", image: "/players/diakhaby.png", jornadaPoints: 6 },
      { name: "Thierry", image: "/players/thierry.png", jornadaPoints: 5 },
      { name: "Foulquier", image: "/players/foulquier.png", jornadaPoints: 6 },
      { name: "Javi Guerra", image: "/players/javi-guerra.png", jornadaPoints: 9 },
      { name: "Pepelu", image: "/players/pepelu.png", jornadaPoints: 8 },
      { name: "Hugo Duro", image: "/players/hugo-duro.png", jornadaPoints: 12 },
      { name: "Mbappé", image: "/players/mbappe.png", jornadaPoints: 18 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 13 },
      { name: "Lewandowski", image: "/players/lewandowski.png", jornadaPoints: 10 },
    ],
    worstGameweekLineup: [
      { name: "Mamardashvili", image: "/players/mamardashvili.png", jornadaPoints: 2 },
      { name: "Gayà", image: "/players/gaya.png", jornadaPoints: 3 },
      { name: "Diakhaby", image: "/players/diakhaby.png", jornadaPoints: 2 },
      { name: "Thierry", image: "/players/thierry.png", jornadaPoints: 3 },
      { name: "Foulquier", image: "/players/foulquier.png", jornadaPoints: 2 },
      { name: "Javi Guerra", image: "/players/javi-guerra.png", jornadaPoints: 4 },
      { name: "Pepelu", image: "/players/pepelu.png", jornadaPoints: 3 },
      { name: "Hugo Duro", image: "/players/hugo-duro.png", jornadaPoints: 2 },
      { name: "Mbappé", image: "/players/mbappe.png", jornadaPoints: 4 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 3 },
      { name: "Lewandowski", image: "/players/lewandowski.png", jornadaPoints: 3 },
    ],
    mvpPlayer: {
      name: "Mbappé",
      image: "/players/mbappe.png",
      totalPoints: 234,
      appearances: 30,
    },
    bestCaptain: {
      name: "Mbappé",
      image: "/players/mbappe.png",
      totalPoints: 298,
      appearances: 15,
      captainTimes: 15,
      baseCaptainPoints: 149,
      doubledCaptainPoints: 298,
    },
    mostUsedPlayer: {
      name: "Mbappé",
      image: "/players/mbappe.png",
      totalPoints: 234,
      appearances: 30,
    },
    managerStyle: "El dependiente del capitán",
    traits: {
      regularity: 65,
      explosiveness: 70,
      captainDependency: 95,
    },
    personalAward: {
      title: "Premio Dependencia Emocional",
      description: "Si Mbappé no marca, tú no duermes.",
    },
  },
  {
    id: "andrewskills",
    name: "AndrewSkills",
    tagline: "El misterioso del grupo",
    image: "/managers/andrewskills.png",
    rank: 6,
    totalPoints: 2456,
    averagePoints: 64.6,
    bestGameweek: 24,
    bestGameweekPoints: 89,
    worstGameweek: 14,
    worstGameweekPoints: 35,
    bestGameweekLineup: [
      { name: "Remiro", image: "/players/remiro.png", jornadaPoints: 7 },
      { name: "Azpilicueta", image: "/players/azpilicueta.png", jornadaPoints: 6 },
      { name: "Le Normand", image: "/players/le-normand.png", jornadaPoints: 8 },
      { name: "Parejo", image: "/players/parejo.png", jornadaPoints: 5 },
      { name: "Mario Hermoso", image: "/players/mario-hermoso.png", jornadaPoints: 6 },
      { name: "Ødegaard", image: "/players/odegaard.png", jornadaPoints: 10 },
      { name: "Merino", image: "/players/merino.png", jornadaPoints: 8 },
      { name: "Savio", image: "/players/savio.png", jornadaPoints: 12 },
      { name: "Williams", image: "/players/williams.png", jornadaPoints: 9 },
      { name: "Oyarzabal", image: "/players/oyarzabal.png", jornadaPoints: 10 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 8 },
    ],
    worstGameweekLineup: [
      { name: "Remiro", image: "/players/remiro.png", jornadaPoints: 3 },
      { name: "Azpilicueta", image: "/players/azpilicueta.png", jornadaPoints: 2 },
      { name: "Le Normand", image: "/players/le-normand.png", jornadaPoints: 4 },
      { name: "Parejo", image: "/players/parejo.png", jornadaPoints: 3 },
      { name: "Mario Hermoso", image: "/players/mario-hermoso.png", jornadaPoints: 2 },
      { name: "Ødegaard", image: "/players/odegaard.png", jornadaPoints: 5 },
      { name: "Merino", image: "/players/merino.png", jornadaPoints: 3 },
      { name: "Savio", image: "/players/savio.png", jornadaPoints: 4 },
      { name: "Williams", image: "/players/williams.png", jornadaPoints: 3 },
      { name: "Oyarzabal", image: "/players/oyarzabal.png", jornadaPoints: 4 },
      { name: "Vinícius", image: "/players/vinicius.png", jornadaPoints: 2 },
    ],
    mvpPlayer: {
      name: "Savio",
      image: "/players/savio.png",
      totalPoints: 198,
      appearances: 32,
    },
    bestCaptain: {
      name: "Vinícius",
      image: "/players/vinicius.png",
      totalPoints: 234,
      appearances: 10,
      captainTimes: 10,
      baseCaptainPoints: 117,
      doubledCaptainPoints: 234,
    },
    mostUsedPlayer: {
      name: "Savio",
      image: "/players/savio.png",
      totalPoints: 198,
      appearances: 32,
    },
    managerStyle: "El regular silencioso",
    traits: {
      regularity: 72,
      explosiveness: 48,
      captainDependency: 52,
    },
    personalAward: {
      title: "Premio Bajo Perfil",
      description: "Nadie te ve venir. Eso es poder.",
    },
  },
  {
    id: "javigaleano11",
    name: "Javigaleano11",
    tagline: "El que nunca se rinde",
    image: "/managers/javigaleano11.png",
    rank: 7,
    totalPoints: 2378,
    averagePoints: 62.6,
    bestGameweek: 36,
    bestGameweekPoints: 94,
    worstGameweek: 1,
    worstGameweekPoints: 29,
    bestGameweekLineup: [
      { name: "Unai Simón", image: "/players/unai-simon.png", jornadaPoints: 8 },
      { name: "Vivian", image: "/players/vivian.png", jornadaPoints: 7 },
      { name: "Yeray", image: "/players/yeray.png", jornadaPoints: 6 },
      { name: "Lekue", image: "/players/lekue.png", jornadaPoints: 5 },
      { name: "Yuri", image: "/players/yuri.png", jornadaPoints: 7 },
      { name: "Sancet", image: "/players/sancet.png", jornadaPoints: 10 },
      { name: "Vesga", image: "/players/vesga.png", jornadaPoints: 6 },
      { name: "Williams", image: "/players/williams.png", jornadaPoints: 15 },
      { name: "Muniain", image: "/players/muniain.png", jornadaPoints: 9 },
      { name: "Berenguer", image: "/players/berenguer.png", jornadaPoints: 8 },
      { name: "Ayoze", image: "/players/ayoze.png", jornadaPoints: 13 },
    ],
    worstGameweekLineup: [
      { name: "Unai Simón", image: "/players/unai-simon.png", jornadaPoints: 2 },
      { name: "Vivian", image: "/players/vivian.png", jornadaPoints: 3 },
      { name: "Yeray", image: "/players/yeray.png", jornadaPoints: 2 },
      { name: "Lekue", image: "/players/lekue.png", jornadaPoints: 3 },
      { name: "Yuri", image: "/players/yuri.png", jornadaPoints: 2 },
      { name: "Sancet", image: "/players/sancet.png", jornadaPoints: 4 },
      { name: "Vesga", image: "/players/vesga.png", jornadaPoints: 2 },
      { name: "Williams", image: "/players/williams.png", jornadaPoints: 3 },
      { name: "Muniain", image: "/players/muniain.png", jornadaPoints: 2 },
      { name: "Berenguer", image: "/players/berenguer.png", jornadaPoints: 3 },
      { name: "Ayoze", image: "/players/ayoze.png", jornadaPoints: 3 },
    ],
    mvpPlayer: {
      name: "Ayoze",
      image: "/players/ayoze.png",
      totalPoints: 176,
      appearances: 34,
    },
    bestCaptain: {
      name: "Williams",
      image: "/players/williams.png",
      totalPoints: 212,
      appearances: 11,
      captainTimes: 11,
      baseCaptainPoints: 106,
      doubledCaptainPoints: 212,
    },
    mostUsedPlayer: {
      name: "Remiro",
      image: "/players/remiro.png",
      totalPoints: 156,
      appearances: 36,
    },
    managerStyle: "El creyente hasta el final",
    traits: {
      regularity: 55,
      explosiveness: 58,
      captainDependency: 60,
    },
    personalAward: {
      title: "Premio Resiliencia",
      description: "Empezaste mal pero terminaste luchando.",
    },
  },
]

// ============================================
// LEAGUE AWARDS DATA (New Structure)
// ============================================
export const leagueAwardsData: LeagueAwards = {
  bestMatchday: {
    managerId: "toniiarias",
    managerName: "toniiarias_",
    value: 118,
    gameweek: 32,
  },
  worstMatchdayNonZero: {
    managerId: "javigaleano11",
    managerName: "Javigaleano11",
    value: 29,
    gameweek: 1,
  },
  bestSinglePlayerScore: {
    managerId: "toniiarias",
    managerName: "toniiarias_",
    playerName: "Raphinha",
    value: 19,
    context: "Jornada 32 - Hat-trick + asistencia",
  },
  worstSinglePlayerScore: {
    managerId: "toniiarias",
    managerName: "toniiarias_",
    playerName: "Ter Stegen",
    value: 1,
    context: "Jornada 8 - Lesión en el minuto 12",
  },
  mostExpensiveTeam: {
    managerId: "mrpablada",
    managerName: "MrPablada",
    teamValue: "245.3M",
    description: "El presupuesto no tiene límites cuando hay pasión",
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
