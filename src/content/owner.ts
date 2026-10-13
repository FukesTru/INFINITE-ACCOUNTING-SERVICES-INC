/**
 * Owner details. The portrait must be a REAL photo supplied by the client.
 * To add it: save an optimized ~1000×1250 WebP as public/images/danielle-douglas.webp
 * and replace `photo: null` with the object shown below.
 *
 * photo: {
 *   src: "/images/danielle-douglas.webp",
 *   width: 1000,
 *   height: 1250,
 *   alt: "Danielle Douglas, President of Infinite Accounting Services, in the Orland Park office",
 * },
 */
export const owner: {
  name: string;
  photo: null | { src: string; width: number; height: number; alt: string };
} = {
  name: "Danielle Douglas",
  photo: null,
};
