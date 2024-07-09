export interface DescribeChannelUserResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CF8`
     */
    RequestId: string;
    /**
     * 用户当前是否在频道内。取值：
     * - **true**：在频道内。
     * - **false**：不在频道内。
     */
    InChannel: boolean;
    /**
     * 会话信息列表。
     */
    Sessions: {
        /**
         * 用户ID。
         * @example `1811****`
         */
        UserId: string;
        /**
         * 会话ID。
         * @example `xa744sxx8rtobgj****`
         */
        SessionId: string;
        /**
         * 用户进入频道的秒级时间戳（UTC时间）。
         * @example `1557909133`
         */
        Joined: number;
    }[];
    /**
     * 频道是否存在。取值：
     * - **true**：存在。
     * - **false**：不存在。
     */
    ChannelExist: boolean;
}
