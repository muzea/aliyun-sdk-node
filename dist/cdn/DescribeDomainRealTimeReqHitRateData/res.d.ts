export interface DescribeDomainRealTimeReqHitRateDataResponse {
    /**
     * 请求ID。
     * @example `70A26B11-3673-479C-AEA8-E03FC5D3496D`
     */
    RequestId: string;
    Data: {
        /**
         * 返回数据。
         */
        ReqHitRateDataModel: {
            /**
             * 请求命中率数据。
             * @example `0.8956940476262277`
             */
            ReqHitRate: number;
            /**
             * 数据时间戳，日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2018-01-02T11:26:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
