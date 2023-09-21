const { createClient } = require('redis');

const client = createClient({
    socket: {
        host: 'localhost',
        port: 6379
    }
});

client.connect();

client.on('error', (error) => {
    console.log('Redis connection error: ', error.message);
});

client.on('connect', () => {
    console.log('Redis connection sucessfully');
});

exports.setRedisFunction = async (key, value) => {
    try {
        await client.set(key, JSON.stringify(value));
    } catch (error) {
        throw error.message;
    }
}

exports.getRedisFunction = async (key) => {
    try {
        const savedValue = await client.get(key);
        return JSON.parse(savedValue);
    } catch (error) {
        throw error.message;
    }
}