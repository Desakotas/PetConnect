import React, { useState, useRef } from 'react';
import Button from "./Button";
import SubscribeForm from './SubscribeForm';
import './Subscribe.css';

function Subscribe() {
    const [name, setName] = useState('');
    const dialogRef = useRef();

    return (
        <main className="main main-subscribe" id="main">
            <h2 className="subscribe__title">Please click to Subscribe</h2>
            <Button className="subscribe-open" type="button" visual="button" ariaLabel="Open subscription dialog" onClick={() => dialogRef.current.showModal()}>Subscribe</Button>
            {name && <h2 className="response-text">Thank you {name}</h2>}
            <dialog ref={dialogRef} className='modal'>
                <h2>Subscribe to the Latest News!</h2>
                <SubscribeForm dialogRef={dialogRef} setName={setName} />
            </dialog>
        </main>
    );
}

export default Subscribe;