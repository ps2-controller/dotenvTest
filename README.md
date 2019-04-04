Testing how dotenv gets passed around folders.

Steps to reproduce:
1. Clone repo
2. From top-level directory, run `node indexjs`
3. Output = secret key from `.env` file, which is our expected behavior
4. `cd src`
5. node testing.js
6. Expected output is the same secret key from the previous file; however, the attempts to access the local variable return undefined from both the top level file, and the lower-level file.

Clearly the `process.env.key` variable is not being passed when the `index.js` file is being run from the lower-level directory where `index.js` is imported. Trying to figure out the best way to do this.


