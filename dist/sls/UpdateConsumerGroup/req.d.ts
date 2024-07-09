export interface UpdateConsumerGroupRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `logstore-test`
     */
    "logstore": string;
    /**
     * 消费组名称。
     * @example `consumer-group-1`
     */
    "consumerGroup": string;
    /**
     * 请求体参数。
     */
    "body": {
        /**
         * 是否按顺序消费。
         * - true：在Shard中按顺序消费。Shard分裂后，先消费原Shard数据，然后同时消费由该Shard分裂的Shard数据。Shard合并后，先消费原Shard数据，然后消费由原Shard合并后的新Shard数据。
         * - false：不按顺序消费。即所有同时开始消费，Shard分裂或者合并后产生的新Shard，也会立即消费。
         * @example `true`
         */
        order: boolean;
        /**
         * 超时时间。在超时时间段内没有收到心跳，消费者将被删除。单位：秒。
         * @example `300`
         */
        timeout: number;
    };
}
