import { useContact } from "../context/ContactContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContact();

  return (
    <div className="input-group w-50">
      <input
        type="text"
        className="form-control"
        placeholder="search contact"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-success" type="button">
        Search
      </button>
    </div>
  );
}

export default SearchBar;