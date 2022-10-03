import { FaGoogle } from 'react-icons/fa';
export default function Signup() {
    return (
        <div className="signup-home">
            <div className="signup-content-cards">
                <div className="signup-content-title">
                    <span>
                        Sign up
                    </span>
                </div>
                <div className='inputs'>
                    <div>
                        <input placeholder="Username" type="text" />
                    </div>
                    <div>
                        <input placeholder="YourProfile.page/username" type="text" />
                    </div>
                    <div>
                        <input placeholder="Passworld" type="password" />
                    </div>
                </div>
                <div className='buttons'>
                    <button>sign up with email</button>
                </div>
                <div className='content-or'>
                    <div style={{ borderTop: "solid white", width: "90px" }} ></div>
                    <div style={{ marginTop: "-2rem" }} >Or</div>
                    <div style={{ borderTop: "solid white", width: "90px" }} ></div>
                </div>
                <div className='google-login'>
                    <div><FaGoogle  /></div>
                    <div>Continue with Google</div>
                </div>
            </div>
        </div>
    )
}