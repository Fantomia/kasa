import Collapse from "../collapse/collapse";
import HostInfo from "../host/host";
import RatingStars from "../rate/rating";
import PropTypes from "prop-types";

const LodgingInfo = ({ title, location, tags, lodging, description, equipments }) => {
    return (
        <>
            <div className='summary'>   
                <div className="summary__info">
                    <div className="summary__location">
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                    <div className="summary__tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="summary__list">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='host'>
                    <HostInfo host={lodging.host}/> 
                    <RatingStars rating={lodging.rating} />
                </div>
            </div>
            <div className='details'>
                <Collapse className="details__description" title="Description" content={description} />
                <Collapse className="details__equipments" title="Équipements" content={equipments} asList={true} />
            </div>
        </>
    );
}

LodgingInfo.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    lodging: PropTypes.shape({
        host: PropTypes.shape({ 
            name: PropTypes.string.isRequired, 
            picture: PropTypes.string, 
        }).isRequired,
        rating: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default LodgingInfo