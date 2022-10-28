import { useState } from "react";
import UserInformation from "./components/UserInformation";
import SearchContainer from "./components/SearchContainer";
import HeaderSection from "./components/HeaderSection";
import Swal from "sweetalert2";
import "./App.css";
import search from "./assets/icons/search_1.png";

// Componente: Es un bloque de vista el cual combina HTML y JS
const App = () => {
  const [inputText, setInputText] = useState("");
  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        Swal.fire("Error", "El usuario buscado no existe 🤔", "error");
        return;
      }

      setUser(data);
      setInputText("");
    } catch (error) {
      console.log("eror", error);
    }
  }

  return (
    <div className="container">
      <HeaderSection />

      <SearchContainer
        inputText={inputText}
        handleInputChange={handleInputChange}
        searchUser={searchUser}
      />

      {user && <UserInformation user={user} />}
    </div>
  );
};

export default App;
