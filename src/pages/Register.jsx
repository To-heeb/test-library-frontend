import { Link } from "react-router-dom"

const onSubmit = () => {

}
function Register() {
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Signup for Free</h1>

                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confrim Password" />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
