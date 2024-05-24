import Card from './Card';
import Ragdoll1 from './assets/image/breed/Ragdoll1.jpg';
import Ragdoll2 from './assets/image/breed/Ragdoll2.jpg';
import Ragdoll3 from './assets/image/breed/Ragdoll3.jpg';
import ShortHair1 from './assets/image/breed/ShortHair1.jpg';
import ShortHair2 from './assets/image/breed/ShortHair2.jpg';
import ShortHair3 from './assets/image/breed/ShortHair3.jpg';
import './Breed.css';

function Breeds() {

    return (
        <main className="main main-breed" id="main">
            <h2 className="breed__title">Browse by Breeds</h2>
            <div className="breed__cards">
                <h3 className="breed__name">Ragdoll</h3>
                <Card
                    className="breed-card"
                    title="Jorts"
                    image= {Ragdoll1}
                    imageAlt="The image features a white kitten with soft fur, lying on a grey bedsheet. The kitten has striking blue eyes and appears to be in a playful or curious pose, with its ears perked up and attention directed towards something out of the frame."
                    text="This cute kitty's name is Jorts and this Ragdoll kitten is gentle, relaxed and has a really sweet nature. He loves to be cuddled and to curl up on your lap.. "
                    linkText="Read More"
                />

                <Card
                    className="breed-card"
                    title="Tom"
                    image={Ragdoll2}
                    imageAlt="This image features a Ragdoll cat with striking blue eyes and a fluffy coat marked with darker colors on the ears, face, and paws, typical of the breed."
                    text="My Ragdoll kittens are playful, they like children and are good with other pets, including dogs. They are sweet, love people and show great loyalty to their owners."
                    linkText="Read More"
                />

                <Card
                    className="breed-card"
                    title="Lucy"
                    image={Ragdoll3}
                    imageAlt="This image shows a sleeping cat with a serene expression, comfortably nestled on what appears to be a cushioned surface with a striped pattern in the background."
                    text="This is an extremely trusting cat with a lustrous, silky coat which is very easy to care for. Walk in anytime during our visiting hours to meet our Ragdoll kittens in Seattle."
                    linkText="Read More"
                />
            </div>

            <div className="breed__cards">
                <h3 className="breed__name">Domestic Short Hair</h3>
                <Card
                    className="breed-card"
                    title="Harus"
                    image={ShortHair1}
                    imageAlt="This image presents a domestic short-haired cat with a mix of tabby and white coat, sitting on a table. "
                    text="Harus is perfect for families with children. He loves to play and do so with their claws retracted, which provides for safer interactions and helps reduce play-related accidents."
                    linkText="Read More"
                />

                <Card
                    className="breed-card"
                    title="Raymond"
                    image={ShortHair2}
                    imageAlt="A tiny kitten with a white and brown fur pattern being cradled in someone's hand"
                    text="Raymondloves being with people and will follow you around like a fluffy shadow, looking for love and affection. He is even known to greet you at the door when you get home."
                    linkText="Read More"
                />

                <Card
                    className="breed-card"
                    title="Curry"
                    image={ShortHair3}
                    imageAlt="This image shows a tabby and white cat with its eyes gently closed, giving the impression of relaxation or sleep."
                    text="Lucy does not like to be left alone for long periods and can get bored if she is not stimulated. She also crave routine and will not appreciate changes to meal times."
                    linkText="Read More"
                />
            </div>
        </main>
    );
  }
  
  export default Breeds;