export interface DescribeChannelAllUsersResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CF8`
     */
    RequestId: string;
    /**
     * 频道内在线的用户列表。
     */
    Users: {
        /**
         * 用户ID。
         * @example `1811****`
         */
        UserId: string;
    }[];
    /**
     * 频道是否存在。取值：
     * - **true**：存在。
     * - **false**：不存在。
     */
    ChannelExist: boolean;
}
