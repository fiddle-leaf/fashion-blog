import Navigation from "./Navigation";

export default function Footer (props) {
    return (
        <footer>
            <Navigation links="foo-links"/>
            <p id="copyright">
            <a href="http://github.com/fiddle-leaf">fiddle-leaf</a> &copy; 2023.
            </p>
        </footer>
    );
}