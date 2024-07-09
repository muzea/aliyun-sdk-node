export interface DescribeDcdnDomainRealTimeQpsDataResponse {
    /**
     * 请求ID。
     * @example `32DC9806-E9F9-4490-BBDC-B3A9E32FCC1D`
     */
    RequestId: string;
    Data: {
        /**
         * 数据列表。
         */
        QpsModel: {
            /**
             * QPS数据。
             * @example `1851.25`
             */
            Qps: number;
            /**
             * 数据时间戳，日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2018-01-02T11:26:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
