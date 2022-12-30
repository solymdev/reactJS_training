export const getLocalStorage = () =>
  localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
