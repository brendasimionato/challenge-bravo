const redis = require('promise-redis')()
const redisClient = redis.createClient({
    host: process.env.REDIS_URL || 'localhost', 
    port: process.env.REDIS_PORT || 6379
})

export class CacheService {

    public get = async (key: string): Promise<any> => {
        return await redisClient.get(key)
    }

    public set = async (key: string, value: string) : Promise<any> => {
        return await redisClient.set(key, value)
    }

}