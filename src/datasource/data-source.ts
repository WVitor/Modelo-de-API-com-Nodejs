import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) ,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: true,
    entities: ['src/entity/*[.ts,.js]'],
    migrations: ['src/migration/*[.ts,.js]'],
    subscribers: [],
})