export interface DescribeRtcPeakChannelCntDataResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    PeakChannelCntDataPerInterval: {
        /**
         * 并发频道峰值数据结构。
         */
        PeakChannelCntModule: {
            /**
             * 峰值时刻，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2018-01-29T00:01:00Z`
             */
            ActiveChannelPeakTime: string;
            /**
             * 时间戳，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2018-01-29T00:00:00Z`
             */
            TimeStamp: string;
            /**
             * 并发频道峰值数量。
             * @example `10`
             */
            ActiveChannelPeak: number;
        }[];
    };
}
