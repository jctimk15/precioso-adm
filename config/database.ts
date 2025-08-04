// path: precioso-adm/config/database.ts

import path from 'path';
import { parse } from 'pg-connection-string';

export default ({ env }) => {
  const { host, port, database, user, password } = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false }, // Adicionado para conexões no Render
      },
      debug: false,
    },
  }
};