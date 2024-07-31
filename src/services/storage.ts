export const getUserDataFromLocalStorage = () => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};
export const clearData = ()=> {
  localStorage.removeItem('userData');
  window.location.reload()
}