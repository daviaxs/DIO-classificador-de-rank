const heroi = {
  name: 'Super Choque',
  xp: 4000
}

const rank = {
  FERRO: {min: 0, max: 1000},
  BRONZE: {min: 1001, max: 2000},
  PRATA: {min: 2001, max: 5000},
  OURO: {min: 5001, max: 6000},
  PLATINA: {min: 6001, max: 7000},
  ASCENDENTE: {min: 7001, max: 8000},
  IMORTAL: {min: 8001, max: 10000},
  RADIANTE: {min: 10001, max: Infinity},
}

const getRank = (xp) => {
  if (xp < 0) return '(Erro: XP não pode ser negativo)'

  for (const key in rank) {
    if (xp >= rank[key].min && xp <= rank[key].max) {
      return key
    }
  }
}

console.log(`O herói de nome ${heroi.name} está no nível de ${getRank(heroi.xp)}`)