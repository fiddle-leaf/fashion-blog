import Links from "./Links";

export default function Navigation (props) {
    let currentLinks;

    let linkLocal = '/';

    const navLinks = [
        {name: "Women", href: linkLocal, key: 1},
        {name: "Men", href: linkLocal, key: 2},
        {name: "New York City", href: linkLocal, key: 3},
        {name: "Barcelona", href: linkLocal, key: 4},
        {name: "Mexico City", href: linkLocal, key: 5}
    ]

    const pageLinks = [
        {name: "Home", href: "#", key: 6},
        {name: "About", href:"/about", key: 7},
        {name: "Tips", href:"/tips", key: 8}
    ]

    if (props.links === "nav-links"){
        currentLinks = navLinks;
    } else if (props.links === "foo-links") {
        currentLinks = [
            ...[pageLinks[0]], ...navLinks, ...[pageLinks[1], pageLinks[2]]]
    } else {
        return false;
    }

    return (
        <nav aria-label="Main Navigation" role="navigation">
            <ul>
            {
                currentLinks.map(link => {
                    return <Links link={link} key={link.key}/>
                })
            }
        </ul>
        </nav>
    )
}