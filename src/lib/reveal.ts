import type { CSSProperties } from "react";

/** Spread onto an element to fade it up on scroll; `i` staggers siblings by 80ms each. */
export const reveal = (i = 0) => ({
  "data-reveal": "",
  style: { "--reveal-i": i } as CSSProperties,
});
