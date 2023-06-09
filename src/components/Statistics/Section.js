import PropTypes from 'prop-types';
import s from './Statistics.module.css';
function Section({ title, children }) {
  return (
    <div className={s.container}>
      {}
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
