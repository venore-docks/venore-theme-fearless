import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Catálogo gerado dos tokens de hue de marca do theme.css deste tema (L/C preservados, hue gira).
export const FEARLESS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.38 0.08 235)",
      primaryForeground: "oklch(0.97 0.01 90)",
      accent: "oklch(0.72 0.13 78)",
      accentForeground: "oklch(0.24 0.05 70)",
      ring: "oklch(0.66 0.13 78)",
    },
    dark: {
      primary: "oklch(0.8 0.09 205)",
      primaryForeground: "oklch(0.17 0.03 222)",
      accent: "oklch(0.78 0.13 78)",
      accentForeground: "oklch(0.18 0.04 70)",
      ring: "oklch(0.78 0.13 78)",
    },
  },
  THEME_HUE_PRESETS,
);
