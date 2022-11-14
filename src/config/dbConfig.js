export default dbconfig();

function dbconfig() {
    return {
        sql: {
            host: "localhost",
            database: "companies_users_lists",
            username: "root",
            password: "root",
            dialect: "mysql",
            logging: true,
            maxConcurrentQueries: 1000,
            omitNull: true,
            native: true,
            language: "en",
            port:8081
        }
    }
}