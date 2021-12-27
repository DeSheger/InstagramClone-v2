function loginHandler(e) {
    e.preventDefault();

}

export default function Login(props) {

    return (
    <div className="login">
    <div className="login__banner">
        <div className="login__bannerIMG"></div>
    </div>
    <form action="http://localhost:6000/userInfo" className="login__form">
        <h2 className="login__logo">Instagram</h2>

        <label for="loginID" className="login__name">
            <span>Type nickname ...</span>
            <input id="loginID" type="text"></input>
        </label>
            
        <label for="passwordID" className="login__name">
            <span>Type password ...</span>
            <input id="passwordID" type="password"></input>
        </label>

        <input type="submit" className="login__submit" value="Log In"></input>
    </form>
    </div>
    );
}