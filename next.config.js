/** @type {import('next').NextConfig} */

require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    SENDER_PRIVATE_KEY: process.env.SENDER_PRIVATE_KEY,
    RECIPIENT_ADDRESS: process.env.RECIPIENT_ADDRESS,
  },
};
