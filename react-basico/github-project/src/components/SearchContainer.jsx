import search from "../assets/icons/search_1.png"

function SearchContainer (props){
    
    const {inputText, handleInputChange, searchUser} = props
    
    return (
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
          <button className="btn-search" onClick={searchUser}>
            Search
          </button>
        </div>
      </div>
    )
}

export default SearchContainer