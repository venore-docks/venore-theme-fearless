import type { ThemeManifest } from "@venore/theme-sdk";

export const fearlessManifest: ThemeManifest = {
  key: "fearless",
  name: "Fearless",
  version: "0.1.0",
  themeContractVersion: "6.0.0",
  // mode "text": a marca é desenhada pelo BrandMark do próprio tema (âncora + wordmark); o
  // PlatformBrand genérico não é usado. `color` acompanha o latão de --accent (theme.css).
  brandAesthetics: { mode: "text", size: 100, scrolledSize: 80, position: "left", color: "#b07d2b" },
  colorModes: ["light", "dark"],
};
