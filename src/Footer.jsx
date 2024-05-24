import Button from './Button';
import './Footer.css';
import { useState } from 'react';

function Footer() {
    const [content, setContent] = useState('');
   
    return (
        <footer className="footer">
            <div className="footer__nav">
                <Button className="footer__button" type="button" visual="link" onClick={ () => {setContent("Privacy Policy")}}>Privacy Policy</Button>
                <Button className="footer__button" type="button" visual="link" onClick={ () => {setContent("Contact Us")}}>Contact Us</Button>
                <Button className="footer__button" type="button" visual="link" onClick={ () => {setContent("Work For Us")}}>Work For Us</Button>
            </div>
            
            {content === "Privacy Policy" && (
                <div className="footer__content">
                    <h2 className="content__title">Privacy Policy</h2>
                    <p className="content__text">This website uses cookies and similar technologies to understand your use of our website and give you a better experience. By continuing to use the site or closing this banner without changing your cookie settings, you agree to our use of cookies and other technologies.</p>
                </div>
            )}

            {content === "Contact Us" && (
                <div className="footer__content">
                    <h2 className="content__title">Contact Us</h2>
                    <p className="content__text">Please Note: For inquiries specific to a particular pet or the policies of a shelter, it's best to contact the shelter directly. Reaching out to us at Petfinder may result in delays in your search for a pet, as each shelter is responsible for managing their own listings and information on our website</p>
                </div>
            )}
            
            {content === "Work For Us" && (
                <div className="footer__content">
                    <h2 className="content__title">Work For Us</h2>
                    <p className="content__text">At Pet Connect, we're not just a team; we're a family united by a shared passion for animal welfare. If you're looking for a rewarding career that makes a real difference in the lives of animals, you've come to the right place.</p>
                </div>
            )}
        </footer>
    );
}

export default Footer; 