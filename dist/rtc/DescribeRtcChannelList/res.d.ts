export interface DescribeRtcChannelListResponse {
    /**
     * 总页数。
     * @example `1000`
     */
    TotalCnt: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 显示数量。
     * @example `100`
     */
    PageSize: number;
    ChannelList: {
        /**
         * 通信记录。
         */
        ChannelList: {
            /**
             * 频道ID。
             * @example `testChannel`
             */
            ChannelId: string;
            /**
             * 会话结束时间，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2018-01-29T02:00:00Z`
             */
            EndTime: string;
            /**
             * 累计用户数量。
             * @example `2`
             */
            TotalUserCnt: number;
            /**
             * 会话起始时间，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2018-01-29T01:00:00Z`
             */
            StartTime: string;
            CallArea: {
                CallArea: string[];
            };
        }[];
    };
}
