export interface DescribeCallListResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 每页数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数量。
     * @example `1`
     */
    TotalCnt: number;
    /**
     * 通信列表。
     */
    CallList: {
        /**
         * App ID。
         * @example `testappid`
         */
        AppId: string;
        /**
         * 频道ID。
         * @example `311`
         */
        ChannelId: string;
        /**
         * 通信状态。取值：
         * - **IN**：进行中。
         * - **OUT**：已结束。
         * @example `OUT`
         */
        CallStatus: string;
        /**
         * 通信的创建时间戳，使用UNIX时间戳表示，单位：秒。
         * @example `1615806196`
         */
        CreatedTs: number;
        /**
         * 通信的释放时间戳，使用UNIX时间戳表示，单位：秒。
         * @example `1615806296`
         */
        DestroyedTs: number;
        /**
         * 通信持续时长，单位：秒。
         * @example `100`
         */
        Duration: number;
        /**
         * 通信用户数。
         * @example `5`
         */
        UserCnt: number;
        /**
         * 通信体验差的用户数。
         * @example `0`
         */
        BadExpUserCnt: number;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
