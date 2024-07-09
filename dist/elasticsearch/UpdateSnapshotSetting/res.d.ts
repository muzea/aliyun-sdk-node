export interface UpdateSnapshotSettingResponse {
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
         * 自动备份开始时间。
         * @example `0 0 01 ? * * *`
         */
        quartzRegex: string;
        /**
         * 是否开启自动备份。
         * @example `true`
         */
        enable: boolean;
    };
}
