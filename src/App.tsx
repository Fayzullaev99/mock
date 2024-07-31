import Profile from "./pages/Profile.js"
import Register from "./pages/Register.js"
import { getUserDataFromLocalStorage } from "./services/storage.js";


function App() {
  const userData = getUserDataFromLocalStorage();
  if (userData) {
    return <Profile />
  } else {
    return <Register />
  }
}

export default App
