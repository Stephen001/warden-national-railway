var redis = require("redis");
const { v4: uuidv4 } = require('uuid');

async function main(event) {
    var client = redis.createClient(
        {
            url: "rediss://" + process.env.REDIS_USER + ":" + process.env.REDIS_PASSWORD + "@" + process.env.REDIS_HOST + ":" + process.env.REDIS_PORT
        }
    );
    await client.connect();
    const key = event.steamid + ":" + event.stockpileid + ":" + uuidv4()
    await client.hSet(key, 
        {
            "name": event.stockpilename,
            "code": event.stockpilecode
        }
    );
    let out = await client.hGetAll(key);
    await client.disconnect();
    return { body: JSON.stringify(out, null, 2) };
};

module.exports = main;