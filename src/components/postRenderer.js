import Post from "./post";
import post_info from "../data/post_data/post";
import user_info from "../data/users_data/users";
import { useSelector } from "react-redux";

function PostsCounter(props) {
    const userID = useSelector(state => state.session.userID)

    let posts = [];
    
    posts = post_info.post.main.map(item => <Post key={item.id} id={item.id}
        descActive={props.descActive} src={item.picture} desc={item.desc} date={item.date}/>)
    if(props.userFavourite) {
        posts = user_info.user.main[userID].favourite.map(item => <Post key={item} id={item}
            descActive={props.descActive} src={post_info.post.main[item].picture} 
            desc={post_info.post.main[item].desc} date={post_info.post.main[item].date}/>)
    } else if (props.userPosts) {
        posts = user_info.user.main[userID].posts.map(item => <Post key={item} id={item}
            descActive={props.descActive} src={post_info.post.main[item].picture} 
            desc={post_info.post.main[item].desc} date={post_info.post.main[item].date}/>)
    }
    
    return [...posts];
}

export default function PostRenderer(props) {

    let post__container = 'post__containerColumn';
    if(props.row === true) {
        post__container = 'post__containerRow'
    }
    return (
        <div className={post__container}>
            <PostsCounter descActive={props.descActive} userFavourite={props.userFavourite} userPosts={props.userPosts}/>
        </div>
    )
}