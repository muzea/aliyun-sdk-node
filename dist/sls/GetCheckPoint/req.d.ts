export interface GetCheckPointRequest {
    /**
     * Project 名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `test-logstore`
     */
    "logstore": string;
    /**
     * 消费组名称。
     * @example `consumer-group-1`
     */
    "consumerGroup": string;
    /**
     * Shard ID。
     * - 如果指定的Shard不存在，则返回空列表。
     * - 如果不指定Shard，则返回所有Shard的Checkpoint。
     * @example `1`
     */
    "shard"?: number;
}
