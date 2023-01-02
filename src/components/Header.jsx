
export default function Header(props) {
    return (
        <div className="header">
            <p className="brand">{props.brand}</p>
            <h1>{props.title}</h1>
        </div>
    )
};
