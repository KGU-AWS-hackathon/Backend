const db = require('../../backend/src/config/database');

class Board {
    constructor(body) {
        this.body = body;
      }
      async upload(userid, data) {
        try {
            const boardUploadQuery = 'INSERT INTO board (title, content, categoryId, userId) VALUES (?, ?, ?, ?);'
            const connection = await db.getConnection();
            await connection.query('USE aws_hack');
            const result = await connection.query(boardUploadQuery, [data.title, data.content, data.categoryId, userid]);
            connection.release();
            return result;
        } catch (error) {
          throw error;
        }
      }

}

module.exports = Board;