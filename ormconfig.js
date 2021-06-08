module.exports = {
    "type": "mysql",
    "host": process.env.BD_HOST,
    "port": 3306,
    "username": process.env.BD_USERNAME,
    "password": process.env.BD_PASS,
    "database": process.env.BD,
    "entities": ["./src/entities/**.ts"],
    "migrations": ["./src/database/migrations/**.ts"],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
 }