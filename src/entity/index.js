import {
    Sequelize
} from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import Company from './Company.js';
import Users from './Users.js';

if (!dbConfig || !dbConfig.sql) {
    console.log("no database configuration availabhle and its not connected");
}

const databBaseConfiguration = dbConfig.sql;

var db = {
    sequelize: new Sequelize(
        databBaseConfiguration.database,
        databBaseConfiguration.username,
        databBaseConfiguration.password, {
            host: databBaseConfiguration.host,
            dialect: databBaseConfiguration.dialect,
        }
    )
}
db.Company = Company(db.sequelize, Sequelize.DataTypes);
db.Users = Users(db.sequelize , Sequelize.DataTypes);
db.Query = db.sequelize;



export default db;