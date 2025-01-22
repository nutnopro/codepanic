const mysql = require('mysql2/promise');
const { db } = require('./config'); // อ้างอิง config.js ในตำแหน่งที่ถูกต้อง

let pool;

const dbConnection = async () => {
    try {
        if (!pool) {
            pool = mysql.createPool({
                host: db.host,
                user: db.user,
                password: db.password,
                database: db.database,
                waitForConnections: true,
                connectionLimit: 10,
            });
            console.log('Database pool created successfully');
        }
        return pool;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); // ปิดโปรแกรมหากการเชื่อมต่อล้มเหลว
    }
};

module.exports = dbConnection;
