import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const previewMode = process.env.BASE44_PREVIEW_MODE === "1";
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    // In the Base44 preview, the proxy sends a sandbox-internal Host header.
    // Allow that host family only when the preview flag is set.
    allowedHosts:
      previewMode && sandboxDomain ? [`.${sandboxDomain}`] : undefined,
  },
});
