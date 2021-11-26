import "../App.css";

const Search = (props) => {
  const { onChange } = props;
  return (
    <div className="search">
      <input
        className="input"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search book..."
        type="text"
      />
    </div>
  );
};

export default Search;
