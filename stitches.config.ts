import { createCss, StitchesCss } from '@stitches/react';
export type { StitchesVariants } from '@stitches/react';
import { red, redDark, slate, slateDark } from '@radix-ui/colors';

const stitches = createCss({
  theme: {
    colors: {
      ...red,
      ...slate,
      hiContrast: '$slate12',
      loContrast: 'white',
    },
    fonts: {
      base: 'Roboto, -apple-system, system-ui, sans-serif',
      mono: 'PT Mono, monospace',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
    },
    fontSizes: {
      1: '0.75rem',
      2: '0.875rem',
      3: '1rem',
      4: '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.875rem',
      8: '2.25rem',
      9: '3rem',
    },
    radii: {
      1: '4px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    // motion: '(prefers-reduced-motion)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value: any) => ({
      paddingTop: value,
    }),
    pr: (config) => (value: any) => ({
      paddingRight: value,
    }),
    pb: (config) => (value: any) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value: any) => ({
      paddingLeft: value,
    }),
    px: (config) => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value: any) => ({
      marginTop: value,
    }),
    mr: (config) => (value: any) => ({
      marginRight: value,
    }),
    mb: (config) => (value: any) => ({
      marginBottom: value,
    }),
    ml: (config) => (value: any) => ({
      marginLeft: value,
    }),
    mx: (config) => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (config) => (value: any) => ({ textAlign: value }),

    size: (config) => (value: any) => ({
      width: value,
      height: value,
    }),
  },
});

export type CSS = StitchesCss<typeof stitches>;

export const { styled, css, theme, getCssString, global, keyframes, config } =
  stitches;

export const utils = config.utils;

export const darkTheme = theme('dark-theme', {
  colors: {
    ...redDark,
    ...slateDark,
    hiContrast: '$slate12',
    loContrast: '$slate1',
  },
});
