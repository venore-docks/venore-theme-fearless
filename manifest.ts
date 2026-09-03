import type { ThemeManifest } from "@venore/theme-sdk";

export const fearlessManifest: ThemeManifest = {
  key: "fearless",
  name: "Fearless",
  version: "0.1.0",
  themeContractVersion: "6.0.0",
  // A marca usa o logo real do site (brand.logoUrl de contexts/settings), via PlatformBrand.
  brandAesthetics: { mode: "svg", size: 78, scrolledSize: 72, position: "left", color: "#b07d2b" },
  colorModes: ["light", "dark"],
};
