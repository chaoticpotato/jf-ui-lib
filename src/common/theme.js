import { getLuminance, lighten, darken } from 'polished';

const colorOffsetLight = 0.15;
const colorOffsetDark = 0.07;
const colorPrimary = '#4c7ff4';
const colorSecondary = '#01bd6f';
const doButtonsHaveBoxShadow = false;

console.log(getLuminance(colorSecondary));

function getHoverColor(color) {
  const a = getLuminance(color);
  const hC = a > 0.5 ?
    lighten(0.1, color) : 
    darken(0.1, color);

  return hC;
}

export default {
  buttonSizes: {
    small: '12px',
    normal: {
      fontSize: '14px',
      height: '34px',
      textTransform: 'initial',
      padding: '0 10px'
    },
    large: {
      fontSize: '14px',
      height: '40px',
      textTransform: 'uppercase',
      padding: '0 15px'
    }
  },
  buttonStrength: {
    normal: {
      colorBg: '#eee',
      hoverBg: getHoverColor('#eee'),
      colorText: '#444'
    },
    primary: {
      colorBg: colorPrimary,
      hoverBg: getHoverColor(colorPrimary),
      colorText: '#fff'
    },
    secondary: {
      colorBg: colorSecondary,
      hoverBg: getHoverColor(colorSecondary),
      colorText: '#fff'
    }
  },
  buttonBorderRadius: '3px',
  buttonDisabledColorBg: 'rgba(0, 0, 0, 0.12)',
  buttonDisabledColorText: 'rgba(0, 0, 0, 0.26)',
  buttonTransition: 'all .15s ease',
  fontSize: '16px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  
  arrowSize: '5px',
  disabledBackground: '#ededed',
  bodyBackground: '#ebebeb',
  colorWhite: '#fff',
  colorGrey: '#666',
  colorBlack: '#000',
  colorOffsetLight,
  colorOffsetDark,
  breakpoints: {
    mobile: '13.6em',
    mobileWide: '30.4em',
    tablet: '47.2em',
    desktop: '64em',
    desktopLarge: '97.6em',
  },
  zIndex: {
    deep: -1,
    level1: 0,
    level2: 10,
    level3: 20,
    level4: 50,
    level5: 99
  },
}
