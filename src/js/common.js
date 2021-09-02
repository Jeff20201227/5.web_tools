export function formatError(text) {
  return `<span style="color:red"> ${text} </span>`;
}

export function toggleRoutes(elemToHide, elemToVisible) {
  elemToHide.classList.add("visibility");
  elemToVisible.classList.remove("visibility");
}
