export interface DescribeChannelResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CF8`
     */
    RequestId: string;
    /**
     * 频道信息。
     */
    Channel: {
        /**
         * 频道开始的秒级时间戳（UTC时间）。
         * @example `1557909133`
         */
        StartTime: number;
        /**
         * 频道ID。
         * @example `testid`
         */
        ChannelId: string;
    };
    /**
     * 频道是否存在。取值：
     * - **true**：存在。
     * - **false**：不存在。
     */
    ChannelExist: boolean;
}
