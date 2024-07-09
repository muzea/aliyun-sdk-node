export interface DescribeScdnDomainRealTimeReqHitRateDataResponse {
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    Data: {
        /**
         * 字节命中率数据列表。
         */
        ReqHitRateDataModel: {
            /**
             * 请求命中率数据。
             * @example `0.8956940476262277`
             */
            ReqHitRate: number;
            /**
             * 数据时间戳，日期格式按照ISO8601表示法，并使用UTC时间。例如：2016-10-20T04:00:00Z。
             * @example `2016-10-20T04:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
