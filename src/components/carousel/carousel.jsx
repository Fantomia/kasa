import { useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ images }) => {
    const [indexItem, setIndexItem] = useState(0);

    const handlePrev = () => { // Image précédente
        setIndexItem((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Retour à la dernière image si l'index actuel correspond à la première image
    };

    const handleNext = () => { // Image suivante
        setIndexItem((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // Retour à la première image si l'index correspond à la dernière image
    };

    // Calcul du numéro de la photo actuelle
    const currentNumber = indexItem + 1;

    // Déterminer s'il y a plus d'une image
    const isMultipleImages = images.length > 1;

    return (
        <>
            <div className="carousel__image">
                <img src={images[indexItem]} alt={`${currentNumber}/${images.length}`} />
            </div>
            {isMultipleImages && ( // Affiche les boutons Suivant et Précédent uniquement si il y a plus d'une image
                <div className="carousel__controls">
                    <button className="carousel__controls--btn" onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="sharp" strokeLinejoin="sharp" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                    <button className="carousel__controls--btn" onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="sharp" strokeLinejoin="sharp" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            )}
            {isMultipleImages && ( // Affiche le counter uniquement si il y a plus d'une image
                <div className="carousel__counter">
                    {currentNumber}/{images.length}
                </div>
            )}
        </>
    );
};

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
};
  

export default Carousel;
