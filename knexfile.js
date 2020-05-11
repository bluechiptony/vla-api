require("dotenv").config();
module.exports = {
  development: {
    client: "process.env.KNEX_DATABASE_CLIENT",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATBASE_PASSWORD
    }
  },

  staging: {
    client: "process.env.KNEX_DATABASE_CLIENT",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATBASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "process.env.KNEX_DATABASE_CLIENT",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATBASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

