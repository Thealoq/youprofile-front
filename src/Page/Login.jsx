import { FaGoogle } from 'react-icons/fa';
export default function Login() {
    return (
        <div className="signup-home">
            <div className="signup-content-cards">
                <div className="signup-content-title">
                    <span>
                        Login
                    </span>
                </div>
                <div className='inputs'>
                    <div>
                        <input placeholder="Username" type="text" />
                    </div>
                    <div>
                        <input placeholder="Passworld" type="text" />
                    </div>
                </div>
                <div className='buttons'>
                    <button>Login</button>
                </div>
                <div className='passworld'><a href="/forgot">Forgot password?</a></div>
                <div className='content-or'>
                    <div style={{ borderTop: "solid white", width: "90px" }} ></div>
                    <div style={{ marginTop: "-2rem" }} >Or</div>
                    <div style={{ borderTop: "solid white", width: "90px" }} ></div>
                </div>
                <div className='google-login'>
                    <div><FaGoogle /></div>
                    <div>Continue with Google</div>
                </div>
            </div>
        </div>
    )
}