require('dotenv').config();
const key = process.env.dotenvTestKey;
console.log(key);
module.exports = {
    key: key
}
