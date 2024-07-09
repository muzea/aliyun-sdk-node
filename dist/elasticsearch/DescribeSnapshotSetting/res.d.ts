export interface DescribeSnapshotSettingResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 是否开启自动备份。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 自动备份时间配置，采用Quartz Cron表达式。
         * @example `0 0 01 ? * * *`
         */
        QuartzRegex: string;
    };
}
