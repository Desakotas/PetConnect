import Button from './Button';
import { useState } from 'react';
import './Register.css';
import { useId } from 'react';

function Register() {
    const id = useId();
    const [source, setSource] = useState('');
    const [username, setUsername] = useState('');
    const [usernameIsMissing, setUsernameIsMissing] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmEmailIsMissing, setConfirmEmailIsMissing] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    
    function usernameIsValid(name) {
        return !!name;
    }

    function emailIsValid(email) {
        return !!email;
    }

    function confirmEmailIsValid(confirmEmail) {
        return email === confirmEmail;
    }

    const handleSourceChange = (event) => {
        setSource(event.target.value); 
    };

    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
        if (event.target.checked) {
            setConfirmEmail(email);
        }
    };

    return (
        <main className="main main-register" id="main">
            <form 
                className="main__form" 
                onSubmit={ (e) => {
                    e.preventDefault();
                    
                    setUsernameIsMissing(!usernameIsValid(username));
                    setEmailIsMissing(!emailIsValid(email));
                    setConfirmEmailIsMissing(!confirmEmailIsValid(confirmEmail));

                    if(usernameIsValid(username) && emailIsValid(email) && confirmEmailIsValid(confirmEmail)){
                        setUsername('');
                        setEmail('');
                        setConfirmEmail('');
                        setSubmitted(true);
                    }
                    
                }}
            >
                <h2 className="form__title">Register form</h2>
                <label htmlFor={`${id}-username`} className="form__label form__label--username">Username:</label>
                <span className="form__required">* required</span>
                <input id={`${id}-username`} className="form__input form__input--username" name="username" aria-label="Username" value={username}
                    onInput={ (e) => {
                        setUsername(e.target.value);
                        setUsernameIsMissing(!usernameIsValid(e.target.value));
                    }}
                />
                {usernameIsMissing && <span className="form__error form__error--username">Username is required</span>}

                <label htmlFor={`${id}-email`} className="form__label form__label--email">Email:</label>
                <span className="form__required">* required</span>
                <input id={`${id}-email`} className="form__input form__input--email" name="email" aria-label="Email address" value={email}
                    onInput={ (e) => {
                        setEmail(e.target.value);
                        setEmailIsMissing(!emailIsValid(e.target.value));
                    }}
                />
                {emailIsMissing && <span className="form__error form__error--email">Email is required</span>}
 
                <label htmlFor={`${id}-confirm-email`} className="form__label form__label--confirm-email">Confirm Email:</label>
                <span className="form__required">* required</span>
                <input id={`${id}-confirm-email`} className="form__input form__input--confirm-email" name="confirmEmail" aria-label="Confirm email address" value={confirmEmail}
                    onInput={ (e) => {
                        setConfirmEmail(e.target.value);
                        setConfirmEmailIsMissing(!confirmEmailIsValid(e.target.value));
                    }}
                    onChange={(e) => setConfirmEmail(e.target.value)} readOnly={isCheckboxChecked}
                /> 
                {confirmEmailIsMissing && <span className="form__error form__error--confirm-email">Confirm email does not match</span>}
                
                <label htmlFor={`${id}-checkbox-email`} className="form__label form__label--checkbox">The same as email address</label>
                <input id={`${id}-checkbox-email`} className="form__checkbox" name="sameAddress" type="checkbox" aria-label="get confirm email from email"  onChange={handleCheckboxChange}/>

                <label htmlFor={`${id}-source`} className="form__label">How do you know us?</label>
                <select id={`${id}-source`} className="form__select" name="source" onChange={handleSourceChange}>
                    <option value="">Please select</option>
                    <option value="1">Friends</option>
                    <option value="2">Social media</option>
                    <option value="3">Other</option>
                </select>
                {source === "3" && (
                    <>
                        <label htmlFor={`${id}-otherSource`} className="form__label form__label--source">Please specify:</label>
                        <input id={`${id}-otherSource`} className="form__input" aria-label="Specify other source" name="otherSource" type="text" />
                    </>
                )}
                {submitted && <p className="form-response-message">Form submitted!</p>}
                <Button className="register" type="submit" visual="button" ariaLabel="register button">Register</Button>
            </form>
        </main>
    );
}

export default Register;