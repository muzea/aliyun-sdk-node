export interface DescribeChannelTopPubUserListResponse {
    /**
     * Top发布用户详情列表
     */
    TopPubUserDetailList: {
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
        /**
         * 地域位置，例如：北京市-北京市
         * @example `浙江省-杭州市`
         */
        Location: string;
        /**
         * 在线期间用户列表。
         */
        OnlinePeriods: {
            /**
             * 加入频道时间，使用UNIX时间戳表示，单位：秒。
             * @example `1615893327`
             */
            JoinTs: number;
            /**
             * 离开频道时间，使用UNIX时间戳表示，单位：秒。
             * @example `1615893442`
             */
            LeaveTs: number;
        }[];
        /**
         * 第一次加入频道的时间，使用UNIX时间戳表示，单位：秒。
         * @example `1615893327`
         */
        CreatedTs: number;
        /**
         * 最后一次离开频道的时间，使用UNIX时间戳表示，单位：秒。
         * @example `1615893442`
         */
        DestroyedTs: number;
        /**
         * 通信时长，单位：秒。
         * @example `115`
         */
        OnlineDuration: number;
        /**
         * 总时长，单位：秒。
         * @example `115`
         */
        Duration: number;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
