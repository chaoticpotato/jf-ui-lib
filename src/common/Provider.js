import React, { Children, isValidElement, cloneElement } from 'react'
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

import defaultTheme from './theme';

export default class StyleProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    theme: defaultTheme,
    renderer: null,
  }

  render() {
    const { children, theme } = this.props;

    return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
  }
}
