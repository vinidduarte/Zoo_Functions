const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const counts = { child: 0, adult: 0, senior: 0 };

  for (const entrant of entrants) {
    if (entrant.age < 18) {
      counts.child += 1;
    } else if (entrant.age < 50) {
      counts.adult += 1;
    } else {
      counts.senior += 1;
    }
  }

  return counts;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const ageCounts = countEntrants(entrants);
  const { prices } = data;

  const total = Object.keys(ageCounts).reduce((acc, ageGroup) =>
    acc + ageCounts[ageGroup] * prices[ageGroup], 0);

  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
