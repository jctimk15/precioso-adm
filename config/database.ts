// path: precioso-adm/config/database.ts

import { parse } from 'pg-connection-string';

export default ({ env }) => {
  const dbUrl = env('DATABASE_URL');

  // Se a DATABASE_URL não existir (como durante o build), usa uma config padrão.
  if (!dbUrl) {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: '.tmp/data.db',
        },
        useNullAsDefault: true,
      },
    }
  }

  // Se a DATABASE_URL existir (com o site no ar), usa a config do PostgreSQL.
  const { host, port, database, user, password } = parse(dbUrl);

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  };
};