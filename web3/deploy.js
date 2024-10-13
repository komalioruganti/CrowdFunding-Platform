require('dotenv').config();
const { execSync } = require('child_process');

const secretKey = process.env.THIRD_WEB_SECRET_KEY;

execSync(`npx thirdweb@latest deploy -k ${secretKey}`, { stdio: 'inherit' });
