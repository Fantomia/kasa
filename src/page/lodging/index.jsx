import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import lodgingData from '../../data/lodging.json';
import Carousel from '../../components/carousel/carousel.jsx';
import LodgingInfo from '../../components/lodging/lodging.jsx';

const Lodging = () => {
      const { id } = useParams();
      const lodging = lodgingData.find(item => item.id === id);
      const navigate = useNavigate();
    
    
      React.useEffect(() => {
        if (!lodging) {
          navigate('/error');
        }
      }, [lodging, navigate]);
    
      if (!lodging) {
        return null;
      }
    
      return (
            <>
                  <div className="carousel">
                        <Carousel images={lodging.pictures} />
                  </div>
                  <LodgingInfo 
                        title={lodging.title}
                        location={lodging.location}
                        tags={lodging.tags}
                        lodging={lodging}
                        description={lodging.description}
                        equipments={lodging.equipments}
                  />
            </>
      )
};
  
export default Lodging;