import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setРassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Emter your username..." onChange={e => setUsername(e.target.value)}  />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Emter your email..." onChange={e => setEmail(e.target.value)}  />
                <label>Рassword</label>
                <input type="password" className="registerInput" placeholder="Enter your password..." onChange={e => setРassword(e.target.value)} />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
            {error && <span style={{color: "red", marginTop: "10px"}}>Something Went Wrong!</span>}
        </div>
    )
}

export default Register;
