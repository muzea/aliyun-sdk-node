export interface SplitShardRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `logstorename`
     */
    "logstore": string;
    /**
     * Shard ID。
     * @example `0`
     */
    "shard": number;
    /**
     * 分裂位置。
     * @example `ef000000000000000000000000000000`
     */
    "key"?: string;
    /**
     * Shard分裂个数。
     * @example `2`
     */
    "shardCount"?: number;
}
