export type GetCheckPointResponse = {
    /**
     * Shard ID。
     * @example `0`
     */
    shard: number;
    /**
     * Checkpoint值。
     * @example `MTUyNDE1NTM3OTM3MzkwODQ5Ng==`
     */
    checkpoint: string;
    /**
     * Checkpoint最后的更新时间。Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1524224984800922`
     */
    updateTime: number;
    /**
     * Checkpoint处的消费者。
     * @example `consumer_1`
     */
    consumer: string;
}[];
