import { useState } from "react";
import './App.css';
import hotel from "./assets/icons/hotel.png"
import link from "./assets/icons/link.png"
import pin from "./assets/icons/pin.png"
import search from "./assets/icons/search_1.png"
import sun from "./assets/icons/sun.png"
import twitter from "./assets/icons/twitter.png"
import profile from "./assets/icons/github_image.jpg"

// Componente: Es un bloque de vista el cual combina HTML y JS
function App() {

  const [inputText, setInputText] = useState("");
  const [user, setUser] = useState(null);
  
  function handleInputChange(event){
    setInputText(event.target.value);
  }

  async function searchUser(){
    const response = await fetch(`https://api.github.com/users/${inputText}`)
    const data = await response.json();
    setUser(data);
  }

  return (
    <div className="container">

      <div className="section-1">
        <h4 className="title">devfinder</h4>
        <button className="btn-mode">
          LIGHT <img width="20" src={sun} alt="" />
        </button>
      </div>

      <div className="search-container">
        <div className="input-container">
          <img width="15" src={search} alt="" />
          <input
            value={inputText}
            className="input-search"
            onChange={handleInputChange}
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button className="btn-search" onClick={searchUser}>Search</button>
        </div>
      </div>

      <div className="information-container">

        <div className="image-container">
          <img width="100" src={user?.avatar_url} alt="" />
        </div>

        <div className="description-container">

          <div className="user-date-container">
            <h2>{user?.name}</h2>
            <p>{user?.created_at}</p>
          </div>

          <div className="user-bio-container">
            <p>{user?.login}</p>
            <p>{user?.bio}</p>
          </div>

          <div className="card-information">
            <div>
              <h5>Repos</h5>
              <h2>{user?.public_repos}</h2>
            </div>
            <div>
              <h5>Followers</h5>
              <h2>{user?.followers}</h2>
            </div>
            <div>
              <h5>Following</h5>
              <h2>{user?.following}</h2>
            </div>
          </div>

          <div className="info-container">
            <div>
              <p>
                <img width="15" src={pin} alt="" />&nbsp;{user?.location}
              </p>
              <p>
                <img
                  width="15"
                  src={link}
                  alt=""
                />&nbsp;https://github.blog
              </p>
            </div>
            <div>
              <p>
                <img width="15" src={twitter} alt="" />&nbsp;{user?.twitter_username}
              </p>

              <p>
                <img
                  width="15"
                  src={hotel}
                  alt=""
                />&nbsp;{user?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
