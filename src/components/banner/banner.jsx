import PropTypes from "prop-types";

const Banner = ({ title = "", backgroundImage }) => {
    return (
        <div className="banner">
            <div className="background-box" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            {title && <h2 className="banner__title">{title}</h2>}
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
};


export default Banner;