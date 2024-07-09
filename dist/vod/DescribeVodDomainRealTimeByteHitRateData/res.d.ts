export interface DescribeVodDomainRealTimeByteHitRateDataResponse {
    /**
     * 请求ID。
     * @example `70A26B11-3673-479C-AEA8-E03FC5D3496D`
     */
    RequestId: string;
    Data: {
        /**
         * 返回数据详情。
         */
        ByteHitRateDataModel: {
            /**
             * 字节命中率（百分比数据）。
             * @example `0.8956940476262277`
             */
            ByteHitRate: number;
            /**
             * 数据时间戳，日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2020-05-15T09:13:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
