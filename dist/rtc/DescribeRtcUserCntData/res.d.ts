export interface DescribeRtcUserCntDataResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    UserCntDataPerInterval: {
        /**
         * 活跃用户统计数据结构。
         */
        UserCntModule: {
            /**
             * 当前活跃用户数（基于发生通信的用户终端统计）。
             * @example `10`
             */
            ActiveUserCnt: number;
            /**
             * 时间戳，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2018-01-29T00:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
