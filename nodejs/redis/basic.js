const Redis = require("ioredis");

(async()=>{
    const redis = new Redis({
        port: 6379,
        host: "127.0.0.1",
        password: "123123"
    });
    
    
    await redis.set("greeting", "Hello World");
    console.log(await redis.get("greeting"));
    await redis.expire("greeting", 10);

    redis.disconnect();
})() 

