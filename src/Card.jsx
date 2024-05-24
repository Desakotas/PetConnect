import './Card.css';
import Button from './Button';

function Card({
    className,
    title, image,
    imageAlt, text, text2, linkText,
}) {

    return (
        <div className={className}>
            <img 
                className={`${className}__pic`}
                src={image}
                alt={imageAlt}
            />
            <h3 className={`${className}__title`}>{title}</h3>
            <p className={`${className}__text`}>{text}</p>
            <p className={`${className}__text`}>{text2}</p>
            {linkText && 
                <Button 
                    className={`${className}__button`}
                    type="button"
                    ariaLabel={`Learn more about ${title}`}
                >
                    {linkText}
                </Button>
            }
        </div>
    );
}

export default Card;