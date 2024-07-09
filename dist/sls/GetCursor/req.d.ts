export interface GetCursorRequest {
    /**
     * project 名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `sls-test-logstore`
     */
    "logstore": string;
    /**
     * Shard ID。
     * @example `1`
     */
    "shardId": number;
    /**
     * 时间点（Unix时间戳）或者字符串`begin`、`end`。
     * @example `begin`
     */
    "from": string;
}
