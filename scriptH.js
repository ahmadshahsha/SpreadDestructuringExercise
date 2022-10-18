//  Spread Destructuring Exercise

//  1a
const mcuShows = [
    'Loki',
    'Moon Knight'
]
// or
// const mcushowe = ['Loki', 'monn Knith']

// 1b
const starWarShows = [
    'The Mandolorian',
    'The Book of Boba Fett'

]

// 1c
const disneyPlusShows = [
    ... mcuShows,
    ... starWarShows,
    'The Beatles: Get Back'
]
//  1 d
console.log(disneyPlusShows);

// 21
const netflixMovies = {
    action: 'Extraction',
    crime: 'The Irishman'
};
// 2b
const amazonPrimeMovies = {
    action: 'The Tomorrow War',
    drama: 'One Night in Miami'
}
// 2c
const stremingMovies = {
    ... amazonPrimeMovies,
    ...netflixMovies,
    musical:'Mamilton'
};
// 2d

console.log(stremingMovies);

// 3a
const disneyJunior = [
    'Mickey mouse Clubhouse',
    'Spidey adn his Amazing Friends'
]

// 3b
const [mickey, spidey] = disneyJunior;

// 3c
console.log(disneyJunior);
console.log(mickey, spidey);

// 4a
const avengers = {
    warMashine : 'James Rhodes',
    theHulk: 'Bruce Banner'
}
// 4b
const {warMashine, theHulk} = avengers;
// 4c
console.log(warMashine, theHulk);
// 4c
const moreAvengers = {
    blackWidow: 'Natasha Romanoff',
    hawkeys: 'Cline barton',
    ironMan: 'Tony stark'
}
// 4d
const {blackWidow:nat, ...others} = moreAvengers;
// 4f
console.log(nat, others);

// Bonus
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

//   5a
const all = {
    ... bonus.first,
    ... bonus.second,
    ... bonus.third
};
console.log(all);

//  5b
const [ont, two, three, four, five, six, seven, eight, nine] = all;
console.log(ont, two, three, four, five, six, seven, eight);