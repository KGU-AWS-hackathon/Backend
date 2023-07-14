const db = require('../config/database');

class KickBoard {
    constructor(body) {
        this.body = body;
      }
      async kickBoardList() {
        try {
          const connection = await db.getConnection();
          await connection.query('USE aws_hack');
          const [rows] = await connection.query('SELECT * FROM kickboard');
          connection.release();
          return rows;
        } catch (error) {
          throw error;
        }
      }
}

module.exports = KickBoard;