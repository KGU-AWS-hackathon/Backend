const app = require('./src/config/express');
const env = process.env;

app.listen(env.SERVER_PORT, () => 
    console.log('server open!!' + process.env.SERVER_PORT
))