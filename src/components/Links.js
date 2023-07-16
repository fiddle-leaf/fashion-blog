const Links = (props) => {

    return (
        <li id={props.link.key}>
            <a href={props.link.href}
            alt={props.link.name}>{props.link.name}</a>    
        </li>

    )
}

export default Links;