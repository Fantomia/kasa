import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ title, content, contentClassName = '', asList = false, className ='' }) => {
  const [isOpen, setIsOpen] = useState(false); // Collapse est fermé par défaut
  const [contentHeight, setContentHeight] = useState(0); // Stocke la hauteur du contenu pour l'animation
  const refHeight = useRef(null); // Référence pour calculer la hauteur réelle

  useEffect(() => {
    if (refHeight.current) {
      setContentHeight(refHeight.current.scrollHeight); // Met à jour la hauteur du contenu basé sur son scrollHeight
    }
  }, [isOpen]);

  return (
    <div className={`collapse ${className}`}> 
      <div className="collapse__title" onClick={() => setIsOpen(!isOpen)}> 
        <h2>{title}</h2>
        <button className={`collapse__toggle ${isOpen ? 'rotate' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
      <div
        ref={refHeight}
        className={`collapse__content ${isOpen ? 'collapse__content--expanded' : ''} ${contentClassName}`}
        style={{
          height: isOpen ? `${contentHeight + 40}px` : '0px', // Si le collapse est ouvert, on donne la hauteur calculée
        }}
      >
        {asList ? <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul> : <p>{content}</p>}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  contentClassName: PropTypes.string,
  asList: PropTypes.bool,
  className: PropTypes.string,
};

export default Collapse;