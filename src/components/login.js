import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authorizationLoginHandler, authorizationPasswordHandler } from "../features/authorization/authorizationSlice";
import { createSession } from "../features/session/sessionSlice";
import { containerHandler } from "../features/container/containerSlice";
import authorizationHandler from "./authorization";

export default function Login(props) {
    const authorization = useSelector(state => state.authorization)
    const dispatch = useDispatch();
    return (
        <div className="login">
            <div className="login__banner">
                <div className="login__bannerIMG"></div>
            </div>
            <form className="login__form">
                <h2 className="login__logo">Instagram</h2>

                <label for="loginID" className="login__name">
                    <span>Type nickname ...</span>
                    <input id="loginID" type="text" onChange={(e) => dispatch(authorizationLoginHandler({ login: e.target.value }))}
                        value={authorization.login}></input>
                </label>

                <label for="passwordID" className="login__name">
                    <span>Type password ...</span>
                    <input id="passwordID" type="password" onChange={(e) => dispatch(authorizationPasswordHandler({ password: e.target.value }))}
                        value={authorization.password}></input>
                </label>

                <input type="button" className="login__submit" value="Log In"
                    onClick={() => {
                        
                        let info = authorizationHandler(authorization.login, authorization.password) 
                        if(info) {
                            dispatch(containerHandler({ name: "Home" }))
                            dispatch(createSession({ isLogged: info.userLogged, username: info.username, userID: info.userID }))
                        } else {
                            alert("login or password are incorrect")
                        }

                        //
                    }}></input>
            </form>
        </div>
    );
}