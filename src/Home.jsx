import './Home.css';
import Button from './Button';
import Gallery from './Gallery';

function Home({setPage}) {
  
    return (
        <main className="main main-home" id="main">
            <div className="hero-image">
                <div className="hero-text">
                    <h2 className="text-title">Find your best friend</h2>
                    <p className="text-content">We Provide Information from Nationwide Shelters to Help You Connect with pets in Need of a Loving Home.</p>
                    <Button className="register-button" ariaLabel="register-button" onClick={() => setPage("Register")}>Register</Button>
                </div>
            </div>
            <Gallery/>
        </main>
    );
  }
  
  export default Home;