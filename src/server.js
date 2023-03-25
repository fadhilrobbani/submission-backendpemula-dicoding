const Hapi = require('@hapi/hapi');
const routes = require('./routes');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const defaultPort = process.env.PORT || 9000;
const init = async () => {
  const server = Hapi.server({
    port: defaultPort,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
