import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.sass';

const Button = (props) => {

  const {
    type,
    text,
    theme,
    isDisabled,
    children,
    size,
    isStretched,
    path,
    onClick
  } = props;

  return (
    type !== 'link' ?
      (<button
        type={ type }
        disabled={ isDisabled }
        className={`app-button ${
          theme ? 'app-button--' + theme : ''
        } ${
          size ? 'app-button--' + size : ''
        } ${
          isStretched ? 'app-button--stretched' : ''
        }`}
        onClick={ onClick }
      > { text || children } </button>) :
      (<Link
        to={ path }
        className={`app-button ${
          theme ? 'app-button--' + theme : ''
        } ${
          size ? 'app-button--' + size : ''
        } ${
          isStretched ? 'app-button--stretched' : ''
        }`}
        exact='true'
        onClick={ onClick }
      >{ text || children }</Link>)
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link']),
  classNames: PropTypes.oneOf(
    ['default', 'primary', 'danger', 'info']
  ),
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isStretched: PropTypes.bool,
  path: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  theme: 'default',
  size: 'medium',
  path: '/'
}

export default Button