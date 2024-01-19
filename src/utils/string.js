const getID = (char) => {
  return char.slice(char.lastIndexOf("-") + 1);
};

const getPrefix = (char) => {
  const lastHyphenIndex = char.lastIndexOf("-");
  if (lastHyphenIndex !== -1) {
    return char.slice(0, lastHyphenIndex);
  } else {
    // Nếu không có dấu gạch ngang, trả về toàn bộ chuỗi
    return char;
  }
};

export { getID, getPrefix };
