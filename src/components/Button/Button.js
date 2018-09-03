import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


/**
 * The only true button.
 */

const B = styled.button`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.buttonSizes[props.size].fontSize};
  height: ${props => props.theme.buttonSizes[props.size].height};
  text-transform: ${props => props.theme.buttonSizes[props.size].textTransform};
  padding: ${props => props.theme.buttonSizes[props.size].padding};
  font-weight: ${props => props.theme.weightLight};
  border-radius: ${props => props.theme.buttonBorderRadius};
  border: 0;
  cursor: ${props => props.disabled ? 'default': 'pointer'};
  pointer-events: ${props => props.disabled ? 'none': 'inherit'};
  background-color: ${props => props.disabled ? props.theme.buttonDisabledColorBg : props.theme.buttonStrength[props.strength].colorBg};
  color: ${props => props.disabled ? props.theme.buttonDisabledColorText : props.theme.buttonStrength[props.strength].colorText};
  user-select: none;
  margin: 0 4px;
  transition: ${props => props.theme.buttonTransition};

  &:hover {
    background-color: ${props => props.disabled ? props.theme.buttonDisabledColorBg : props.theme.buttonStrength[props.strength].hoverBg};
  }

  svg {
    fill: ${props => props.disabled ? props.theme.buttonDisabledColorText : props.theme.buttonStrength[props.strength].colorText};
  }
`;

const I = styled.span`
  svg {
    width: 15px;
    margin-right: ${props => props.iconOnly ? '0': '8px'};
    vertical-align: text-bottom;
  }
`;

export default function Button({ className, children, title, disabled, icon, ...others }) {
  const cx = className ? `jbtn ${className}` : 'jbtn';
	return (
		<B
      className={cx}
      aria-label={title}
      {...others}
      tabIndex={disabled ? '-1' : null}
      disabled={disabled}
    >
      { icon && <I iconOnly={ children ? false : true }>{icon}</I> }
      { children }
		</B>
	);
}
Button.propTypes = {
	/** Button label */
  label: PropTypes.string,
  /** Button icon */
  icon: PropTypes.node,
	/** The size of the button */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** The strength of the button */
  strength: PropTypes.oneOf(['primary', 'secondary', 'delete', 'normal']),
	/** Disable button */
	disabled: PropTypes.bool,
  /** Button Title for accessibility */
  title: PropTypes.string,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
};
Button.defaultProps = {
	size: 'normal',
  strength: 'normal',
  disabled: false,
  title: 'Button',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};
