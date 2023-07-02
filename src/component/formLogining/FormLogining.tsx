import React, {FC, useEffect, useState} from 'react';
import {login, registration} from "../../services/API";
import './FormLogining.css';
import {useNavigate} from "react-router-dom";

interface FormLoginingProps {
    isLogin: boolean;
}

const FormLogining: FC<FormLoginingProps> = ({isLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('The email cannot be empty');
    const [passwordError, setPasswordError] = useState('The password cannot be empty');
    const [formValid, setFormValid] = useState(true);

    useEffect(() => {
            if (emailError !== '' || passwordError !== '') {
                setFormValid(true);
            } else {
                setFormValid(false);
            }
    }, [emailError, passwordError, formValid]);

    const navigate = useNavigate();

    return (
        <div className={'form-center'}>
            <div className={'circle'}/>
            <div className={'register-form-container'}>
                {
                    isLogin ? <h2 className={'form-title'}>LOGIN</h2> : <h2 className={'form-title'}>SIGNUP</h2>
                }
                <div className={'form-fields'}>
                    <div className={'form-field'}>
                        <input value={email} onChange={(e) => {
                            setEmail(e.target.value);
                            const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7})*$/;
                            if (!e.target.value) {
                                setEmailError('The email cannot be empty');
                            }
                            if (!emailRegex.test(String(e.target.value).toLowerCase())) {
                                setEmailError('Invalid email. Example-example@site.com');
                            } else {
                                setEmailError('');
                            }
                        }} className={'input-logining'} placeholder={'Email'} type={'email'}
                               onBlur={() => setEmailDirty(true)}/>
                        {(emailDirty && emailError) && <div className={'error-input'}>{emailError}</div>}
                    </div>
                    <div className={'form-field'}>
                        <input value={password} onChange={(e) => {
                            setPassword(e.target.value);
                            if ((e.target.value.length < 4)) {
                                setPasswordError('The password must be 4 or more characters');
                            } else {
                                setPasswordError('');
                            }
                            if (!e.target.value) {
                                setPasswordError('The password cannot be empty');
                            }
                        }} className={'input-logining'} placeholder={'Password'} type={'password'}
                               onBlur={() => setPasswordDirty(true)}
                        />
                        {(passwordDirty && passwordError) && <div className={'error-input'}>{passwordError}</div>}
                    </div>
                </div>
                <div className={'form-button'}>
                    <button disabled={formValid} className={'button-login'} onClick={() => {
                        isLogin ? login(email, password).then(() => {
                            if(localStorage.getItem('token')) {
                                navigate('/categories');
                            }
                            }) : registration(email, password, 'user')
                        }}>{isLogin ? 'Login' : 'Signup'}</button>
                </div>
            </div>
        </div>
    );
};

export default FormLogining;
