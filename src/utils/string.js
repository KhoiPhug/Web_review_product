const getID = (char) => {
  return char.slice(char.lastIndexOf("-") + 1);
};

export { getID };
