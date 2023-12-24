import Post from "../../../components/post";
import { posts } from "../../../mock/posts";

export default function ForYou(){
   return(
    <div>
        {
            posts.map(post=><Post post={post} id={post.id}/>)
        }
    </div>
   )
}