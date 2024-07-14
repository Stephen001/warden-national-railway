var redis = require("redis");

async function main(event) {
    var client = redis.createClient(
        {
            url: "rediss://:" + process.env.REDIS_USER + ":" + process.env.REDIS_PASSWORD + "@" + process.env.REDIS_HOST + ":" + process.env.REDIS_PORT
        }
    );
    await client.connect();
    return { body: 'Hello world' };
};

module.exports = main;