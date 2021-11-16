import "../App.css";

const Search = (props) => {
  return (
    <div className="search">
      <input
        className="input"
        onChange={(e) => props.onChangeInput(e.target.value)}
        placeholder="Search books"
        type="text"
      />
    </div>
  );
};

export default Search;
