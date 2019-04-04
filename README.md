# Testing how dotenv gets passed around lower level vs top-level directories.

## Steps to reproduce:
1. Clone repo
2. From top-level directory, run `node index.js`

Expected behavior matches actual behavior: `process.env` from lower directory is appropriately accessed from the top level directory when `let passer = require('./src/testing.js');` is run from `index.js`.


