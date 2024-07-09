export interface ConsumerGroupUpdateCheckPointRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `ali-test-logstore`
     */
    "logstore": string;
    /**
     * 消费组名称。
     * @example `consumer_group_test`
     */
    "consumerGroup": string;
    /**
     * 消费者。
     * @example `consumer_1`
     */
    "consumer": string;
    /**
     * 是否强制更新。
     *   - true：强制更新
     *   - false：不强制更新
     * @example `true`
     */
    "forceSuccess"?: boolean;
    /**
     * Shard ID。
     */
    "body"?: {
        shard: number;
        checkpoint: string;
    };
}
