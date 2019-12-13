const results = document.querySelectorAll("div.g");
let current = -1;

const setActive = (results) => (index, direction) => {
  const prev = results[index];
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex > results.length - 1) {
    return index;
  }
  if (prev) {
    prev.style.cssText = "";
  }
  const currentElement = results[nextIndex];
  if (currentElement) {
    currentElement.querySelector("a").focus();
    currentElement.style.backgroundColor = "#ebf5fd";
    currentElement.style.borderRight = "4px solid rgb(47, 163, 255)";
  } 
  return nextIndex;
}

const setActiveForResults = setActive(results);
window.addEventListener("keydown", event => {
  if (document.activeElement.tagName === "INPUT") return;
  switch (event.code) {
    case "Tab":
    case "KeyJ":
    case "ArrowDown":
      event.preventDefault();
      current = setActiveForResults(current, 1);
      break;
    case "KeyK":
    case "ArrowUp":
      event.preventDefault();
      current = setActiveForResults(current, -1);
      break;
    case "KeyH":
      event.preventDefault();
      document.querySelector("input[name=q]").focus();
    case "KeyL":
      event.preventDefault();
      document.activeElement.click();
      break;
    default:
      break;
  }
});
