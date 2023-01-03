
export default function SearchInput(props) {
    return (
        <input
          value={props.searchTerm}
          onChange={props.handleChange}
          placeholder="Search for Movies and Tv Series"
        />
    )
};
