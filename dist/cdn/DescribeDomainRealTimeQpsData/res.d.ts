export interface DescribeDomainRealTimeQpsDataResponse {
    /**
     * 请求ID。
     * @example `32DC9806-E9F9-4490-BBDC-B3A9E32FCC1D`
     */
    RequestId: string;
    Data: {
        /**
         * 返回数据。
         */
        QpsModel: {
            /**
             * QPS（每秒访问次数）数据。
             * @example `1851.25`
             */
            Qps: number;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2019-12-02T11:25:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
