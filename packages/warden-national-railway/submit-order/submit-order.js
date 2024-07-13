var redis = require("redis");

export function main(event) {
    var client = redis.createClient(
        {
            username: process.env.REDIS_USER,
            password: process.env.REDIS_PASSWORD,
            socket: {
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT
            }
        }
    );
};
