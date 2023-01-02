
export default function SearchButton(props) {
    return (
        <img
          src={props.SearchIcon}
          alt="search"
          onClick={props.handleSearch}
        />
    )
};
