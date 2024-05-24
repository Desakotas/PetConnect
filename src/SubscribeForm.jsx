import React, { useState } from 'react';
import Button from './Button';
import './SubscribeForm.css';

function SubscribeForm({ dialogRef, setName }) {

    const [localName, setLocalName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(localName);
        dialogRef.current.close();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="form__input--name" className="form__label--name">Name</label>
            <input 
                id="form__input--name" 
                className="form__input form__input--name" 
                name="name" type="text" 
                aria-label="Enter your name" 
                onChange={(e) => setLocalName(e.target.value)}
            />
            <Button 
                className="subscribe" 
                type="submit" 
                visual="button" 
                ariaLabel="Submit subscription form"
            >
                Submit
            </Button>
            
            <Button 
                className="close" 
                type="button"
                 visual="button" 
                 ariaLabel="Close subscription form" 
                 onClick={() => dialogRef.current.close()}
            >
                Close
            </Button>
        </form>
    );
}

export default SubscribeForm;