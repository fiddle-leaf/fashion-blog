import Post from './Post'

export default function Articles () {
    const articles = [
        {   key: 1,
            title: "Mindfulness on the Runway",
            date: "July 15, 2023",
            datetime: "2023-07-15",
            image: {
                src: "https://images.unsplash.com/photo-1559127452-cb4ef7888fa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
                artist: "https://unsplash.com/@kxvn_lx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            },
            links: {
                name: "Morning Pages",
                href: 'https://juliacameronlive.com/basic-tools/morning-pages/' ,
            },
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quis velit ducimus tenetur, corrupti vero autem magnam perferendis excepturi? Id accusantium unde adipisci quos reprehenderit voluptates? Perspiciatis libero recusandae earum? Ratione consequatur veritatis perspiciatis voluptatum alias sint delectus labore, doloribus veniam maxime ducimus saepe voluptatem facere assumenda soluta rem? Explicabo, modi fugiat? Nisi consequuntur facilis aliquid quae eveniet? Totam, placeat eaque laborum, nobis amet libero possimus expedita nemo facilis ea repellat nulla adipisci inventore."
        },
        {
            key: 2,
            title: "Beauty through the Centuries",
            date: "July 11, 2023",
            datetime: "2023-07-11",
            image: {
                src: "https://images.unsplash.com/photo-1572251328767-e59f06f13ba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
                artist: "https://unsplash.com/@kxvn_lx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            },
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, ad? Suscipit, voluptatem odio sequi voluptate laboriosam inventore fugiat consectetur voluptatibus aliquid debitis blanditiis vitae nobis est alias. Vel, explicabo distinctio! Autem quibusdam dolore accusamus, dolorem, doloribus cumque sunt itaque praesentium fugit recusandae culpa deleniti. Possimus temporibus cumque blanditiis magni laboriosam delectus, atque voluptatum neque, deleniti enim iure molestiae repellat consequuntur distinctio est quas a ducimus quaerat?"
        }   
    ]
    return (
        <section className="posts">
            {
                articles.map((article => {
                    return <Post article={article} key={article.key}/>
                }))
            }
        </section>
    );
}
