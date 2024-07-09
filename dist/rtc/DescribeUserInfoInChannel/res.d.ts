export interface DescribeUserInfoInChannelResponse {
    /**
     * 请求ID。
     * @example `6159ba01-6687-4fb2-a831-f0cd8d188648`
     */
    RequestId: string;
    /**
     * 当前时刻的时间戳（UTC时间）。
     * @example `1557909133`
     */
    Timestamp: number;
    /**
     * 用户当前是否在频道内，取值：
     * - **true**：在频道内。
     * - **false**：不在频道内。
     * @example `true`
     */
    IsInChannel: boolean;
    /**
     * 频道是否存在，取值：
     * - **true**：存在。
     * - **false**：不存在。
     * @example `true`
     */
    IsChannelExist: boolean;
    /**
     * 用户在频道内的信息。
     */
    Property: {
        /**
         * Session ID（会话ID）。
         * @example `xa744sxx8rtobgj****`
         */
        Session: string;
        /**
         * 会议中的角色类型，取值：
         * - **0**：通信模式下的用户角色。
         *
         * - **1**：interactive（参与互动）角色。
         *
         * - **2**：live（仅观看）角色。
         * @example `1`
         */
        Role: number;
        /**
         * 用户进入会议的时间（UTC时间）。
         * @example `1557909133`
         */
        Join: number;
    }[];
}
