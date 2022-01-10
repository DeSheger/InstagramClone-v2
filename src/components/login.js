import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authorizationLoginHandler, authorizationPasswordHandler } from "../features/authorization/authorizationSlice";

export default function Login(props) {
    const authorization = useSelector(state => state.authorization)
    const dispatch = useDispatch();

    return (
        <div className="login">
            <div className="login__banner">
                <div className="login__bannerIMG"></div>
            </div>
            <form action="http://localhost:6000/userInfo" className="login__form">
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

                <input type="submit" className="login__submit" value="Log In"></input>
            </form>
        </div>
    );
}