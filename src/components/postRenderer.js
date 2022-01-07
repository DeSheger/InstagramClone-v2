import Post from "./post";
import post_info from "../data/post_data/post"

function PostsCounter(props) {
    let posts = [];
    posts = post_info.post.main.map(item => <Post key={item.id} descActive={props.descActive} src={item.picture} desc={item.desc} date={item.date}/>)

    return [...posts];
}

export default function PostRenderer(props) {

    let post__container = 'post__containerColumn';
    if(props.row === true) {
        post__container = 'post__containerRow'
    }

    return (
        <div className={post__container}>
            <PostsCounter descActive={props.descActive}/>
        </div>
    )
}