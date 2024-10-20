// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://406a7539ecfe6d0ed99c08b66bd8c2e7@o4508142090387456.ingest.de.sentry.io/4508152596136016",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
