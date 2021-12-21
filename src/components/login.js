export default function Login(props) {

    return (
    <form className="login">
        <h2 className="login__logo">INSTAGRAM</h2>

        <label for="loginID" className="login__name">
            <span>Type nickname ...</span>
            <input id="loginID" type="text" aria-label="Type nickname ..." aria-required="true"></input>
        </label>
            
        <label for="passwordID" className="login__name">
            <span>Type password ...</span>
            <input id="passwordID" type="password"></input>
        </label>

        <input type="submit" className="login__submit" value="Log In"></input>
    </form>
    );
    
}