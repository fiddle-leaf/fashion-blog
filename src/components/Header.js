import Navigation from "./Navigation";

export default function Header () {
    const titles = {
        mainHeading: "Selunaar's List",
        subheading: "Fashion Show Edition"
    }
    return (
        <header>
        <h1>{titles.mainHeading}</h1>
        <h2>{titles.subheading}</h2>
        <Navigation links="nav-links"/>
        </header>
    )
}