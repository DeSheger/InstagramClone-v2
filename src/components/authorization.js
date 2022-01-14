import user_info from '../data/users_data/users'

export default function authorizationHandler(username, password) {
    console.log(username, password)    
    const userSession = {userLogged: false,username: null, userID: null};
    user_info.user.main.map(user => {
        if(user.login === username) {
            if(user.password === password) {
                userSession = {userLogged: true,username: user.login, userID: user.id};
            } else {
                return false
            }
        } else {
            return false
        }
    })

    if(userSession.userLogged) {
        return userSession;
    } else {
        return false;
    }
    
}