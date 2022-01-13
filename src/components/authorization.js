import user_info from '../data/users_data/users'

export default function authorizationHandler(username, password) {
    console.log(username, password)    
    let userLogged = false;
    user_info.user.main.map(user => {
        if(user.login === username) {
            if(user.password === password) {
                userLogged = true;
            } else {
                return false
            }
        } else {
            return false
        }
    })

    return userLogged;
}