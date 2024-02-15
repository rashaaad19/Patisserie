export const generateUniqueID = (name) => {
  const firstWord = name.toLowerCase().split(" ")[0];
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${firstWord}-${randomNumber}`;
};

export function htmlToPlainText(htmlData) {
  var element = document.createElement("div");
  element.innerHTML = htmlData;
  return element.textContent || element.innerText || "";
}
