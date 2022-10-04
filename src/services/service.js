

const getRandomInt = (percent) => {
  return Math.floor(Math.random() * 100) < percent ? 1 : 0;
};

export { getRandomInt };