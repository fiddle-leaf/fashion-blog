export default function Post (props) {
    return (
        <article>
            <h4>
                <time 
                dateTime={props.article.dateTime}>
                    {props.article.date}
                </time>
            </h4>
            <h3>
                {props.article.title}
            </h3>
            {
                props.article.links ?
                <a href={props.article.links.href}>
                    {props.article.links.name}
                </a>: false
            }
            <figure>
                <img 
                src={props.article.image.src}
                alt="by Kevin Laminto"></img>
                <figcaption>
                    Photo by <a href={props.article.image.artist}>Kevin Laminto</a> on Unsplash.
                </figcaption>
            </figure>
            <p>
                {props.article.body}
            </p>
            <span className="continue">
                <a href="/" alt="Continue">
                    Continue...
                </a>
            </span>
        </article>
    );
}
