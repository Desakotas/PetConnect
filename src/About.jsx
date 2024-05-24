import './About.css';
import Button from './Button';
import { useState } from 'react';

function About() {
    const [themeChanged,setThemeChanged] = useState(false);

    return (
        <main className="main main-about">
            <div className={`about-section ${themeChanged ? '' : 'light'}`}>
                <Button className="theme-button" type="button" ariaLabel="Button for changing the theme to dark or light" onClick={()=>setThemeChanged(!themeChanged)}>Change Theme</Button>
                <h2 className="about__title">About Pet Connect</h2>
                <p className="about__text">At Pet Connnect, we believe that every animal deserves a loving home, and every person deserves the joy of pet companionship. Founded in 2023, our mission has been to bridge the gap between animals in need and the people who want to welcome them into their lives.</p>

                <h3 className="about__subtitle">Our Story</h3>
                <p className="about__text">Pet Connect began as a small idea in Micheal's living room, driven by a passion for animal welfare and a vision to make pet adoption easier and more accessible for everyone. Since then, we've grown into a nationwide network, partnering with over 11,500 rescues and shelters across the country.</p>

                <h3 className="about__subtitle">What We Do</h3>
                <p className="about__text">We are more than just a pet adoption website. We are a community dedicated to making a difference. Our platform provides comprehensive listings of pets from rescues and shelters nationwide, detailed information and resources to guide you through the adoption process, support and advice for pet owners, and advocacy for animal welfare.</p>

                <h3 className="about__subtitle">Our Impact</h3>
                <p className="about__text">Through our efforts, we've facilitated thousands of connections between pets and families, helping reduce the number of animals in shelters and bringing joy to homes across the country.</p>

                <h3 className="about__subtitle">Join Our Community</h3>
                <p className="about__text">We invite you to be a part of our journey. Whether you're looking to adopt, volunteer, donate, or simply learn more about responsible pet ownership, your involvement makes a difference.or more information, or to share your adoption story, please contact us at 9174210592. We love hearing from our community and are always here to help.</p>

            </div>
        </main>
    );
  }
  
  export default About;