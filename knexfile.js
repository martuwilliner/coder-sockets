// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // SQL3 database
  development: {
    client: 'sqlite3',
    connection: {
      filename: './DB/mydb.sqlite',
    },
    migrations:{
      directory: './src/database/sql3/migrations' //Migrations directory
    },
    seeds:{
      directory: './src/database/sql3/seeds' //Seeds directory
    }
  },

  // MySQL config
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'productoscoder'
    },
    migrations:{
      directory: './src/database/mysql/migrations' //Migrations directory
    },
    seeds:{
      directory: './src/database/mysql/seeds' //Seeds directory
    }
  }

};
