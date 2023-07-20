import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider, adaptV4Theme } from '@mui/material/styles';
//
import shape from './shape';
import darkpalette from './darkpalette';
import lightpalette from './lightpalette';
import typography from './typography';
import breakpoints from './breakpoints';
// import GlobalStyles from './globalStyles';
import lightshadows, { lightcustomShadows } from './lightshadows';
import darkshadows, { darkcustomShadows } from './darkshadows';
// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children, themePref }) {
  const darkthemeOptions = useMemo(
    () => ({
      palette: darkpalette,
      shape,
      typography,
      shadows: darkshadows,
      customShadows: darkcustomShadows
    }),
    []
  );
  const lightthemeOptions = useMemo(
    () => ({
      palette: lightpalette,
      shape,
      typography,
      shadows: lightshadows,
      customShadows: lightcustomShadows
    }),
    []
  );

  let theme;
  if (themePref === 'light') {
    theme = createTheme(adaptV4Theme(lightthemeOptions));
  } else if (themePref === 'dark') {
    theme = createTheme(adaptV4Theme(darkthemeOptions));
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <GlobalStyles /> */}
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
