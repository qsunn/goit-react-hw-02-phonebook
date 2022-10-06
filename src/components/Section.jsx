import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
