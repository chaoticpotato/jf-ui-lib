import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const TitleC = styled.h1`
  appearance: none;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => Title.sizes[props.size]};
  margin: 0;
  color: ${props => props.theme.colorGrey};
`;

export default function Title({ children, size }) {
  return (
    <TitleC size={size}>
      {children}
    </TitleC>
  );
}


Title.propTypes = {
  /** Title label */
  children: PropTypes.node.isRequired,
  /** The size of the title */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
};
Title.defaultProps = {
  size: 'normal'
};
Title.sizes = {
  small: '20px',
  normal: '24px',
  large: '28px',
};
