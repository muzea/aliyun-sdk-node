export interface DescribeScdnDomainQpsDataResponse {
    /**
     * 结束时间。
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2017-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 安全加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `300`
     */
    DataInterval: string;
    QpsDataPerInterval: {
        /**
         * 每个时间间隔的每秒访问次数QPS。
         */
        DataModule: {
            /**
             * HTTPS访问次数。
             * @example `50`
             */
            HttpsAccValue: string;
            /**
             * 总QPS。
             * @example `0.56`
             */
            QpsValue: string;
            /**
             * 总访问次数。
             * @example `100`
             */
            AccValue: string;
            /**
             * http QPS。
             * @example `0.28`
             */
            HttpQpsValue: string;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T21:00:00Z`
             */
            TimeStamp: string;
            /**
             * https QPS。
             * @example `0.28`
             */
            HttpsQpsValue: string;
            /**
             * HTTP访问次数。
             * @example `50`
             */
            HttpAccValue: string;
        }[];
    };
}
