import Link from "next/link";
import style from "./post.module.css"
export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data
}

export default async function Posts() {
    const posts = await getPosts()
    return (
        <div className="gap-8 grid grid-cols-4">
            {posts.map((singlePost) => {
                return (
                    <div key={singlePost.id}>
                        <p className={`text-4xl text-yellow-400 ${style["post-title"]}`}>{singlePost.title}</p>
                        <p className="font-semibold testing-purpose-css-class ">{singlePost.body}</p>
                        <Link href={`/posts/${singlePost.id}`}><button className="   bg-yellow-100 text-black">Details</button></Link>
                    </div>

                )
            })}
        </div>
    );
}