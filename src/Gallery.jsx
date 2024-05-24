import { useState } from "react";
import Data from "./Data";
import Card from './Card';
import './Gallery.css';
import Button from "./Button";

function Gallery() {
    const [items, setItems] = useState(Data);
    const [active, setActive] = useState("Show all");

    const filterItem = (categItem) => {
        if (categItem === "Show all") {
            setItems(Data);
        } else {
            const updatedItems = Data.filter((curElem) => {
                return curElem.category === categItem;
            });
            setItems(updatedItems);
        }
        setActive(categItem);
    };

    return (
        <div className="gallery">
            <h2 className="gallery__title">Browse by location</h2>
            <div className="gallery__nav">
                {["Show all", "Seattle", "New York City"].map((category) => (
                    <Button
                        key={category}
                        className={`gallery__nav-button ${active === category ? 'active' : ''}`}
                        onClick={() => filterItem(category)}
                        ariaLabel={`Filter pets by ${category === 'Show all' ? 'all' : category} location`}
                    >
                        {category}
                    </Button>
                ))}
            </div>
            
            {items.map((item) => {
                return (
                    <Card
                        key={item.id}
                        className="gallery__card card" 
                        title={item.name}
                        image={item.image}
                        imageAlt={item.alt}
                        text={item.description}
                        text2={item.distance}
                    />
                );
            })} 
        </div>
    );
}

export default Gallery; 