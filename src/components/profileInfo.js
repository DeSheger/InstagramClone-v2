

export default function ProfileInfo(props) {
    return (
        <div className="profile__info">
            <div className="profile__info-avatar">
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className="profile__info-name">
                <h1>{props.name}</h1>
            </div>
            <div className="profile__info-status">
                <h2>{props.status}</h2>
            </div>
            <div className="profile__info-about">
                <p>{props.about}</p>
            </div>
        </div>
    )
}
