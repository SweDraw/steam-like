const GenreList: string[]= [
  'Platformer',
  'Shooter',
  'Fighting',
  'Beat-em up',
  'Stealth',
  'Survival',
  'Rhythm',
  'Survival horror',
  'Metroidvania',
  'Text adventures',
  'Graphic adventures',
  'Visual novels',
  'Interactive movie',
  'Real-time 3D',
  'Action RPG',
  'MMORPG',
  'Rouguelikes',
  'Tactical RPG',
  'Sandbox RPG',
  'First-person RPG',
  'Simulation',
  'Life simulation',
  'Vehicle simulation',
  '4X',
  'Artillery',
  'RTS',
  'RTT',
  'MOBA',
  'Tower defense',
  'TBS',
  'Turn-based tactics',
  'Wargame',
  'Grand strategy wargame',
  'Racing',
  'Team sports',
  'Competitive',
  'Logic game',
  'Trivia game',
  'Casual',
  'Party',
  'Programming game',
  'Board game',
  'MMO',
  'Advergame',
  'Educational game'
];

export const getRandomGenre = (numberOfGenre: number) => {
  let genreList: string[] = [];
  for (let i = 0; i < numberOfGenre; i++) {
    genreList[i] = GenreList[Math.floor(Math.random() * GenreList.length)];
  }
  console.log(genreList);
  return genreList;
};

export default GenreList;