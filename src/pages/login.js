import React, { useState } from 'react';
import './styles.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className="login">
            <img src={`${process.env.PUBLIC_URL}/images/login-bg.png`} alt="login" className="login__img" />
            <form onSubmit={handleSubmit} className="login__form">
                <h1 className="login__title">Login</h1>
                <div className="login__content">
                    <div className="login__box">
                        <i className="ri-user-3-line login__icon"></i>
                        <div className="login__box-input">
                            <input
                                type="email"
                                required
                                className="login__input"
                                id="login-email"
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="login-email" className="login__label">Email</label>
                        </div>
                    </div>
                    <div className="login__box">
                        <i className="ri-lock-2-line login__icon"></i>
                        <div className="login__box-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className="login__input"
                                id="login-pass"
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="login-pass" className="login__label">Password</label>
                            <i
                                className={`ri-eye${showPassword ? '' : '-off'}-line login__eye`}
                                id="login-eye"
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="login__check">
                    <div className="login__check-group">
                        <input
                            type="checkbox"
                            className="login__check-input"
                            id="login-check"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="login-check" className="login__check-label">Remember me</label>
                    </div>
                    <a href="#" className="login__forgot">Forgot Password?</a>
                </div>
                <button type="submit" className="login__button">Login</button>
                <p className="login__register">
                    Don't have an account? <a href="#">Register</a>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;