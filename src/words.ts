export const adjectives = [
  "aggressive",
  "agreeable",
  "ambitious",
  "brave",
  "calm",
  "delightful",
  "eager",
  "faithful",
  "gentle",
  "happy",
  "jolly",
  "kind",
  "lively",
  "nice",
  "obedient",
  "polite",
  "proud",
  "silly",
  "thankful",
  "victorious",
  "witty",
  "wonderful",
  "zealous",
  "better",
  "careful",
  "clever",
  "dead",
  "easy",
  "famous",
  "gifted",
  "hallowed",
  "helpful",
  "important",
  "inexpensive",
  "mealy",
  "mushy",
  "odd",
  "poor",
  "powerful",
  "rich",
  "shy",
  "tender",
  "unimportant",
  "uninterested",
  "vast",
]

export const hillWords = [
  "ascent",
  "ben",
  "berg",
  "bluff",
  "butte",
  "cliff",
  "downs",
  "dune",
  "fell",
  "foothills",
  "highlands",
  "hill",
  "hillock",
  "knoll",
  "kop",
  "koppie",
  "massif",
  "mesa",
  "moor",
  "lowlands",
  "moorland",
  "mound",
  "mount",
  "range",
  "palisades",
  "peak",
  "precipice",
  "rise",
  "scar",
  "tor",
  "uplands",
  "wolds"
]

export const generateRandom = (listA: string[], listB: string[]): string => {
  const randomA = listA[Math.floor(Math.random()*listA.length)];
  const randomB = listB[Math.floor(Math.random()*listB.length)];
  return randomA + " " + randomB
}