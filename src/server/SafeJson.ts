/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

// TODO: figure out eventually
// See: https://flaviocopes.com/nextjs-serialize-date-json/
// or See: https://github.com/vercel/next.js/issues/13209
const safeJson = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

export default safeJson;
