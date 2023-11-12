declare module 'vue' {
  interface ComponentCustomProperties {
    $const: Record<string, unknown>;
    ENV: { test: string };
  }
}

declare module '@aquaverse/front-library/dist/library';

export {}; // Important! See note.
