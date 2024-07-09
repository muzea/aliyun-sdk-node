export interface DescribeChannelUsersResponse {
    /**
     * 通信模式下频道内的用户总数，如果频道为非通信模式，该参数为0。
     * @example `100`
     */
    CommTotalNum: number;
    /**
     * 请求ID。
     * @example `6159ba01-6687-4fb2-a831-f0cd8d188648`
     */
    RequestId: string;
    /**
     * 频道是否存在，取值：
     * - **true**：存在。
     * - **false**：不存在。
     * @example `true`
     */
    IsChannelExist: boolean;
    /**
     * 直播模式下频道内的观众总数，如果频道为非直播模式，该参数为0。
     * @example `0`
     */
    LiveUserNum: number;
    /**
     * 当前时刻的时间戳（UTC时间）。
     * @example `1557909133`
     */
    Timestamp: number;
    /**
     * 频道模式，取值：
     * - **1**：Communication（通信模式）。
     * - **2**：Interactive_live（直播模式）。
     * @example `1`
     */
    ChannelProfile: number;
    /**
     * 直播模式下频道内的互动者用户总数，如果频道为非直播模式，该参数为0。
     * @example `0`
     */
    InteractiveUserNum: number;
    UserList: string[];
    InteractiveUserList: string[];
    LiveUserList: string[];
}
