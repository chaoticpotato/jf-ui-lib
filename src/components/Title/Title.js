import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleC = styled.h1`
  display: block;
  cursor: pointer;
  color: red;
  appearance: none;
  font-size: ${props => Title.sizes[props.size]};
  content: ${props => Title.sizes.small};
  content: ${props => props.size};
  margin: 0;
`;

export default function Title({ children, size }) {
  return (
    <TitleC size="huge">
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
