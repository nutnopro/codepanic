module.exports = {
    db: {
        host: process.env.DB_HOST || 'localhost',    // ชื่อโฮสต์
        user: process.env.DB_USER || 'root',         // ชื่อผู้ใช้
        password: process.env.DB_PASSWORD || 'root', // รหัสผ่าน
        database: process.env.DB_NAME || 'game',     // ชื่อฐานข้อมูล
    },
    port: process.env.PORT || 5000,                  // พอร์ตที่เซิร์ฟเวอร์จะรัน
};
