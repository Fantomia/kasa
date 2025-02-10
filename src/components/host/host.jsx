import PropTypes from "prop-types";

const HostInfo = ({ host }) => {
  return (
    <>
      <div className="host__info">
          <p>{host.name}</p>
          <img src={host.picture} alt={`Host ${host.name}`} />
      </div>
    </>
  );
};

HostInfo.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string,
    }).isRequired,
};

export default HostInfo;