import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOST_NAME = process.env.SERVER_HOST_NAME || "localhost";
const SERVER_PORT = process.env.PORT || "3000";

export default {
    server: {
        hostname: SERVER_HOST_NAME,
        port: SERVER_PORT
    }
}