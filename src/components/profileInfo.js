import { useSelector } from 'react-redux';
import user_info from '../data/users_data/users';

export default function ProfileInfo(props) {
    const userID = useSelector(state => state.session.userID)
    console.log(userID)
    return (
        <div className="profile__info">
            <div className="profile__info-avatar">
                <img src={user_info.user.main[userID].image} alt="avatar"/>
            </div>
            <div className="profile__info-desc">
                <div className="profile__info-name">
                    <h1>{user_info.user.main[userID].login}</h1>
                </div>
                <div className="profile__info-status">
                    <p>{user_info.user.main[userID].desc}</p>
                </div>
                <div className="profile__info-about">
                    <button>Log Out</button>
                </div>
            </div>
        </div>
    )
}
