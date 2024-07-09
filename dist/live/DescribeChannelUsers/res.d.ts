export interface DescribeChannelUsersResponse {
    /**
     * 请求ID。
     * @example `AD86847D-1F36-18C8-A995-5EEA340B3202`
     */
    RequestId: string;
    /**
     * 当前时刻的时间戳（UTC时间）。
     * @example `1691027655`
     */
    Timestamp: number;
    /**
     * 频道是否存在，取值：
     * - **true**：存在。
     * - **false**：不存在。
     * >频道无人后，会有若干秒的缓存，此时接口返回true，但互动者与观众人数都为0。
     * @example `true`
     */
    IsChannelExists: boolean;
    /**
     * 互动者用户总数。
     * @example `1`
     */
    InteractiveUserNumber: number;
    /**
     * 频道内的观众总数。
     * @example `1`
     */
    LiveUserNumber: number;
    /**
     * 互动用户列表。
     */
    InteractiveUserList: string[];
    /**
     * 观众列表。
     */
    LiveUserList: string[];
}
