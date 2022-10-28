// Siempre un componente inica con una funcion
import hotel from "../assets/icons/hotel.png";
import link from "../assets/icons/link.png";
import pin from "../assets/icons/pin.png";
import twitter from "../assets/icons/twitter.png";

function UserInformation(props) {
  const { user } = props;

  return (
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
              <img width="15" src={pin} alt="" />
              &nbsp;{user?.location}
            </p>
            <p>
              <img width="15" src={link} alt="" />
              &nbsp;https://github.blog
            </p>
          </div>
          <div>
            <p>
              <img width="15" src={twitter} alt="" />
              &nbsp;{user?.twitter_username}
            </p>

            <p>
              <img width="15" src={hotel} alt="" />
              &nbsp;{user?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
