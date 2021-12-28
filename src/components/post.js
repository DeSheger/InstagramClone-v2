function Image(props) {

    return (
        <div className="post__image">
            <img src={props.src}></img>
        </div>
    )
}

function Description(props) {

    return (
        <div className="post__description">
            <h5>{props.date}</h5>
            <p>{props.desc}</p>
        </div>
    )
}

function Comment(props) {

    return (
        <form className="post__comment">
            <input type="text" placeholder="Add comment..."></input>
            <button>Public</button>
        </form>
    )
}

export default function Post(props) {
    
    return (
        <div className="post">
            <Image src={props.src}/>
            <Description desc={props.desc} date={props.date}/>
            <Comment />
        </div>
    );
}