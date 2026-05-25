import server from '../dist/server/server.js';

export const config = {
  runtime: 'edge',
};

export default function (request) {
  // Pass the request to the compiled TanStack Start server
  return server.fetch(request, process.env, {});
}
