export interface MergeShardRequest {
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
     * Shard ID。
     * @example `3`
     */
    "shard": number;
}
