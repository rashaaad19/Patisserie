export const generateUniqueID = (name) => {
  const firstWord = name.toLowerCase().split(" ")[0];
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${firstWord}-${randomNumber}`;
};
