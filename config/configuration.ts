export const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3001,
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
    postgres: {
        url: process.env.DATABASE_URL || 'localhost',
        port: process.env.DATABASE_PORT || '5432',
        user: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'root',
        database: process.env.DATABASE || 'db_name'
    }
  });