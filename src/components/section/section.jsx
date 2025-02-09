import PropTypes from 'prop-types';
import Collapse from '../collapse/collapse';

const Section = ({data}) => {
  return (
    <div className="section__container">
      {data.map((item, index) => (
        <Collapse
          key={index}
          title={item.title}
          content={item.content}
          contentClassName="section__text"  
        />
      ))}
    </div>
  );
};

Section.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Section;
