const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, 'src\\envirenments\\' + process.env.NODE_ENV + '.env')
})

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'test',
  HOST: process.env.HOST || '127.0.0.2',
  PORT: process.env.PORT || 3001
}
