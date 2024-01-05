import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';


const Section = ({ title, children }) => {
  return (
    <SectionStyled >
      {title && <h2 >{title}</h2>}
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Section;