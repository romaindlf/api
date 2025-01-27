'use strict';

const TheforkLogger = require('@thefork/node-logger');

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 9999
  },
  logger: {
    logsDir: 'logs',
    level: 'info',
    streams: [TheforkLogger.STREAM_NAMES.LOGSTASH_FILE],
  },
  db: {
    master: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'lafourchette',
        password: 'lafourchette',
        database: 'kartenn'
      }
    },
    slave: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'lafourchette',
        password: 'lafourchette',
        database: 'kartenn'
      }
    }
  },
  graphql: {
    introspection: true,
  },
};
