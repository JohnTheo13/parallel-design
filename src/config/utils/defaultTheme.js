// @flow

import { white, gray900, primary } from './colors';

// Grayscale and brand colors for use across Bootstrap.

// Start with assigning color names to specific hex values.

// Options
//
// Quickly modify global styling by enabling or disabling optional features.

export const enableRounded: boolean = true;
export const enableShadows: boolean = false;
export const enableGradients: boolean = false;
export const enableTransitions: boolean = true;
export const enableHoverMediaQuery: boolean = false;
export const enableGridClasses: boolean = true;
export const enablePrintStyles: boolean = true;

export const borderWidth = '1px';

// Body
//
// Settings for the `<body>` element.

export const bodyBg = white;
export const bodyColor = gray900;

// Links
//
// Style anchor elements.

export const linkColor = primary;
export const linkDecoration = 'none';
// export const linkHoverColor = darken(0.15, linkColor);
export const linkHoverDecoration = 'underline';

// Components
//
// Define common padding and border radius sizes and more.

export const lineHeightLg = 4 / 3;
export const lineHeightSm = 1.5;

export const borderRadius = '0.25rem';
export const borderRadiusLg = '0.3rem';
export const borderRadiusSm = '0.2rem';

export const componentActiveColor = white;
export const componentActiveBg = primary;

export const caretWidth = '0.3em';

export const transitionBase = 'all .2s ease-in-out';
export const transitionFade = 'opacity 0.15s linear';
export const transitionCollapse = 'height 0.35s ease';

// Fonts
//
// Font, lineHeight, and color for body text, headings, and more.

export const fontFamilySansSerif = `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`;
export const fontFamilySerif = `Georgia, "Times New Roman", Times, serif`;
export const fontFamilyMonnospace = `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
export const fontFamilyBase = fontFamilySansSerif;

export const fontSizeBase = '1rem';
export const fontSizeLg = '1.25rem';
export const fontSizeSm = '0.875rem';
export const fontSizeXs = '0.75rem';

export const fontWeightNormal = 'normal';
export const fontWeightBold = 'bold';

export const fontWeightBase = fontWeightNormal;
export const lineHeightBase = 1.5;
